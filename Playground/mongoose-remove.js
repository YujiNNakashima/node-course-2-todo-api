const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findByIdAndRemove('59fc5fd87329e7f053a45415').then((todo) => {
	console.log(todo);
});