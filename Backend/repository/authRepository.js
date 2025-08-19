const axios = require("axios");

const authenticate = async (credentials) => {
    const response = await axios.post("http://20.244.56.144/evaluation-service/auth", credentials);
    return response.data;
};

module.exports = { authenticate };
