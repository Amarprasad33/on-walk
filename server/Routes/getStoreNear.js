const router = require("express").Router();
const Product  = require("../Models/Product");

router.post("/", async (req, res) => {
	
    longitude=req.body.longitude,
    latitude=req.body.latitude,
    radius=req.body.radius
  
    try {
    const stores = await Product.find({
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [parseFloat(longitude), parseFloat(latitude)],
          },
          $maxDistance: parseInt(radius),
        },
      },
    });
    res.json(stores);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
