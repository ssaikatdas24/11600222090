const registerService = require("../service/registerService");

// const registerUser = async (req, res, next) => {
//     try {
//         const result = await registerService.registerUser(req.body);
//         res.status(201).json(result);
//     } catch (err) {
//         next(err);
//     }
// };
const registerUser = async (req, res, next) => {
  try {
    console.log("Incoming Body:", req.body); 
    const result = await registerService.registerUser(req.body);
    res.status(201).json(result);
  } catch (err) {
    console.error("API Request Failed:", err.message);
    res.status(500).json({ error: err.message });
  }
};

module.exports = { registerUser };
