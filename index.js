const express = require('express');
const fs =require('fs');
const app=express();
const path=require('path');

app.set('view engine', 'ejs');
app.use(express.static('public'))

let rawdata = fs.readFileSync('Chassi.json');
let chassi = JSON.parse(rawdata);
console.log(chassi);


app.get('/', function (req,res){
    //res.render('index', {rubrik: "Bootstrap text", text: JSON.stringify(chassi[0], 3),});
    res.render(path.join(__dirname, 'views/index.ejs'),{
        text: JSON.stringify(chassi[0], 3),
        rubrik: "Bootstrap text"
    });
})


app.listen(3000);
