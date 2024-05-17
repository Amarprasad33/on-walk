const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const merchantSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    shopName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    pincode:{
        type: String,
        required: true
    },
    address:{
        type: String
    },
    latitude:{
        type: String
    },
    longitude:{
        type: String
    }
});


merchantSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id}, 'SJKRJKSRTINGDJYFBNEJDKAYJNCTKRGD', {
		expiresIn: "7d",
	});
	return token;
};

const Merchant = mongoose.model("merchant", merchantSchema);

const validateMerchant = (data) => {
    const schema = Joi.object({
        firstName: Joi.string().required().label("firstName"),
        lastName: Joi.string().required().label("Last Name"),
        email: Joi.string().email().required().label("Email"),
        password: passwordComplexity().required().label("Password"),
        shopName: Joi.string().required().label("Shop Name"),
        phone: Joi.string().required().label("Phone"),
        city: Joi.string().required().label("City"),
        state: Joi.string().required().label("State"),
        pincode: Joi.string().required().label("Pincode"),
        address: Joi.string().label("Address"),
        latitude: Joi.string().label("Latitude"),
        longitude: Joi.string().label("Longitude"),
    });
    return schema.validate(data);
};

module.exports = { Merchant, validateMerchant };