// const router = require("express").Router();
// const SearchItem = require("../Models/searchItem");

// router.post("/signin", async (req, res) => {
// 	try {
		
// 		const merchant = await Merchant.findOne({ email: req.body.email });
// 		if (!merchant)
// 			return res.status(401).send({ message: "Invalid Email or Password" });

// 		const validPassword = await bcrypt.compare(
// 			req.body.password,
// 			merchant.password
// 		);

// 		if (!validPassword)
// 			return res.status(401).send({ message: "Invalid Email or Password" });

// 		const token = merchant.generateAuthToken();
// 		res.status(200).send({ data: token, message: "logged in successfully" });
        
// 	} catch (error) {
// 		res.status(500).send({ message: "Internal Server Error" });
// 	}
// });


// router.post("/signup", async (req, res) => {
// 	try {
// 		const { error } = validateMerchant(req.body);
// 		if (error)
// 			return res.status(400).send({ message: error.details[0].message });

// 		const merchant = await Merchant.findOne({ email: req.body.email });
// 		if (merchant) return res.status(409).send({ message: "Merchant with given email already Exist!" });

// 		const salt = await bcrypt.genSalt(Number(12));
// 		const hashPassword = await bcrypt.hash(req.body.password, salt);

// 		await new Merchant({ ...req.body, password: hashPassword }).save();
// 		res.status(201).send({ message: "Merchant created successfully" });
// 	} catch (error) {
// 		res.status(500).send(error);
// 	}
// });


// module.exports = router;
