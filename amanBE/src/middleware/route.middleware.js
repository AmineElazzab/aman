const notFound = (req, res, next) => {
    const error = new Error(` ${req.originalUrl} not found`);
    next(error);
};

module.exports = {
    notFound
};