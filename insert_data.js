const dbConnect = require('./mongo_bd');

const insertData =async ()=>{
    const db = await dbConnect('users');
    const result = await db.insertOne({
        name: 'Kaleem',
        email: 'Kameel@gmail.com',
        password: '12345',
    });
    if(result.acknowledged)console.log('Data is inserted');
}

module.exports = insertData;