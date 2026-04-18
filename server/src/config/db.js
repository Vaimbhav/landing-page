import mongoose from 'mongoose';
import config from './env.js';

export const connectDatabase = async () => {
	if (!config.mongoUri) {
		throw new Error('Missing required environment variable: MONGODB_URI');
	}

	mongoose.set('strictQuery', true);

	await mongoose.connect(config.mongoUri, {
		serverSelectionTimeoutMS: 10000,
	});

	console.log('MongoDB connected');
};
