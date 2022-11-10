const MovieCollection = require('./model');
const {Mongoose} = require('mongoose')

const create = async(movieObject) =>{
    try {
        const result = await MovieCollection.create(movieObject);
        return result;
    } catch (error) {
        console.log(error);
    }
};

const read = async() =>{
    // return an array of objects
    try {
        const docs = await MovieCollection.find(); 
        return docs;
    } catch (error) {
        console.log(error);
    }
}


const update = async(id, movieObject) =>{
    try{
        if(!id) throw "an id is required"

        const keys = Object.keys(movieObject)
        const values = Object.values(movieObject)
        let modifiedMovie = movieObject;

        // loop through the values and remove the key from modifiedMovie
        // if the value is falsy.
        for(let i=keys.length; i>=0; i--){
            if (!values[i]){
                let {[keys[i]]: unused, ...tempMovie} = modifiedMovie;
                modifiedMovie = tempMovie;
            }
        }

        const result = await MovieCollection.updateOne({_id: id},modifiedMovie)
        return result;
    } catch (error) {
        console.log(error)
    }
}

const search = async(movieObject) =>{
    try{
        const keys = Object.keys(movieObject)
        const values = Object.values(movieObject)
        let modifiedMovie = movieObject;

        // loop through the values and remove the key from modifiedMovie
        // if the value is falsy.
        for(let i=keys.length; i>=0; i--){
            if (!values[i]){
                let {[keys[i]]: unused, ...tempMovie} = modifiedMovie;
                modifiedMovie = tempMovie;
            }
        }

        const result = await MovieCollection.find(modifiedMovie)
        return result;
    } catch (error) {
        console.log(error)
    }
}


const deleteMovie = async(id) => {
    try{
        if(!id) throw "an id is required"

        const result = await MovieCollection.deleteOne({_id: id})
        return result;
    } catch {
        console.log(error)
    }
}
module.exports = {create, read, update, deleteMovie, search}

// add search