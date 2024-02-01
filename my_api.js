const express = require('express');
const dbConnect = require('./mongo_bd');
const app = express();
app.use(express.json());

app.get('/', async (req, resp) => {
    const db = await dbConnect('users');
    const result = await db.find().toArray();
    resp.send(result);
});

// app.post('/',async (req, resp)=>{
//     console.log(req.body);
//     const bd  = await dbConnect('users');
//     const result = await bd.insertOne(req.body);
//     resp.send(result);
// });

// app.put('/:name', async (req, resp)=>{
//     const id = req.params.name;
//     console.log(id)
//     const bd = await dbConnect('users');
//     const updateData = await bd.updateOne({name: id}, {$set:{password: '99999999'}});
//     if (updateData.acknowledged) console.log('the data has been updated');
//     resp.send({result : 'updated'})
// });

app.delete('/:name', async (req, resp) => {
    const id = req.params.name;
    console.log('This is the delete methods');
    console.log(id);
    const db = await dbConnect('users');
    const result = await db.deleteOne({ name: id }, { $set: { email: 'Updated email is done@gmail.com' } });
    if (result.acknowledged) console.log("Data is deleted");
    resp.send({ result: 'The data is Deleted' });
});

app.listen(5000); 