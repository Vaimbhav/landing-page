import {useMemo, useState} from 'react';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// National number only (country code handled separately). 7-14 digits.
const WHATSAPP_NATIONAL_REGEX = /^[1-9]\d{6,13}$/;
const ALLOWED_ROLES = ['TRAVELLER', 'MEMBER', 'GUIDE', 'HOMESTAY_OWNER'];
const STORAGE_KEY = 'qs_waitlist_emails';

const initialFormState = {
	fullName: '',
	countryCode: '+91',
	whatsappNumber: '',
	email: '',
	role: 'TRAVELLER',
};

const getStoredEmails = () => {
	if (typeof window === 'undefined') return [];
	try {
		const raw = window.localStorage.getItem(STORAGE_KEY);
		const parsed = raw ? JSON.parse(raw) : [];
		if (!Array.isArray(parsed)) return [];
		return parsed.filter((item) => typeof item === 'string');
	} catch {
		return [];
	}
};

const persistEmail = (email, existingEmails) => {
	if (typeof window === 'undefined') return existingEmails;
	const next = Array.from(new Set([...existingEmails, email]));
	window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
	return next;
};

const normalizeName = (name) => name.trim().replace(/\s+/g, ' ');
const normalizeWhatsappNational = (phone) => phone.trim().replace(/[\s()\-]/g, '');
const normalizeEmail = (email) => email.trim().toLowerCase();

export const useWaitlist = () => {
	const [form, setForm] = useState(initialFormState);
	const [knownEmails, setKnownEmails] = useState(() => getStoredEmails());
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [feedback, setFeedback] = useState({type: 'idle', message: ''});

	const normalizedName = useMemo(() => normalizeName(form.fullName), [form.fullName]);
	const normalizedWhatsappNational = useMemo(
		() => normalizeWhatsappNational(form.whatsappNumber),
		[form.whatsappNumber],
	);
	const normalizedEmail = useMemo(() => normalizeEmail(form.email), [form.email]);
	const normalizedRole = useMemo(() => form.role.trim().toUpperCase(), [form.role]);

	// Only email is mandatory. Name optional. WhatsApp optional — but if provided, must be valid.
	const emailError = EMAIL_REGEX.test(normalizedEmail) ? '' : 'Enter a valid email address.';
	const whatsappError =
		normalizedWhatsappNational.length === 0
			? ''
			: WHATSAPP_NATIONAL_REGEX.test(normalizedWhatsappNational)
				? ''
				: 'Enter a valid WhatsApp number.';
	const roleError = ALLOWED_ROLES.includes(normalizedRole) ? '' : 'Select a valid role.';

	const formError = emailError || whatsappError || roleError;
	const isDuplicateLocal = useMemo(
		() => knownEmails.includes(normalizedEmail),
		[knownEmails, normalizedEmail],
	);

	const setField = (field, value) => {
		setForm((prev) => ({...prev, [field]: value}));
		setFeedback((prev) => (prev.message ? {type: 'idle', message: ''} : prev));
	};

	const submit = async (event) => {
		event.preventDefault();
		if (isSubmitting) return;

		if (formError) {
			setFeedback({type: 'error', message: formError});
			return;
		}

		if (isDuplicateLocal) {
			setFeedback({type: 'success', message: 'You are already on the waitlist with this email.'});
			return;
		}

		setIsSubmitting(true);
		setFeedback({type: 'idle', message: ''});

		const fullWhatsapp =
			normalizedWhatsappNational.length > 0
				? `${form.countryCode}${normalizedWhatsappNational}`
				: '';

		try {
			const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL || '/api').replace(/\/$/, '');
			const response = await fetch(`${apiBaseUrl}/waitlist`, {
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({
					fullName: normalizedName,
					whatsappNumber: fullWhatsapp,
					email: normalizedEmail,
					role: normalizedRole,
				}),
			});

			const payload = await response.json().catch(() => ({}));

			if (response.status === 201) {
				setKnownEmails((prev) => persistEmail(normalizedEmail, prev));
				setForm((prev) => ({...initialFormState, role: prev.role, countryCode: prev.countryCode}));
				setFeedback({
					type: 'success',
					message:
						payload.message || 'You are on the list. We will reach out closer to launch.',
				});
				return;
			}

			if (response.status === 409) {
				setKnownEmails((prev) => persistEmail(normalizedEmail, prev));
				setFeedback({
					type: 'success',
					message: payload.message || 'You are already on the waitlist.',
				});
				return;
			}

			setFeedback({
				type: 'error',
				message: payload.message || 'Something went wrong. Please try again in a moment.',
			});
		} catch {
			setFeedback({
				type: 'error',
				message: 'Could not reach server. Please check your connection and try again.',
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return {
		form,
		setField,
		fieldErrors: {
			fullName: '',
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
