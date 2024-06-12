const router = require("express").Router();
const Store = require("../Models/Store");

router.post("/additem", async (req, res) => {
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

router.post("/updateitem", async (req, res) => {
	
 const { storeId, itemID, updateData } = req.body;

  try {
    const store = await Store.findOneAndUpdate(
      { storeId, "itemList._id": itemID },
      {
        $set: {
          "itemList.$": updateData
        }
      },
      { new: true, runValidators: true }
    );

    if (!store) {
      return res.status(404).send({ message: 'Store or item not found' });
    }

    res.status(200).send({ message: 'Item updated successfully!', store });
  
} catch (error) {
    
    res.status(500).send({ message: 'Error updating item', error: error.message });
  
}
});

router.post('/deleteitem', async (req, res) => {
    
    const { storeId, itemID } = req.body;
  
    try {
      const store = await Store.findOneAndUpdate(
        { storeId },
        {
          $pull: { itemList: { _id: itemID } }
        },
        { new: true }
      );
  
      if (!store) {
        return res.status(404).send({ message: 'Store or item not found' });
      }
  
      res.status(200).send({ message: 'Item deleted successfully!', store });
    } catch (error) {
      res.status(500).send({ message: 'Error deleting item', error: error.message });
    }
  });

  router.post('/getitem', async (req, res) => {
    
    const { storeId, itemID } = req.query;

    try {
        const store = await Store.findOne({ storeId });

        if (!store) {
        return res.status(404).send({ message: 'Store not found' });
        }

        const item = store.itemList.id(itemID);

        if (!item) {
        return res.status(404).send({ message: 'Item not found' });
        }

        res.status(200).send({ item });
        
    } catch (error) {
        res.status(500).send({ message: 'Error retrieving item', error: error.message });
    }

  });  


module.exports = router;