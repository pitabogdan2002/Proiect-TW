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

app.use(express.static(__dirname));

app.use(cookieParser());
const numeUtilizator = 'utilizator';
const parola = 'parola123';

var session;
app.get('/',(req,res) => {
    session=req.session;
    if(session.userid){
        res.render('main.ejs', { name: req.body.username });
    }else
    res.sendFile('views/index.html',{root:__dirname})
});

app.post('/user',(req,res) => {
    if(req.body.username == numeUtilizator && req.body.password == parola){
        session=req.session;
        session.userid=req.body.username;
        console.log(req.session)
        res.render('main.ejs', { name: req.body.username });
    }
    else{
        res.send('Parola sau nume de utilizator invalid');
    }
})
app.get('/logout',(req,res) => {
    req.session.destroy();
    res.redirect('/');
});
app.get('/user',(req,res) => {
    session=req.session;
    if(session.userid)
    {
        res.render('main.ejs',{name: req.body.username});
    }
    else
    {
        res.redirect('/');
    }
});
app.get("*",(req, res) => {
    res.render("404.ejs");
  });

app.listen(PORT, () => console.log(`Server Running at port ${PORT}`));