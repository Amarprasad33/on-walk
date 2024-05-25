const router = require("express").Router();
const Store = require("../Models/Store");

router.post("/", async (req, res) => {
	try {

		const store = await Store.findOne({ storeId: req.body.storeId });
           
        if(store){

            await Store.findOneAndUpdate(
                    { storeId: req.body.storeId },
                    { $push: { itemList: { $each: req.body.itemList } } }
                ).exec();

            return res.status(201).send({ message: "Item updated succesfully!" });
        }      
          
		await new Store({ ...req.body}).save();
		res.status(201).send({ message: "Item added succesfully!" });

	} catch (error) {
		res.status(201).send({ message: "Error in add item!" });
	}
});

module.exports = router;
