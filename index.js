const dbConnect = require('./mongo_bd');
const insert = require('./insert_data');
const update = require('./update_data');
const deleteData = require('./delete_data');

const main = async () => {
     const collection = await dbConnect('users');
     const collectionData =await collection.find().toArray();
     console.log(collectionData);
     // await insert();
     // await update();
     // await deleteData();
}
main();