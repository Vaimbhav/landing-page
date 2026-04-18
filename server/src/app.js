import cors from 'cors';
import express from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import morgan from 'morgan';
import config from './config/env.js';
import {errorHandler, notFoundHandler} from './middleware/errorHandler.js';
import waitlistRoutes from './routes/waitlistRoutes.js';

const app = express();

const waitlistLimiter = rateLimit({
	windowMs: 15 * 60 * 1000,
	max: 20,
	standardHeaders: true,
	legacyHeaders: false,
	message: {
		success: false,
		message: 'Too many requests. Please try again later.',
	},
});

app.use(helmet());
app.use(
	cors({
		origin: config.clientOrigin,
		methods: ['GET', 'POST'],
	}),
);
app.use(express.json({limit: '10kb'}));
app.use(morgan(config.nodeEnv === 'production' ? 'combined' : 'dev'));

app.get('/api/health', (_req, res) => {
	res.status(200).json({
		success: true,
		message: 'Quiet Summit API is running.',
	});
});

app.use('/api/waitlist', waitlistLimiter, waitlistRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
