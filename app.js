const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + '/date.js');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine','ejs');

const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];

app.get('/', function(req, res) {
    const day = date.getDay();
    res.render('list', {listTitle: day, newListItems: items});
})

app.post('/', function(req, res) {
    let item = req.body.newItem;
    if (req.body.list === "Work List") {
        workItems.push(item);
        res.redirect('/work');
    } 
    else {
        items.push(item);
        res.redirect('/');
    }
})

app.get('/work', function(req, res) {
    res.render('list', {listTitle: 'Work List', newListItems: workItems});
})

app.get('/about', function(req, res) {
    res.render('about');
})


let port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("listening on port " + port);
})