const authRepository = require("../repository/authRepository");

const authenticate = async (credentials) => {
    return await authRepository.authenticate(credentials);
};

module.exports = { authenticate };
