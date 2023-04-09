module.exports = {
    serverError: (method) => ({
        success: false,
        code: 500,
        message: `Unable to ${method} products.`
    })
}