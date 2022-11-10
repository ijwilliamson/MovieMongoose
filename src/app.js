require('./db/connection')
const yargs = require('yargs');
const mongoose = require('mongoose');
const {create, read, update, deleteMovie, search} = require('./movies/function');

const myApp = async (yargsObject) =>{



    if (yargsObject.create){
        //code of create
         const result = 
            await create({title: yargsObject.title,
                        actor: yargsObject.actor,
                        director: yargsObject.director});
        console.log(result)
        
    } else if (yargsObject.read){
        //code of read
        console.log(
            await read()
        ) ;

    } else if (yargsObject.search) {
        // code to search for records
        const result =
            await search({title: yargsObject.title,
                          actor: yargsObject.actor,
                          director: yargsObject.director}
                        );
        console.log(result)
        

    } else if (yargsObject.update){
        //code of update.
        const result =
            await update(yargsObject.id, {title: yargsObject.title,
                                          actor: yargsObject.actor,
                                          director: yargsObject.director}
                                          );
        console.log(result)

    } else if (yargsObject.delete) {
        //code of delete
        const result = 
            await deleteMovie(yargsObject.id);
        console.log(result)

    } else {
        console.log('command not recognised')

    }

    await mongoose.disconnect();

};

myApp(yargs.argv);

