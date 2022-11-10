const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema ({
    title: {
        type: String,
        required: true
    },
    actor: {
        type: String,
        default: "Not specified"
    },
    director: {
        type: String,
        default: "Not specified"
    }
});

const MovieCollection = mongoose.model("Movie", movieSchema);

module.exports = MovieCollection;