const express = require('express');
const app = express();
const connection = require("./Config/mongodb");
require("dotenv").config();
const cors = require("cors");
const storeitem=require("./Routes/storeitem")
const MerchantAuth=require("./Routes/merchantAuth")
const ConsumerAuth=require("./Routes/consumerAuth")
const getNearByStore=require("./Routes/getNearbyStore")
const mailer=require("./mailer/mailer")


console.log("App starting..")

// // database connection
connection('Merchantdb');

// middlewares
app.use(express.json());
app.use(cors());


// routes
app.use("/api/storeitem",storeitem)
app.use("/api/merchant",MerchantAuth)
app.use("/api/consumer",ConsumerAuth)
app.use("/api/getnearbystore",getNearByStore)
app.use("/api",mailer)



const port =  8010;
app.listen(port, console.log(`Listening on port ${port}...`));
