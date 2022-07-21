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
    const newVamp = 
    [
        {
            name: 'James Adams',
            dob: new Date(1990, 5, 23, 14, 53),
            hair_color: 'red',
            eye_color: 'blue',
            loves: ['beer', 'shirts', 'appearing innocent'],
            location: 'Paris, France',
            gender: 'f',
            victims: 450
        },{
            name: 'Chandler',
            title: 'Godking',
            dob: new Date(2003, 2, 8, 5, 3),
            hair_color: 'brown',
            eye_color: 'green',
            loves: ['hair', 'feet', 'keyboards'],
            location: 'Memphis, Tennessee',
            gender: 'm',
            victims: 15
        },{
            name: 'Jeffrey',
            title: 'Chad',
            dob: new Date(2020, 5, 23, 14, 53),
            hair_color: 'red',
            eye_color: 'blue',
            loves: ['bottles', 'diapers', 'etc'],
            location: 'Paris, France',
            gender: 'm',
            victims: 666
        },{
            name: 'William',
            title: 'Henry',
            dob: new Date(2003, 2, 8, 5, 3),
            hair_color: 'brown',
            eye_color: 'green',
            loves: ['rice', 'feet', 'the sky'],
            location: 'Memphis, Tennessee',
            gender: 'f',
            victims: 15
        }
    ]



    Vampire.create(newVamp)
        .then((data) =>  {console.log(data)})
        .catch((error)=>{console.log(error)})
        .finally(()=>{db.close()})
})