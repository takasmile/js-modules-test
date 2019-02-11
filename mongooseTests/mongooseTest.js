let mongoose = require('mongoose');
mongoose.connect(
    'mongodb://localhost:27017/mongo_test',
    { useNewUrlParser: true });

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', function () {
  console.log('connection success.');
})

let personSchema = new mongoose.Schema({
  name: {type: String, required: true, default: 'Alex'},
  age: {type: Number, default: 20},
  sex: {type: String, default: 'Male'},
  height: {type: Number, default: 170}
});
let Elements = [
  {
    name: 'alex',
    age: 24,
    sex: 'Male',
    height: 170
  },
  {
    name: 'monica',
    age: 22,
    sex: 'Female',
    height: 165
  },
  {

  }
]



// addDocument('people', personSchema, Elements)
//
// function addDocument (collectionName, schemaObj, elemObjs) {
//   let tempModel = mongoose.model(collectionName, schemaObj);
//
//   if (elemObjs.length) {
//     for (let i in elemObjs) {
//       let temp = new tempModel(elemObjs[i]);
//       if (saveDocumentObj(temp)) break;
//     }
//   }
//   else {
//     let temp = new tempModel(elemObjs[i]);
//     saveDocumentObj(temp)
//   }
// }
//
// function saveDocumentObj (objName) {
//   objName.save(function (err, obj) {
//     if (err) return true
//   })
// }


