const express = require('express');
const fs =require('fs');
const app=express();
app.set('view engine', 'pug');


let rawdata = fs.readFileSync('Chassi.json');
let chassi = JSON.parse(rawdata);
console.log(chassi);


app.get('/', function (req,res){
    res.render('index', {rubrik: JSON.stringify(chassi), text: JSON.stringify(chassi),});
})


app.listen(3000);
