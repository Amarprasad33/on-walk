// const router = require("express").Router();
// const SaveItem = require("../Models/saveItem");

// router.post("/set", async (req, res) => {
//     try {
        
//         const { consumer_id, saved_item } = req.body;

//         const existingItem = await SaveItem.findOne({
//             consumer_id,
//             'saved_item.item_id': saved_item.item_id
//         });

//         if (existingItem) {
//             return res.status(401).send({ message: "Item already saved!" });
//         }

//         const newItem = new SaveItem({
//             consumer_id,
//             saved_item: [{
//                 store_id: saved_item.store_id,
//                 item_id: saved_item.item_id
//             }]
//         });

//         await newItem.save();

//         res.status(200).send({ message: "Item saved!" });

//     } catch (error) {
//         console.error(error);
//         res.status(500).send({ message: "Internal Server Error" });
//     }
// });


// module.exports = router;
