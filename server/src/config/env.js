import dotenv from 'dotenv';

dotenv.config();

const normalizeOrigin = (origin) => origin.trim().replace(/\/+$/, '');

const parseOrigins = (value = '') =>
	value
		.split(',')
		.map(normalizeOrigin)
		.filter(Boolean);

const configuredOrigins = parseOrigins(process.env.CLIENT_ORIGINS || '');
const defaultOrigins = ['http://localhost:5173', 'http://localhost:3002'];
const clientOrigins = configuredOrigins.length > 0 ? configuredOrigins : defaultOrigins;

const config = {
	port: Number(process.env.PORT) || 5000,
	mongoUri: process.env.MONGODB_URI || '',
	clientOrigins,
	nodeEnv: process.env.NODE_ENV || 'development',
};

export default config;
