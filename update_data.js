const dbConnect = require('./mongo_bd');

const upDateData = async () => {
    const db = await dbConnect('users');
    const result = await db.updateOne(
        { email: 'kaleem@gmail.com' }, { $set: { name: 'kaleem' } });
    if (result.acknowledged) console.log('the data has been updated');
}

module.exports = upDateData;