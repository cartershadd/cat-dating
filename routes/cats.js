const express = require('express');
const router = express.Router();
// const auth = require('../middleware/auth');
const {validationResult} = require('express-validator');

const Cat = require('../models/Cat');

// @route   GET api/cats
// @desc    Get all cats
// @access  Public
router.get('/', async (req, res) => {
    try {
        const cats = await Cat.find({});
        res.json(cats);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   GET api/cats/:id
// @desc    Get one cat
// @access  Public
router.get('/:id', async (req, res) => {
    try {
        let cat = await Cat.findById(req.params.id);

        res.json(cat);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   GET  api/cats/search/:search
// @desc    Get results from search bar
// @access  Public
router.get('/search/:search', async (req, res) => {
    try {

        let search = await Cat.find({name: new RegExp(req.params.search, "ig")});
        res.json(search);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST api/cats
// @desc    Add new cat
// @access  Private
router.post('/', async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const {name, sex, about, badges} = req.body;


    try {
        const newCat = new Cat({
            name,
            sex,
            about,
            badges
        });
        const cat = await newCat.save();

        res.json(cat);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   PUT api/cats/:id
// @desc    Update cat
// @access  Private
router.put('/:id', async (req, res) => {
    const {name, sex, about, badges} = req.body;

    // Build contact object
    const catFields = {};
    if (name) catFields.name = name;
    if (sex) catFields.sex = sex;
    if (about) catFields.about = about;
    if (badges) catFields.badges = badges;

    try {
        let cat = await Cat.findById(req.params.id);

        if (!cat) return res.status(404).json({msg: 'Cat not found'});

        // // Make sure user owns contact
        // if (cat.user.toString() !== req.user.id) {
        //     return res.status(401).json({msg: 'Not authorized'});
        // }

        cat = await Cat.findByIdAndUpdate(req.params.id,
            {$set: catFields},
            {new: true});

        res.json(cat);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    };
});


// @route   DELETE api/cats/:id
// @desc    Delete cat
// @access  Private
router.delete('/:id', async (req, res) => {
    try {
        let cat = await Cat.findById(req.params.id);

        if (!cat) return res.status(404).json({msg: 'Cat not found'});

        // // Make sure user owns contact
        // if (cat.user.toString() !== req.user.id) {
        //     return res.status(401).json({msg: 'Not authorized'});
        // }

        await Cat.findByIdAndRemove(req.params.id);

        res.json({ msg: 'Cat removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});
module.exports = router;