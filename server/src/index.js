var express = require("express");
var bodyParser = require("body-parser");
var yup = require("yup");

import assets from "./data.js";

const app = express();
const port = process.env.PORT || 3006;

app.use(bodyParser.json());

//Statically serve images on /assets directory
app.use("/assets", express.static(__dirname + "/assets"));

const schema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required()
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.post("/signup", (req, res) => {
  //res.send({ status: "ok", message: "Sign up successful." });
  try {
    if (schema.isValidSync(req.body)) {
      res.send({ status: "ok", message: "Sign up successful." });
    } else {
      throw new Error("Expected a valid email address as request body.");
    }
  } catch (e) {
    res.status(502);
    console.log(e);
    res.send({ status: "not_ok", message: e.message });
  }
});

app.get("/travel-assets", (_, res) => {
  res.json(assets);
});

app.listen(port, () =>
  console.log(`Brex Travel signup server listening on port ${port} \n`)
);
