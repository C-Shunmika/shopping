var express = require('express');
var app = express();
var file = require('fs');
var bodyparser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost';
var str = "";
app.use(bodyparser.json())
var server = app.listen(8081, function () {
var host = server.address().address
var port = server.address().port
console.log("Example app listening at http://%s:%s", host, port)
})
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8100"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

  app.route('/getmenwear').get(function(req, res){
    var str = "";
    MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {

     console.log("Connected successfully to server");
     //const db = client.db(dbName);
     var db = client.db('shopping');
     var products = [];
     var data = [];

     var cursor = db.collection('menwear').find().toArray(
      function(err, doc)
     {
        var product= {}

        console.log(doc);
        if (doc != null){
          product=doc;
        }
        //console.log('value',product);

        client.close();
        res.end(JSON.stringify(product));
        //console.log("item name:" +product[1].name+ ",price:"+product[1].price);
      })
    })
  })

  app.route('/getwomenwear').get(function(req, res){
    var str = "";
    MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {

     console.log("Connected successfully to server");
     //const db = client.db(dbName);
     var db = client.db('shopping');
     var products = [];
     var data = [];

     var cursor = db.collection('womenwear').find().toArray(
      function(err, doc)
     {
        var product= {}

        console.log(doc);
        if (doc != null){
          product=doc;
        }
        //console.log('value',product);

        client.close();
        res.end(JSON.stringify(product));
        //console.log("item name:" +product[1].name+ ",price:"+product[1].price);
      })
    })
  })
  app.route('/getaccessories').get(function(req, res){
    var str = "";
    MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {

     console.log("Connected successfully to server");
     //const db = client.db(dbName);
     var db = client.db('shopping');
     var products = [];
     var data = [];

     var cursor = db.collection('accessories').find().toArray(
      function(err, doc)
     {
        var product= {}

        console.log(doc);
        if (doc != null){
          product=doc;
        }
        //console.log('value',product);

        client.close();
        res.end(JSON.stringify(product));
        //console.log("item name:" +product[1].name+ ",price:"+product[1].price);
      })
    })
  })
  app.route('/getelectronics').get(function(req, res){
    var str = "";
    MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {

     console.log("Connected successfully to server");
     //const db = client.db(dbName);
     var db = client.db('shopping');
     var products = [];
     var data = [];

     var cursor = db.collection('electronics').find().toArray(
      function(err, doc)
     {
        var product= {}

        console.log(doc);
        if (doc != null){
          product=doc;
        }
        //console.log('value',product);

        client.close();
        res.end(JSON.stringify(product));
        //console.log("item name:" +product[1].name+ ",price:"+product[1].price);
      })
    })
  })
  app.route('/getcookware').get(function(req, res){
    var str = "";
    MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {

     console.log("Connected successfully to server");
     //const db = client.db(dbName);
     var db = client.db('shopping');
     var products = [];
     var data = [];

     var cursor = db.collection('cookware').find().toArray(
      function(err, doc)
     {
        var product= {}

        console.log(doc);
        if (doc != null){
          product=doc;
        }
        //console.log('value',product);

        client.close();
        res.end(JSON.stringify(product));
        //console.log("item name:" +product[1].name+ ",price:"+product[1].price);
      })
    })
  })
  app.route('/getbooksandstationery').get(function(req, res){
    var str = "";
    MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {

     console.log("Connected successfully to server");
     //const db = client.db(dbName);
     var db = client.db('shopping');
     var products = [];
     var data = [];

     var cursor = db.collection('booksandstationery').find().toArray(
      function(err, doc)
     {
        var product= {}

        console.log(doc);
        if (doc != null){
          product=doc;
        }
        //console.log('value',product);

        client.close();
        res.end(JSON.stringify(product));
        //console.log("item name:" +product[1].name+ ",price:"+product[1].price);
      })
    })
  })
  app.post("/addproduct",function(req,res)
  {
    console.log(req.body);
    const newSubmitRequest = JSON.stringify(req.body);
    MongoClient.connect(url, (error, database) => {
      if (error) return process.exit(1);
      console.log('Connection is okay');
    
      const db = database.db('shopping');
      insertDocuments(db, () => {
        console.log('Insert successful');
      });
    });
    const insertDocuments = (db, callback) => {
      const collection = db.collection('cart');
      console.log('check 1');
      collection.insert(
        req.body,
        (error, result) => {
          if (error) return process.exit(1);
          callback(result);
          console.log('check 2');
        }   
      )
      console.log('check 3');
  }})
    app.route('/getcart/:username').get(function(req, res){
      var str = "";
      var name = req.params.name;
      var user = req.params.username;

      console.log("im here");
      console.log("User --> "+user+", Item --->"+name);
      MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
  
       console.log("Connected successfully to cart server");
       //const db = client.db(dbName);
       var db = client.db('shopping');
       var products = [];
       var data = [];
  
       var cursor = db.collection('cart').find({username:user}).toArray(
        function(err, doc)
       {
          var product= {}
  
          console.log(doc);
          if (doc != null){
            product=doc;
          }
          //console.log('value',product);
  
          client.close();
          res.end(JSON.stringify(product));
          //console.log("item name:" +product[1].name+ ",price:"+product[1].price);
        })
      })
    })
    app.route('/removecart/:item/:username').get(function(req, res){
      var str = "";
      var item = req.params.item;
      var user = req.params.username;
      console.log("Remove cart "+item+", user name "+user);
      
      MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
       console.log("--------------------------------");
       console.log("Connected successfully to server");
       //const db = client.db(dbName);
       var db = client.db('shopping');
       var products = [];
       var data = [];
       let remove;
  
       const col  = db.collection('cart');
       col.deleteOne({name:item},{username:user}, function(err, obj) {
        if (err) 
        {
          console.log("--------------------------------");
          console.log(err);
          throw err;
        }
        //console.log(obj);
        console.log("1 document deleted");
        client.close();
        res.end(JSON.stringify({"reuslt":"success"}));
       })
    })
  })
    