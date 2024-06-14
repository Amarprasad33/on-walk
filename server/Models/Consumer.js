const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");


const consumerSchema = new mongoose.Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	phone: {type: String,required: true},
    city: {type: String},
    state: {type: String},
    pincode: {type: String},
	location: {
        type: { type: String, default: 'Point' },
        coordinates: { type: [Number], default: [0, 0] } // Default coordinates
    },

});

consumerSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, 'SJKRJKSRTINGDJYFBNEJDKAYJNCTKRGD', {
		expiresIn: "7d",
	});
	return token;
};

const Consumer = mongoose.model("consumer", consumerSchema);

const validateconsumer = (data) => {
	const schema = Joi.object({
        firstName: Joi.string().required().label("First Name"),
        lastName: Joi.string().required().label("Last Name"),
        email: Joi.string().email().required().label("Email"),
        password: passwordComplexity().required().label("Password"),
        phone: Joi.string().required().label("Phone"),
        city: Joi.string(),
        state: Joi.string(),
        pincode: Joi.string(),
        location: Joi.object({
            type: Joi.string().valid('Point').default('Point'),
            coordinates: Joi.array().items(Joi.number())
        })
    });
	return schema.validate(data);
};


module.exports = { Consumer, validateconsumer };
