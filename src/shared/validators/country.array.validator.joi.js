const joi = require("joi");
const countryArrayValidator = joi.array().items(
    joi.object().keys({
        country: joi.string().required(),
        languages: joi.array().items(joi.string()).required(),
    })
);

module.exports = { countryArrayValidator };
