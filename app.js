const express = require('express');
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const app = express();
const PORT = 3000;
const oneDay = 1000 * 60 * 60 * 24;
app.set('view engine', 'ejs');

app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false 
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//serving public file
app.use(express.static(__dirname));
// cookie parser middleware
app.use(cookieParser());
const myusername = 'user1'
const mypassword = 'mypassword'

// a variable to save a session
var session;
app.get('/',(req,res) => {
    session=req.session;
    if(session.userid){
        res.render('main.ejs');
    }else
    res.sendFile('views/index.html',{root:__dirname})
});

app.post('/user',(req,res) => {
    if(req.body.username == myusername && req.body.password == mypassword){
        session=req.session;
        session.userid=req.body.username;
        console.log(req.session)
        res.render('main.ejs');
    }
    else{
        res.send('Invalid username or password');
    }
})
app.get('/logout',(req,res) => {
    req.session.destroy();
    res.redirect('/');
});
app.get("*",(req, res) => {
    res.render("404.ejs");
  });

app.listen(PORT, () => console.log(`Server Running at port ${PORT}`));