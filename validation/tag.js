const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateTagInput(data) {
    let errors = {};

    data.active = !isEmpty(data.active) ? data.active.toString(): "";
    data.vendor = !isEmpty(data.vendor) ? data.vendor : "";
    data.code = !isEmpty(data.code) ? data.code : "";
    data.date = !isEmpty(data.vendor) ? data.date : "";
    data.generalLocation = !isEmpty(data.generalLocation) ? data.generalLocation : "";
    data.isFloodlight = !isEmpty(data.isFloodlight) ? data.isFloodlight.toString() : "";
    data.lob = !isEmpty(data.lob) ? data.lob : "";
    data.purpose = !isEmpty(data.purpose) ? data.purpose : "";
    data.specificURLs = !isEmpty(data.specificURLs) ? data.specificURLs : "";
    data.expiration = !isEmpty(data.expiration) ? data.expiration.toString() : "";

    if (Validator.isEmpty(data.active)) {
        errors.active = "Active field is required";
    }

    if (Validator.isEmpty(data.vendor)) {
        errors.vendor = "Vendor field is required";
    }

    if (Validator.isEmpty(data.code)) {
        errors.code = "Code field is required";
    }

    if (Validator.isEmpty(data.isFloodlight)) {
        errors.isFloodlight = "isFloodlight field is required";
    }

    if (Validator.isEmpty(data.lob)) {
        errors.lob = "LOB field is required";
    }

    if (Validator.isEmpty(data.purpose)) {
        errors.purpose = "Purpose field is required";
    }

    if (Validator.isEmpty(data.expiration)) {
        errors.expiration = "Expiration field is required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}