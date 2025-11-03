const express = require ("express");
const path = require("path");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const session = require("express-session");
const flash =require("connect-flash");

app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"views"));

  const sessionOptions = {
    secret:"mysupersecetstring" ,
     resave: false,
     saveUninitialized: true,
}
app.use(session(sessionOptions));
  app.use(flash());


 app.use((req, res, next) =>{
   res.locals.successmsg = req.flash("success");
res.locals.errormsg = req.flash("error");
next()
 });

app.get("/register", (req, res) =>{
    let {name = "anonymous"} = req.query;
     req.session.name = name;
     
     if(name=== "anonymous" ) {
      req.flash("success", "user not registered");
     } else {
     req.flash("success", "user registered successfull");
     }
     
    res.redirect("/hello");
});

app.get("/hello", (req,res) =>{
res.locals.messages = req.flash("success");
    res.render("page.ejs", { name: req.session.name  });
});
// app.get("/reqcount", (req , res) =>{
// if(req.session.count ) {
//     req.session.count++;

// } else {
//      req.session.count = 1;
// }
//     res.send(`you sent a request ${req.session.count} times`);
// });


app.listen(3000, () =>{
    console.log("sever is listening on port 3000");
})