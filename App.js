const express = require("express");
const cors = require("cors");
const router = require("./routes");
const AppError = require("./utils/appError");
const errorHandler = require("./utils/errorHandler");
var connect = require('connect');
const app = connect();
const api = "/";


app.use(api, router);
console.log(router);

// app.all("*", (req, res, next) => {
//  next(new AppError(`The URL ${req.originalUrl} does not exists`, 404));
// });

app.use(errorHandler);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});

module.exports = app;
