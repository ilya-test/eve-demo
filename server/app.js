const createError = require("http-errors");
const express = require("express");
const proxy = require("express-http-proxy");
const path = require("path");
const logger = require("morgan");

// Environmental variable for configuring backend
const ZED_DEMO_SERVER=process.env.ZED_DEMO_SERVER || "http://zeddemo-service:80";


const app = express();


app.use(logger("dev"));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.use("/api", proxy(ZED_DEMO_SERVER));

app.use("/", express.static("public"));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res) {
  console.log(err);

  // set locals, only providing error in development
  res.status(err.status || 500);
  res.send(err.message);
});

module.exports = app;
