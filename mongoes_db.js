const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/Authapi'
const Schema = mongoose.Schema;

const dataSchema = new Schema({
    name: String,
    price: Number
});
const db = mongoose.connect(url).then(() => console.log('Connected!'));
const saveInDb = async () => {
    const DataModel = mongoose.model('users', dataSchema);
    let data = new DataModel({ name: 'Kaabeer Jani', price: 120 });
    const result = await data.save();
    console.log(result);
}


const updateData = async () => {
    const userData = new mongoose.model('users', dataSchema);
    const result = await userData.updateOne({ name: 'Kaabeer Jani' }, { $set: { price: 300 } })
    console.log(result)
}

const deleteData = async () => {
    const userData = new mongoose.model('users', dataSchema);
    const result = await userData.deleteOne({ price: 300 });
    console.log(result);
}

const findInDb = async ()=> {
    const userData = new mongoose.model('users',dataSchema);
    const result = await userData.find();
    console.log('This is your all users',result);
}


// saveInDb();
// updateData();
// deleteData();
// findInDb();
