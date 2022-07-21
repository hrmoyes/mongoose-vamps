const mongoose = require('mongoose')
const { update } = require('../models/vampire.js')
const Vampire = require('../models/vampire.js')

// mongoose-crud is our database
// we declare here this is the database we want to use
const URI = 'mongodb://localhost:27017/mongoose-crud'


// have to pass in these options for deperacation warnings and errors
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection

db.once('open', function () {

    const filter = {
        name : 'Guy Man'
    }

    const updater = {
        hates : ["alarm clocks", 'jackalopes']
    }
    Vampire.updateOne(
        filter, 
        updater
        )
        .then(console.log)
        .catch(console.error)
        .finally(()=> db.close())
})