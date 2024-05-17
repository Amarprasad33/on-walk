const express = require('express');
const app = express();
const connection = require("./Config/mongodb");
require("dotenv").config();
const cors = require("cors");
const signup = require("./Routes/signup");
const signin = require("./Routes/signin");
const getUser = require("./Routes/getUser")



console.log("App starting..")

// // database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());


// routes
app.use("/api/users", signup);
app.use("/api/auth", signin);
app.use("/api/getdata", getUser);


const port =  8010;
app.listen(port, console.log(`Listening on port ${port}...`));
