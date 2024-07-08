const express = require('express');
const router = express.Router();
const Author = require('../model/authorModel'); 
// REST API POST METHOD TO HANDLE author creation
router.post('/', async (req, res) => {
    try {
        const { _id, name, age, description } = req.body;
        const authorQuery = new Author({ _id, name, age, description });

        // Save the author to the database
        await authorQuery.save();
        res.status(201).send({ message: "Author Created" });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

// REST API GET METHOD to fetch all authors
router.get('/', async (req, res) => {
    try {
        const authors = await Author.find();
        res.status(200).send(authors);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});


module.exports = router;
