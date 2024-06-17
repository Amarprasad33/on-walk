const router = require("express").Router();
const {Merchant}  = require("../Models/Merchant");
const {Consumer} = require ("../Models/Consumer")

router.post("/getNearByStore", async (req, res) => {
    const longitude = parseFloat(req.body.longitude);
    const latitude = parseFloat(req.body.latitude);
    const radius = parseInt(req.body.radius);
  
    try {
     
      const stores = await Merchant.aggregate([
        {
          $geoNear: {
            near: {
              type: 'Point',
              coordinates: [longitude, latitude]
            },
            distanceField: 'distance', // Field to store calculated distance
            maxDistance: radius * 1000, // Convert radius to meters if using kilometers
            spherical: true
          }
        },
        {
          $sort: { distance: 1 } // Sort by distance ascending
        }
      ]);
  
      res.json(stores);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
    }
});


router.post("/getCoordinate", async (req, res) => {
  const { user, id } = req.body;

  try {
      let location;

      if (user.toLowerCase() === 'consumer') {
          const consumer = await Consumer.findOne({ _id: id });

          if (!consumer) {
              return res.status(404).send({ message: 'Consumer Not found' });
          }

          location = consumer.location;
      } else {
          const merchant = await Merchant.findOne({ _id: id });

          if (!merchant) {
              return res.status(404).send({ message: 'Merchant Not found' });
          }

          location = merchant.location;
      }

      if (!location) {
          return res.status(404).send({ message: `${user} Location not found` });
      }

      res.status(200).json({ loc: location });

  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
  }
});




router.post("/setCoordinate", async (req, res) => {
  const { user, id, coordinates } = req.body;

  try {
      
      if (!Array.isArray(coordinates) || coordinates.length !== 2) {
          return res.status(400).json({ message: 'Invalid coordinates format' });
      }

      let updateResult;

      if (user.toLowerCase() === 'consumer') {
          // Check if Consumer exists
          const existingConsumer = await Consumer.findById(id);

          if (existingConsumer) {
              // Update coordinates if Consumer exists
              updateResult = await Consumer.findByIdAndUpdate(
                  id,
                  { $set: { 'location.coordinates': coordinates } },
                  { new: true }
              );
          } else {
              // Create new Consumer with coordinates if not exists
              updateResult = await Consumer.create({
                  _id: id,
                  location: { coordinates }
              });
          }

      } else {
          // Check if Merchant exists
          const existingMerchant = await Merchant.findById(id);

          if (existingMerchant) {
              // Update coordinates if Merchant exists
              updateResult = await Merchant.findByIdAndUpdate(
                  id,
                  { $set: { 'location.coordinates': coordinates } },
                  { new: true }
              );
          } else {
              // Create new Merchant with coordinates if not exists
              updateResult = await Merchant.create({
                  _id: id,
                  location: { coordinates }
              });
          }
      }

      if (!updateResult) {
          return res.status(404).send({ message: `${user} not found` });
      }

      res.status(200).json({ message: 'Coordinates updated successfully', location: updateResult.location });

  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;