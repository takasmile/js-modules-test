const mongoose = require('mongoose')

let personSchema = new mongoose.Schema({
    name: {type: String, required: true, default: 'Alex'},
    age: {type: Number, default: 20},
    sex: {type: String, default: 'Male'},
    height: {type: Number, default: 170}
});

let connection = mongoose.createConnection('mongodb://localhost:27017/mongo_test');
let personModel = connection.model('peoples', personSchema)
let query = personModel.find({ name: 'Alex' })
query.select('name sex')
query.exec(function (err, person) {
    if (err) console.error(err)
    console.log(person)
})
