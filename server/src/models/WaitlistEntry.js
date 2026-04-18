import mongoose from 'mongoose';

const waitlistEntrySchema = new mongoose.Schema(
	{
		fullName: {
			type: String,
			required: false,
			trim: true,
			maxlength: 80,
		},
		whatsappNumber: {
			type: String,
			required: false,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
			trim: true,
		},
		role: {
			type: String,
			required: true,
			enum: ['TRAVELLER', 'MEMBER', 'GUIDE', 'HOMESTAY_OWNER'],
		},
		createdAt: {
			type: Date,
			default: Date.now,
		},
	},
	{
		versionKey: false,
	},
);

const WaitlistEntry = mongoose.model('WaitlistEntry', waitlistEntrySchema);

export default WaitlistEntry;
