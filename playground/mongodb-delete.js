const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to DB');
  }
    console.log('Connected to server');

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) =>{
    //   console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) =>{
    //   console.log(result);
    // });

    //findOneAndDelete
    db.collection('Todos').findOneAndDelete({completed: false}).then((result) =>{
      console.log(result);
    });

    //db.close();
});
