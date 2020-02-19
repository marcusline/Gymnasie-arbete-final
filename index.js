const express = require('express');
const fs =require('fs');
const app=express();
app.set('view engine', 'pug');


let rawdata = fs.readFileSync('Chassi.json');
let chassi = JSON.parse(rawdata);
console.log(chassi);


app.get('/', function (req,res){
    res.render('index', {rubrik: "Bootstrap text", text: JSON.stringify(chassi,[1], 3),});
})


app.listen(3000);
