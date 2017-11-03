const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user.js');

var id = "59f9f0f003e43bd021db369e";

var userId = "59f8722e36ee2c6c52fa3a7f";

User.findById(userId).then((user) => {
	if(!user) {
		return console.log('userId not found');
	};
	console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => {console.log(e)});






// if (!ObjectID.isValid(id)) {
// 	console.log('ID not valid');
// }

// //mongoose converte a string em objeto.
// // Todo.find({
// // 	_id: id
// // }).then((todos) => {
// // 	console.log('Todos', todos)
// // });

// // Todo.findOne({
// // 	_id: id
// // }).then((todo) => {
// // 	console.log('Todos', todo)
// // });

// Todo.findById(id).then((todo) => {
// 	if(!todo) {
// 		return console.log("Id not found")
// 	}
// 	console.log("Todo by Id", todo)
// }).catch((e) => {console.log(e)})