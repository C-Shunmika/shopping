var express = require('express');
var app = express();
var file = require('fs');
var bodyparser = require('body-parser');
app.use(bodyparser.json())
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
 })
 app.get('/whoiam/:name', function (req, res) {
    var name = req.params.name;
        var output;
       console.log( name );
       if (name == 'apple') {
           output = name + " is available" ;
       } else {
         output = name + " is out of stock " ;
       }
       res.end( JSON.stringify(output));
    });
    app.get('/shop',function(req,res){
        const shop = file.readFileSync('shop.json');
        const shopobj = JSON.parse(shop);
        res.end(JSON.stringify(shopobj));

    });
    app.post('/shopadd',function(req,res){
        console.log(req.body)
        const newitem = JSON.stringify(req.body)
        file.appendFileSync('shop.json',newitem)
        res.end("item added to shop successfully") 
    });