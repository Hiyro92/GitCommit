import express from "express";
import http from "http";
import bodyParser from "body-parser";
import users from "./routes/users";
import morgan from "morgan"

require('dotenv').config()

const app = express();


app.use(express.static(__dirname + "/src"));

app.use(morgan("dev"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/users", users);


app.listen(process.env.PORT, () =>
  console.log(`Server is listening on port ${process.env.PORT}`)
);
