// MIDDLEWARES are functions that execute during the request response cycle

// we are creating this middleware to change the default express error handler


// err - overrides the default express error handler
// next - to call any further middleware
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500

    res.status(statusCode)

    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })
}

module.exports = {
    errorHandler,
}


