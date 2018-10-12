const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateTagInput(data) {
    let errors = {};

    data.vendor = !isEmpty(data.vendor) ? data.vendor : "";

    if (!Validator.isEmpty(data.vendor)) {
        errors.vendor = "Vendor field is required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}