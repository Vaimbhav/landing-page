import {useMemo, useState} from 'react';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const STORAGE_KEY = 'qs_waitlist_emails';

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

export const useWaitlist = () => {
	const [email, setEmail] = useState('');
	const [knownEmails, setKnownEmails] = useState(() => getStoredEmails());
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [feedback, setFeedback] = useState({
		type: 'idle',
		message: '',
	});

	const normalizedEmail = useMemo(() => email.trim().toLowerCase(), [email]);
	const isDuplicateLocal = useMemo(
		() => knownEmails.includes(normalizedEmail),
		[knownEmails, normalizedEmail],
	);
	const isEmailValid = EMAIL_REGEX.test(normalizedEmail);

	const submit = async (event) => {
		event.preventDefault();

		if (isSubmitting) {
			return;
		}

		if (!isEmailValid) {
			setFeedback({
				type: 'error',
				message: 'Enter a valid email address.',
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
				body: JSON.stringify({email: normalizedEmail}),
			});

			const payload = await response.json().catch(() => ({}));

			if (response.status === 201) {
				setKnownEmails((prev) => persistEmail(normalizedEmail, prev));
				setFeedback({
					type: 'success',
					message:
						payload.message ||
						'You are in. Welcome to Quiet Summit early access.',
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
					'Something went wrong. Try again in a moment.',
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
		email,
		setEmail,
		isEmailValid,
		isDuplicateLocal,
		isSubmitting,
		feedback,
		submit,
	};
};
