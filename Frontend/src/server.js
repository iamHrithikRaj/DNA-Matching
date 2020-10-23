// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");

// //Import Routes
// const authRoute = require("./routes/auth"); 

// const postRoute = require("./routes/posts");
// dotenv.config();

// // Connect to DB
// mongoose.connect(process.env.DB_CONNECT, { useUnifiedTopology: true }, () => {
//   console.log("Connected to DB");
// });

// // Middleware
// app.use(express.json());

// //Routes Middlewares
// app.use("/api/user", authRoute);
// app.use("/api/posts", postRoute);

// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//   console.log(`Server started on port ${PORT}\nhttp://localhost:${PORT}`);
// });
