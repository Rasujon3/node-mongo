const express = require('express');
const cors = require('cors');

const app = express()

app.use(cors());

// function rootCall(req,res) {
//     res.send('Thank you very much')
// }

// const rootCall = (req,res) => res.send('Thank you very much')
const users = ["Sujon","Liya","Marufa","Sumon","Arin","Naim"];


app.get('/', (req,res)=>{
    // const fruit = {
    //     product: 'ada',
    //     price:200
    // },
    const users = ["Sujon","Liya","Marufa","Sumon","Arin","Naim"];

    // res.send(fruit);
});
app.get('/fruits/banana',(req,res)=>{
    res.send({fruit:'banana',quantity:1000,price:10000});
})

app.get('/users/:id',(req,res)=>{
    // console.log(req.params);
    const id = req.params.id;
    console.log(req.query.sort);
    const name = users[id];
    res.send({id, name});

})

app.listen(3000, ()=> console.log('Listening to port 3000'))