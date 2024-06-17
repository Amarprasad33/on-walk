const express = require('express');
const app = express();
const connection = require("./Config/mongodb");
require("dotenv").config();
const cors = require("cors");
const storeitem=require("./Routes/storeitem")
const MerchantAuth=require("./Routes/merchantAuth")
const ConsumerAuth=require("./Routes/consumerAuth")
const Map=require("./Routes/map")
const mailer=require("./mailer/mailer")
const multer = require('multer');
const Image = require("./Models/Image")
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const bodyParser = require('body-parser');



console.log("App starting..")

// // database connection
connection('Onwalk');

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/storeitem",storeitem)
app.use("/api/merchant",MerchantAuth)
app.use("/api/consumer",ConsumerAuth)
app.use("/api/map",Map)
app.use("/api",mailer)


  // Image upload
app.post('/store/upload', upload.single('image'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send('No file uploaded.');
        }
        const binaryData = req.file.buffer;


        const image = await Image.findOne({ store_id: req.body.store_id });
        if(image){

            await Image.findOneAndUpdate(
                    { store_id: req.body.store_id },
                    { $push: { store_image: binaryData } }
                ).exec();

            return res.status(201).send({ message: "Item updated succesfully!" });
        }  

        
        await new Image({ ...req.body,store_image: binaryData}).save();
        console.log('Binary data saved to MongoDB.');

        res.send('File uploaded and saved to MongoDB.');
    } catch (error) {
        console.error('Error uploading file and storing binary data:', error);
        res.status(500).send('Error uploading file.');
    }
});

app.post('/item/upload', upload.single('image'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).send('No file uploaded.');
        }
        const binaryData = req.file.buffer;


        const image = await Image.findOne({ store_id: req.body.store_id });
        if(image){

            await Image.findOneAndUpdate(
                    { store_id: req.body.store_id },
                    { $push: { item_image: binaryData } }
                ).exec();

            return res.status(201).send({ message: "Item updated succesfully!" });
        }  

        
        await new Image({ ...req.body,store_image: binaryData}).save();
        console.log('Binary data saved to MongoDB.');

        res.send('File uploaded and saved to MongoDB.');
    } catch (error) {
        console.error('Error uploading file and storing binary data:', error);
        res.status(500).send('Error uploading file.');
    }
});

app.post('/store/retrieve', async (req, res) => {

    try {

        const image = await Image.findOne({store_id:req.body.store_id});

        if (!image) {
        return res.status(404).send({ message: 'Store not found' });
        }
        const item = image.store_image[0]
        if (!item) {
        return res.status(404).send({ message: 'Item not found' });
        }
        res.set('Content-Type', 'image/jpeg'); 
        res.send(item);
    } catch (error) {
        res.status(500).send({ message: 'Error retrieving item', error: error.message });
    }

  });

app.post('/item/retrieve', async (req, res) => {

    try {

        const image = await Image.findOne({store_id:req.body.store_id});

        if (!image) {
        return res.status(404).send({ message: 'Store not found' });
        }
        const item = image.item_image[req.body.index]
        if (!item) {
        return res.status(404).send({ message: 'Item not found' });
        }
        res.set('Content-Type', 'image/jpeg'); // Adjust content type as per your image format
        res.send(item);
    } catch (error) {
        res.status(500).send({ message: 'Error retrieving item', error: error.message });
    }

});



const port =  8010;
app.listen(port, console.log(`Listening on port ${port}...`));
