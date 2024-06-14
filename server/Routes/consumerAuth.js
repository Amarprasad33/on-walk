const router = require("express").Router();
const { Consumer, validateconsumer } = require("../Models/Consumer");
const bcrypt = require("bcrypt");

router.post("/signin", async (req, res) => {
	try {
		
		const consumer = await Consumer.findOne({ email: req.body.email });
		if (!consumer)
			return res.status(401).send({ message: "Invalid Email or Password" });

		const validPassword = await bcrypt.compare(
			req.body.password,
			consumer.password
		);

		if (!validPassword)
			return res.status(401).send({ message: "Invalid Email or Password" });

		const token = Consumer.generateAuthToken();
		res.status(200).send({ data: token, message: "logged in successfully" });
        
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});


router.post("/signup", async (req, res) => {
	try {
		const { error } = validateconsumer(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const consumer = await Consumer.findOne({ email: req.body.email });
		if (consumer) return res.status(409).send({ message: "Consumer with given email already Exist!" });

		const salt = await bcrypt.genSalt(Number(12));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		await new Consumer({ ...req.body, password: hashPassword }).save();
		res.status(201).send({ message: "Consumer created successfully" });
	} catch (error) {
		res.status(500).send(error);
	}
});

module.exports = router;
