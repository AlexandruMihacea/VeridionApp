const express = require('express');
const app = express();
var router = require('./Routes/index')
const bodyParser = require("body-parser");
const port = process.env.PORT | 3000;
const cors = require("cors");
const path = require('path');

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

const _dirname = __dirname;
const buildPath = path.join(_dirname, '../frontend/dist');

app.use(express.static(buildPath));

app.get("/*", function(req, res) {
  res.sendFile(
    path.join(_dirname, '../frontend/dist/index.html'),
    function(err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});



app.listen(port, () => {
  console.log(`Start on port ${port}`);
});
