
  const router = require("express").Router();
  const { Merchant } = require("../Models/Merchant");
  
  router.post("/", async (req, res) => {
      try {

        const maxDistance=req.body.maxDistance
        const latitude = req.body.latitude; // New York City
        const longitude = req.body.longitude;

        await Merchant.collection.createIndex({ location: '2dsphere' });

        const nearbyStores = await Merchant.aggregate([
    {
        $geoNear: {
          near: {
            type: 'Point',
            coordinates: [parseFloat(longitude), parseFloat(latitude)]
          },
          distanceField: 'distance',
          maxDistance: maxDistance*1000, // 10 kilometers in meters
          spherical: true
        }
      }
    ]);
          
        res.status(200).send(nearbyStores);
      } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
      }
  });
  
  module.exports = router;
  