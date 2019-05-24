const express = require('express');
const exphbs = require("express-handlebars");
const morgan = require('morgan');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(compression());
app.use(morgan('combined'));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(require('./controllers/burgers_controller'))

app.listen(PORT);