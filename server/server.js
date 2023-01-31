const express = require('express');
const app = express();
const bodyParser = require('body-parser')
app.use(express.urlencoded({extended: true})) 
const path = require('path');

app.use(express.json());
var cors = require('cors');
app.use(cors());

const MongoClient = require('mongodb').MongoClient;

var db;

MongoClient.connect('mongodb+srv://skdo223:apsode1@cluster0.udjmfja.mongodb.net/?retryWrites=true&w=majority', { useUnifiedTopology: true }, function (에러, client) {
    if (에러) return console.log(에러)
    db = client.db('todoapp');



    app.listen(8080, function () {
        console.log('listening on 8080')
        
    });
});

app.get('/test', (req,res)=> {
    res.send('hello')
})

app.use(express.static(path.join(__dirname, '../build')));

app.get('/', function (요청, 응답) {
  응답.sendFile(path.join(__dirname, '../build/index.html'));
});