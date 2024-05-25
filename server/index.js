const express = require('express');
const app = express();
const connection = require("./Config/mongodb");
require("dotenv").config();
const cors = require("cors");
const additem=require("./Routes/addItem")
const MerchantAuth=require("./Routes/merchantAuth")
const getMerchant=require("./Routes/getMerchant")
const getNearByStore=require("./Routes/getNearbyStore")



console.log("App starting..")

// // database connection
connection('Merchantdb');

// middlewares
app.use(express.json());
app.use(cors());


// routes
app.use("/api/getmerchant", getMerchant);
app.use("/api/additem",additem)
app.use("/api/merchant",MerchantAuth)
app.use("/api/getnearbystore",getNearByStore)



const port =  8010;
app.listen(port, console.log(`Listening on port ${port}...`));
