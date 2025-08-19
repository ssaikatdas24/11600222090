const express = require("express");
const cors = require("cors");

const registerRoutes = require("./route/registerRoute");
const authRoutes = require("./route/authRoute");
const bodyParser = require("body-parser");
const logRoutes = require("./route/logRoute");
const errorHandler = require("./handler/errorHandler");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/register", registerRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/logs", logRoutes);

// Error handler
app.use(errorHandler);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
