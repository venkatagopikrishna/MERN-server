const express = require('express');
const router = express.Router();
const Book = require('../mode/bookModel');
const Author = require('../mode/authorModel'); // Assuming the author model is named authorModel

// REST API POST METHOD TO HANDLE book creation
router.post('/', async (req, res) => {
    try {
        const { _id, name, publisher, description, authorId } = req.body;
        const bookQuery = new Book({ _id, name, publisher, description, authorId });

        // Save the book to the database
        await bookQuery.save();

        // Find the author and increment the totalBooks field
        const author = await Author.findById(authorId);
        if (author) {
            author.totalBooks = parseInt(author.totalBooks) + 1;
            await author.save();
        }

        res.status(201).send({ message: "Book Created" });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

module.exports = router;
