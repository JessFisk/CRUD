const mongoose = require("mongoose");

const DVDSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    actor: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        default: "no genre specified",
    },
});

const DVD = mongoose.model("DVD", DVDSchema);

module.exports = DVD;