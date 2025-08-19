const authService = require("../service/authService");

const authenticate = async (req, res, next) => {
    try {
        const token = await authService.authenticate(req.body);
        res.status(200).json(token);
    } catch (err) {
        next(err);
    }
};

module.exports = { authenticate };
