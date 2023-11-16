const express = require('express');
const app = express();
var router = require('./Routes/index')
const bodyParser = require("body-parser");
const port = process.env.PORT | 3000;
const cors = require("cors");

const corsOptions = {
    origin: true,
    allowedHeaders: [
        "Content-Type",
        "Authorization",
        "Access-Control-Allow-Methods",
        "Access-Control-Request-Headers",
        "Access-Control-Allow-Headers"
    ],
    credentials: true,
    enablePreflight: true,
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', router);

app.get('/', (req, res) => {
  res.send(req.body);
});

app.listen(port, () => {
  console.log(`Start on port ${port}`);
});
