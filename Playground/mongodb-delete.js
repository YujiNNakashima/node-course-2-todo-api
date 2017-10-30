const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log("Unable to connect");
	}
	console.log('Connected to MongoDb server');
	
	//deleteMany

	// db.collection('Todos').deleteMany({text: "eat lunch"}).then((result) => {
	// 	console.log(result);
	// });

	//deleteOne

// 	db.collection("Todos").deleteOne({text: 'eat lunch'}).then((result) => {
// 		console.log(result)
// ;	});

	//findOndeAndDelete

	db.collection("Todos").findOneAndDelete({completed: false}).then((result) => {
		console.log(result);
	})

	// db.close();
});;