import validator from 'validator';
import WaitlistEntry from '../models/WaitlistEntry.js';

const ROLE_OPTIONS = new Set([
	'TRAVELLER',
	'MEMBER',
	'GUIDE',
	'HOMESTAY_OWNER',
]);
const WHATSAPP_REGEX = /^\+?[1-9]\d{7,14}$/;

const normalizeName = (name) => (name || '').trim().replace(/\s+/g, ' ');
const normalizeWhatsapp = (value) =>
	(value || '').trim().replace(/[\s()-]/g, '');
const normalizeEmail = (email) => (email || '').trim().toLowerCase();
const normalizeRole = (role) => (role || '').trim().toUpperCase();

export const createWaitlistEntry = async (req, res, next) => {
	try {
		const {fullName, whatsappNumber, email, role} = req.body;

		// Only email is mandatory.
		if (typeof email !== 'string') {
			return res
				.status(400)
				.json({success: false, message: 'Email is required.'});
		}

		const normalizedEmail = normalizeEmail(email);
		if (!validator.isEmail(normalizedEmail)) {
			return res
				.status(400)
				.json({
					success: false,
					message: 'Enter a valid email address.',
				});
		}

		if (typeof role !== 'string') {
			return res
				.status(400)
				.json({success: false, message: 'Role is required.'});
		}
		const normalizedRole = normalizeRole(role);
		if (!ROLE_OPTIONS.has(normalizedRole)) {
			return res
				.status(400)
				.json({success: false, message: 'Select a valid role.'});
		}

		// Optional fields — validate only if present.
		const normalizedName = normalizeName(fullName);

		const normalizedWhatsapp = normalizeWhatsapp(whatsappNumber);
		if (normalizedWhatsapp && !WHATSAPP_REGEX.test(normalizedWhatsapp)) {
			return res.status(400).json({
				success: false,
				message: 'Enter a valid WhatsApp number with country code.',
			});
		}

		const existing = await WaitlistEntry.findOne({
			email: normalizedEmail,
		}).lean();
		if (existing) {
			return res.status(409).json({
				success: false,
				message: 'This email is already on the waitlist.',
			});
		}

		await WaitlistEntry.create({
			fullName: normalizedName || undefined,
			whatsappNumber: normalizedWhatsapp || undefined,
			email: normalizedEmail,
			role: normalizedRole,
		});

		return res.status(201).json({
			success: true,
			message: 'You are on the list. We will reach out closer to launch.',
		});
	} catch (error) {
		if (error.code === 11000) {
			return res.status(409).json({
				success: false,
				message: 'This email is already on the waitlist.',
			});
		}
		return next(error);
	}
};
