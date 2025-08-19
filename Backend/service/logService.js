const logRepository = require("../repository/logRepository");

const getLogs = async () => {
    return await logRepository.getLogs();
};

module.exports = { getLogs };
