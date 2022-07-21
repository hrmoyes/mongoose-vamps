const mongoose = require('mongoose')
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

    Vampire.find({ $or : [ 
        
        {$and: [ { loves: 'ribbons' }, { eye_color: {$nin : 'brown'  } } ]},
        
        {location: {$ne: 'Rome, Italy'}}, 
        
        {loves: {$nin: ['fancy cloaks', 'frilly shirtsleeves', 'appearing innocent', 'being tragic', 'brooding']} },

        {victims: {$lt: 200} }
    
    ] } )
        .then(console.log)
        .catch(console.error)
        .finally(()=> db.close())
})