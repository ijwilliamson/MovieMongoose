require('./db/connection')
const yargs = require('yargs');
const mongoose = require('mongoose');
const {create, read} = require('./movies/function')

const myApp = async (yargsObject) =>{



    if (yargsObject.create){
        //code of create
        await create({title: yargsObject.title, actor: yargsObject.actor, director: yargsObject.director})
    } else if (yargsObject.read){
        //code of read
        await read();
    } else if (yargsObject.update){
        //code of update
    } else if (yargsObject.delete) {
        //code of delete
    } else {
        console.log('command not recognised')
    }

    await mongoose.disconnect();

};

myApp(yargs.argv);

