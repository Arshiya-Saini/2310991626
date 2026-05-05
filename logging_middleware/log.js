const axios = require("axios");

const LOG_API = "http://20.207.122.201/evaluation-service/logs";

// ⚠️ Paste your token here
const TOKEN = "PASTE_YOUR_ACCESS_TOKEN_HERE";

async function Log(stack, level, packageName, message) {
  try {
    const response = await axios.post(
      LOG_API,
      {
        stack: stack,
        level: level,
        package: packageName,
        message: message,
      },
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Log success:", response.data);
  } catch (error) {
    console.error("Log failed:", error.response?.data || error.message);
  }
}

module.exports = Log;
