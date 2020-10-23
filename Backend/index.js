const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//Import Routes
const authRoute = require("./routes/auth");
const postRoute = require('./routes/posts')
dotenv.config();

// Connect to DB
mongoose.connect(process.env.DB_CONNECT, { useUnifiedTopology: true }, () => {
  console.log("Connected to DB");
});

// Middleware
app.use(express.json());
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
//   next();
// });
let allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Headers', "GET, POST, PATCH, PUT, DELETE, OPTIONS");
  res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
  next();
}
app.use(allowCrossDomain);

//Routes Middlewares
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}\nhttp://localhost:${PORT}`);
});

let cors = require('cors')
app.use(cors())
