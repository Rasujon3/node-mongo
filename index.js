const express = require('express');


const app = express();

// function rootCall(req,res) {
//     res.send('Thank you very much')
// }

// const rootCall = (req,res) => res.send('Thank you very much')

app.get('/', (req,res)=>{
    const fruit = {
        product: 'ada',
        price:200
    }
    res.send(fruit);
});
app.get('/fruits/banana',(req,res)=>{
    res.send({fruit:'banana',quantity:1000,price:10000});
})

app.listen(3000, ()=> console.log('Listening to port 3000'))