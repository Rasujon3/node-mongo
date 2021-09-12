const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express()

app.use(cors());
app.use(bodyParser.json());


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

// Get

app.get('/users/:id',(req,res)=>{
    // console.log(req.params);
    const id = req.params.id;
    console.log(req.query.sort);
    const name = users[id];
    res.send({id, name});

})

// Post
app.post('/addUser' , (req,res) => {
    // console.log('data received: ' , req.body);
    // save to database
    const user = req.body;
    user.id = 55;
    // res.send(req.body);
    res.send(user);
})


app.listen(3000, ()=> console.log('Listening to port 3000'))