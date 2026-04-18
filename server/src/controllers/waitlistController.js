import validator from 'validator';
import WaitlistEntry from '../models/WaitlistEntry.js';

const ROLE_OPTIONS = new Set(['MEMBER', 'GUIDE', 'HOMESTAY_OWNER']);
const WHATSAPP_REGEX = /^\+?[1-9]\d{7,14}$/;

const normalizeName = (name) => name.trim().replace(/\s+/g, ' ');
const normalizeWhatsapp = (value) => value.trim().replace(/[\s()-]/g, '');
const normalizeEmail = (email) => email.trim().toLowerCase();
const normalizeRole = (role) => role.trim().toUpperCase();

export const createWaitlistEntry = async (req, res, next) => {
	try {
		const {fullName, whatsappNumber, email, role} = req.body;

		if (
			typeof fullName !== 'string' ||
			normalizeName(fullName).length < 2
		) {
			return res.status(400).json({
				success: false,
				message: 'Enter a valid full name.',
			});
		}

		if (typeof whatsappNumber !== 'string') {
			return res.status(400).json({
				success: false,
				message: 'WhatsApp number is required.',
			});
		}

		if (typeof email !== 'string') {
			return res.status(400).json({
				success: false,
				message: 'Email is required.',
			});
		}

		if (typeof role !== 'string') {
			return res.status(400).json({
				success: false,
				message: 'Role is required.',
			});
		}

		const normalizedName = normalizeName(fullName);
		const normalizedWhatsapp = normalizeWhatsapp(whatsappNumber);
		const normalizedEmail = normalizeEmail(email);
		const normalizedRole = normalizeRole(role);

		if (!WHATSAPP_REGEX.test(normalizedWhatsapp)) {
			return res.status(400).json({
				success: false,
				message: 'Enter a valid WhatsApp number with country code.',
			});
		}

		if (!validator.isEmail(normalizedEmail)) {
			return res.status(400).json({
				success: false,
				message: 'Enter a valid email address.',
			});
		}

		if (!ROLE_OPTIONS.has(normalizedRole)) {
			return res.status(400).json({
				success: false,
				message: 'Select a valid role.',
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
			fullName: normalizedName,
			whatsappNumber: normalizedWhatsapp,
			email: normalizedEmail,
			role: normalizedRole,
		});

		return res.status(201).json({
			success: true,
			message:
				'Registration received. Our team will contact you for onboarding.',
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
