var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');


var Todo = mongoose.model('Todo', {
	text: {
		type: String
	},
	completed: {
		type: Boolean
	},
	completedAt: {
		type: Number
	}
});

var newTodo = new Todo({
	text: 'Cook dinner'
});

newTodo.save().then(() => {
	console.log('saved todo', doc);
}, (e) => {
	console.log('unable')
})

var User = mongoose.model('User', {
	email: {
		type: String,
		trim: true,
		minlength: 1,
		require: true
	}
});

var newUser = new User({
	email: "fulano@gmail.com"
})
newUser.save().then((doc)=>{
	console.log('acerto', doc)
},(e)=>{
	console.log('erro')
})