import cors from 'cors';
import express from 'express';
import fs from 'fs';
import path from 'path';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import morgan from 'morgan';
import {fileURLToPath} from 'url';
import config from './config/env.js';
import {errorHandler, notFoundHandler} from './middleware/errorHandler.js';
import waitlistRoutes from './routes/waitlistRoutes.js';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const clientDistPath = path.resolve(__dirname, '../../client/dist');
const clientIndexPath = path.join(clientDistPath, 'index.html');
const hasClientBuild = fs.existsSync(clientIndexPath);

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

if (config.nodeEnv === 'production' && hasClientBuild) {
	app.use(express.static(clientDistPath));

	app.get('*', (req, res, next) => {
		if (req.path.startsWith('/api')) {
			return next();
		}

		return res.sendFile(clientIndexPath);
	});
} else {
	app.get('/', (_req, res) => {
		res.status(200).json({
			success: true,
			message: 'Quiet Summit API is running.',
		});
	});
}

app.use(notFoundHandler);
app.use(errorHandler);

export default app;
