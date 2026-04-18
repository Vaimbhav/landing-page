import {useMemo, useState} from 'react';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const WHATSAPP_REGEX = /^\+?[1-9]\d{7,14}$/;
const ALLOWED_ROLES = ['MEMBER', 'GUIDE', 'HOMESTAY_OWNER'];
const STORAGE_KEY = 'qs_waitlist_emails';

const initialFormState = {
	fullName: '',
	whatsappNumber: '',
	email: '',
	role: 'MEMBER',
};

const getStoredEmails = () => {
	if (typeof window === 'undefined') {
		return [];
	}

	try {
		const raw = window.localStorage.getItem(STORAGE_KEY);
		const parsed = raw ? JSON.parse(raw) : [];

		if (!Array.isArray(parsed)) {
			return [];
		}

		return parsed.filter((item) => typeof item === 'string');
	} catch {
		return [];
	}
};

const persistEmail = (email, existingEmails) => {
	if (typeof window === 'undefined') {
		return existingEmails;
	}

	const next = Array.from(new Set([...existingEmails, email]));
	window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
	return next;
};

const normalizeName = (name) => name.trim().replace(/\s+/g, ' ');
const normalizeWhatsapp = (phone) => phone.trim().replace(/[\s()-]/g, '');
const normalizeEmail = (email) => email.trim().toLowerCase();

export const useWaitlist = () => {
	const [form, setForm] = useState(initialFormState);
	const [knownEmails, setKnownEmails] = useState(() => getStoredEmails());
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [feedback, setFeedback] = useState({
		type: 'idle',
		message: '',
	});

	const normalizedName = useMemo(() => normalizeName(form.fullName), [form.fullName]);
	const normalizedWhatsapp = useMemo(
		() => normalizeWhatsapp(form.whatsappNumber),
		[form.whatsappNumber],
	);
	const normalizedEmail = useMemo(() => normalizeEmail(form.email), [form.email]);
	const normalizedRole = useMemo(() => form.role.trim().toUpperCase(), [form.role]);

	const nameError = normalizedName.length < 2 ? 'Enter a valid full name.' : '';
	const whatsappError = WHATSAPP_REGEX.test(normalizedWhatsapp)
		? ''
		: 'Enter a valid WhatsApp number with country code.';
	const emailError = EMAIL_REGEX.test(normalizedEmail) ? '' : 'Enter a valid email address.';
	const roleError = ALLOWED_ROLES.includes(normalizedRole)
		? ''
		: 'Select a valid role.';

	const formError = nameError || whatsappError || emailError || roleError;
	const isDuplicateLocal = useMemo(
		() => knownEmails.includes(normalizedEmail),
		[knownEmails, normalizedEmail],
	);

	const setField = (field, value) => {
		setForm((prev) => ({
			...prev,
			[field]: value,
		}));
	};

	const submit = async (event) => {
		event.preventDefault();

		if (isSubmitting) {
			return;
		}

		if (formError) {
			setFeedback({
				type: 'error',
				message: formError,
			});
			return;
		}

		if (isDuplicateLocal) {
			setFeedback({
				type: 'success',
				message: 'You are already on the waitlist with this email.',
			});
			return;
		}

		setIsSubmitting(true);
		setFeedback({type: 'idle', message: ''});

		try {
			const apiBaseUrl = (
				import.meta.env.VITE_API_BASE_URL || '/api'
			).replace(/\/$/, '');
			const response = await fetch(`${apiBaseUrl}/waitlist`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					fullName: normalizedName,
					whatsappNumber: normalizedWhatsapp,
					email: normalizedEmail,
					role: normalizedRole,
				}),
			});

			const payload = await response.json().catch(() => ({}));

			if (response.status === 201) {
				setKnownEmails((prev) => persistEmail(normalizedEmail, prev));
				setForm((prev) => ({
					...initialFormState,
					role: prev.role,
				}));
				setFeedback({
					type: 'success',
					message:
						payload.message ||
						'Registration received. We will contact you for onboarding.',
				});
				return;
			}

			if (response.status === 409) {
				setKnownEmails((prev) => persistEmail(normalizedEmail, prev));
				setFeedback({
					type: 'success',
					message:
						payload.message || 'You are already on the waitlist.',
				});
				return;
			}

			setFeedback({
				type: 'error',
				message:
					payload.message ||
					'Something went wrong. Please try again in a moment.',
			});
		} catch {
			setFeedback({
				type: 'error',
				message:
					'Could not reach server. Please check your connection and try again.',
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return {
		form,
		setField,
		fieldErrors: {
			fullName: nameError,
			whatsappNumber: whatsappError,
			email: emailError,
			role: roleError,
		},
		isFormValid: !formError,
		isDuplicateLocal,
		isSubmitting,
		feedback,
		submit,
	};
};
