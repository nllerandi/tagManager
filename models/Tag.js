const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const TagSchema = new Schema({
    lob: {
        type: String,
        required: true
    },
    // Ex: VPM_SMB
    name: String,
    vendor: {
        type: String,
        required: true
    },
    isFloodlight: {
        type: Boolean,
        required: true
    },
    purpose: {
        type: String,
        required: true
    },
    // PDPs, Gridwalls
    generalLocation: [String],
    specificURLs: [String],
    data: {
        type: Schema.Types.Mixed,
        default: {}
    },
    code: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    },
    notes: String,
    date: {
        type: Date,
        default: Date.now
    },
    expiration: Date
});

module.exports = Tag = mongoose.model("tag", TagSchema);