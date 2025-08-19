// const registerRepository = require("../repository/registerRepository");

// const registerUser = async (data) => {
//     return await registerRepository.registerUser(data);
// };

// module.exports = { registerUser };

const { registerUser: registerUserRepo } = require("../repository/registerRepository");

const registerUser = async (data) => {
  try {
    return await registerUserRepo(data);
  } catch (err) {
    console.error("API Error Response:", err.response?.data || err.message);
    throw err;
  }
};

module.exports = { registerUser };
