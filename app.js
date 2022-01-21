const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');



app.get("/", function(req, res){
    res.render("index");
});


app.get("/next", function(req, res){
    res.render("index");
});


app.post("/", function(req, res){
    
    const a = parseFloat(req.body.operand1);
    const b = parseFloat(req.body.operand2);
    const operator = JSON.stringify(req.body.operator);
    
    var value = 0.0;
    

    switch (operator) {
        case '"+"':
            value = a+b;
            break;
        case '"-"':
            value = value +  (a-b);
            break;
        case '"*"':
            value = value + (a*b);
            break;
        case '"/"' :
            value = value + (a/b);
            break;
        case '"%"':
            value = value + (a%b);
            break;
        case '"**"':
            value = value + (Math.pow(a,b));
            break;
        default: 
            value = "NA";
            break;
    }

    res.render("result", {result: value});
});


app.listen(3000, function(){
    console.log("Port started at local host 3000");
});