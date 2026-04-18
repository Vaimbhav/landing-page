import dotenv from 'dotenv';

dotenv.config();

const config = {
	port: Number(process.env.PORT) || 5000,
	mongoUri: process.env.MONGODB_URI || '',
	clientOrigin: process.env.CLIENT_ORIGIN || 'http://localhost:5173',
	nodeEnv: process.env.NODE_ENV || 'development',
};

export default config;
