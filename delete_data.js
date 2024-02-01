const dbConnect = require('./mongo_bd');

const deleteData = async () => {
    const db = await dbConnect('users');
    const result = await db.deleteOne({ name: 'kaleem' });
    if (result.acknowledged) console.log('the data is deleted');
}

module.exports = deleteData;