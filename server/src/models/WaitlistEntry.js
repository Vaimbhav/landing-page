import mongoose from 'mongoose';

const waitlistEntrySchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
			trim: true,
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
