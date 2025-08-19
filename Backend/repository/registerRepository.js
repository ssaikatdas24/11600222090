const axios = require("axios");

const registerUser = async (data) => {
  try {
    const response = await axios({
      method: "post",
      url: "http://20.244.56.144/evaluation-service/register",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        companyName: data.companyName,
        ownerName: data.ownerName,
        rollNo: data.rollNo,
        ownerEmail: data.ownerEmail,
        accessCode: data.accessCode,
      },
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("External API Error:", error.response.data);
      return { success: false, error: error.response.data };
    } else {
      console.error("API Request Failed:", error.message);
      return { success: false, error: error.message };
    }
  }
};

module.exports = { registerUser };
