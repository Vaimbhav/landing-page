export const notFoundHandler = (_req, res) => {
	return res.status(404).json({
		success: false,
		message: 'Route not found.',
	});
};

export const errorHandler = (error, _req, res, _next) => {
	console.error(error);

	return res.status(500).json({
		success: false,
		message: 'Internal server error.',
	});
};
