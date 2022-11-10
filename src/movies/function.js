const MovieCollection = require('./model');

const create = async(movieObject) =>{
    try {
        const newMovie = await MovieCollection.create(movieObject);
        console.log(newMovie);
    } catch (error) {
        console.log(error);
    }
};

const read = async(movieObject) =>{
    const docs = await MovieCollection.find(); 
    return docs;
}

module.exports = {create, read}