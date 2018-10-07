const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const TagSchema = new Schema({
    lob: {
        type: String,
        required: true
    },
    // Ex: VPM_SMB
    name: {
        type: String,
    },
    vendor: {
        type: String,
        required: true
    },
    // PDPs, Gridwalls
    generalLocation: [
        {
            type: String,
        }
    ],
    specificURLs: [
        {
            type: String
        }
    ],
    src: {
        type: String
    },
    type: {
        type: String
    },
    cat: {
        type: String
    },
    u1: {
        type: String
    },
    u2: {
        type: String
    },
    u3: {
        type: String
    },
    u4: {
        type: String
    },
    u5: {
        type: String
    },
    u6: {
        type: String
    },
    u7: {
        type: String
    },
    u8: {
        type: String
    },
    u9: {
        type: String
    },
    u10: {
        type: String
    },
    // td1, values other than u
    data:[
        {
            type: String,
        }
    ],
    code: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    },
    notes: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Tag = mongoose.model("tag", TagSchema);