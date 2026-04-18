import validator from 'validator';
import WaitlistEntry from '../models/WaitlistEntry.js';

const normalizeEmail = (email) => email.trim().toLowerCase();

export const createWaitlistEntry = async (req, res, next) => {
	try {
		const {email} = req.body;

		if (typeof email !== 'string') {
			return res.status(400).json({
				success: false,
				message: 'Email is required.',
			});
		}

		const normalizedEmail = normalizeEmail(email);

		if (!validator.isEmail(normalizedEmail)) {
			return res.status(400).json({
				success: false,
				message: 'Enter a valid email address.',
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

		await WaitlistEntry.create({email: normalizedEmail});

		return res.status(201).json({
			success: true,
			message: 'You have been added to the Quiet Summit waitlist.',
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
