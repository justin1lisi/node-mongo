const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
    return console.log('Unable to connect to DB');
  }
    console.log('Connected to server');

    db.collection('Users').findOneAndUpdate(
      {_id: new ObjectID("59cce7513ddc112ef27021d7")},
      { $set: {
            user: "George"
          },
        $inc: {
          age: 1
        }
      }, {
        returnOriginal: false
      }).then((result) =>{
      console.log(result);
    }, (err) => {
      console.log('Unable to fetch todos', err);
    });

    //db.close();
});
