const { MongoClient } = require('mongodb');

// this is for the port number where the mongodb is running;
const url = 'mongodb://localhost:27017';

// this is for the client mean that to tell the mogo this one port is running;
const client = new MongoClient(url);

// this is my const name of database;
const dbNasme = 'Authapi';

// now i make the function for database to get the Data'
async  function dbConnection(collection){ 
    // this line for connect the data base;
   let result = await client.connect();
   // this line for call the db function and pass the name of the database;
   let  db =  result.db(dbNasme);
   // return the collection data;
    return await  db.collection(collection);
}

module.exports = dbConnection;