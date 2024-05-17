const router = require("express").Router();
const { User } = require("../models/user");
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
	try {

        const token= req.body.token;
        const verifyToken = jwt.verify(token,'SJKRJKSRTINGDJYFBNEJDKAYJNCTKRGD');

        const user = await User.findOne({_id:verifyToken._id});


		if (!user)
			return res.status(401).send({ message: "Invalid Email or Password" });
		res.status(200).send({ firstname: user.firstName, lastname: user.lastName });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

module.exports = router;
