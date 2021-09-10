const express = require('express');


const app = express();

// function rootCall(req,res) {
//     res.send('Thank you very much')
// }

// const rootCall = (req,res) => res.send('Thank you very much')

app.get('/', (req,res)=>{
    res.send('I know how to open Node... YAY');
})

app.listen(3000, ()=> console.log('Listening to port 3000'))