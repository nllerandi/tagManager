const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Models
const Tag = require("../../models/Tag");

// @route   GET api/tags/test
// @desc    Tests tags route
// @access  Public
router.get("/test", async (req, res) => {
    return res.json({
        msg: "Tags route works"
    })
});

// @route   GET api/tags
// @desc    Get all tags
// @access  Public
router.get("/", async (req, res) => {
    try {
        let tags = await Tag.find().sort({date: -1});
        return res.json(tags);
    }
    catch(e) {
        return res.status(404).json({
            tags: "There are no tags"
        })
    }
});

// @route   GET api/tags
// @desc    Get all tags
// @access  Public
router.get("/:lob", async (req, res) => {
    try {
        let tags = await Tag.find({
            lob: req.params.lob
        }).sort({date: -1});
        return res.json(tags);
    }
    catch(e) {
        return res.status(404).json({
            tags: "No tags found"
        })
    }
});

// @route   POST api/tags/
// @desc    Create tag
// @access  Public
router.post("/", async (req, res) => {

    const newTag = new Tag({
        lob: req.body.lob,
        name: req.body.name,
        vendor: req.body.vendor,
        generalLocation: req.body.generalLocation,
        specificURLs: req.body.specificURLs,
        src: req.body.src,
        type: req.body.type,
        cat: req.body.cat,
        u1: req.body.u1,
        u2: req.body.u2,
        u3: req.body.u3,
        u4: req.body.u4,
        u5: req.body.u5,
        u6: req.body.u6,
        u7: req.body.u7,
        u8: req.body.u8,
        u9: req.body.u9,
        u10: req.body.u10,
        data: req.body.data,
        code: req.body.code,
        active: req.body.active,
        notes: req.body.notes
    });

    let tag = await newTag.save();

    return res.json(tag);
});

router.get("/:lob/:generalLocation", async (req, res) => {
    try {
        let tags = await Tag.find({
            lob: req.params.lob,
            generalLocation: req.params.generalLocation
        });
        return res.json(tags);
    }
    catch(e) {
        return res.status(404).json({
            tags: "No tags found"
        })
    }
});

module.exports = router;