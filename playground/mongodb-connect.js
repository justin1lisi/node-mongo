const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to DB');
  }
    console.log('Connected to server');
    // db.collection('Todos').insertOne({
    //   text: 'Something to do',
    //   completed: false
    // }, (err, result) => {
    //   if(err){
    //     return console.log('Could not insert todo', err);
    //   }
    //   console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //   user: 'Justin',
    //   age: 25,
    //   location: 'US'
    // }, (err, result) => {
    //   if(err){
    //     return console.log('Could not add user', err);
    //   }
    //   console.log(result.ops[0]._id.getTimestamp());
    // });


    db.close();
});
