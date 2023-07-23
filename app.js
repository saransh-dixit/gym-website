const express = require("express");
const path = require("path");
const {render} = require("pug");
const app = express();
const port = 80;
const bodyParser = require('body-parser');

app.engine('pug', require('pug').__express);

// For serving static files
app.use('/static', express.static('static'));
// // app.use(express.urlencoded());
// // app.use(express.urlencoded({ extended: true }));
// // app.use(express.json());
// app.use(bodyParser.urlencoded);
// app.use(express.json()); 
app.use(express.urlencoded())

// // Set the template engine as pug
// app.set('views engine', 'pug')

// Set the views directory
app.set('views', path.join(__dirname, 'views'))

app.set('C:\GymWebsite\views\index.pug');
app.set('view engine','pug');
 
// Our pug demo endpoint
app.get("/index", (req, res)=>{ 
    res.status(200).render('index.pug');
});

// app.get("/", (req, res)=>{ 
//     res.status(200).send("This is homepage of my first express app with  saransh");
// });

// app.get("/about", (req, res)=>{
//     res.send("This is about page of my first express app with  saransh");
// });

app.post("/", (req, res)=>{
    console.log(req.body);
    res.status(200).render('index.pug');
});
// app.get("/this", (req, res)=>{
//     res.status(404).send("This page is not found on my website saransh");
// });

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});

// app.use(urlencoded(express.urlencoded);