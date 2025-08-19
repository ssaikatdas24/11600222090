const logService = require("../service/logService");

const getLogs = async (req, res, next) => {
    try {
        const logs = await logService.getLogs();
        res.status(200).json(logs);
    } catch (err) {
        next(err);
    }
};

module.exports = { getLogs };
