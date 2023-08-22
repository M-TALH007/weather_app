const express = require('express')
const path = require("path");
const ejs = require('ejs');
const ejsLayout = require("express-ejs-layouts");
const middleware = require("./middleware");
const route = express.Router();
const app = express()
const port = 3000

const newPath = path.join(__dirname,"public")
// const views = path.join(__dirname,"views");
// app.set('views', path.join(__dirname, 'views'));

// console.log(newPath);
route.use(middleware);
app.use(express.static(newPath));
app.set("view engine", "ejs");
app.set("views", "./views");
app.set("layout", "layouts/layouts.ejs");

app.use(ejsLayout);
app.get('/', (req, res) => {
  // res.send('Hello World!')
  res.render("index");
})

app.get('/about', (req, res) => {
    res.render('about')
  })

  
app.get('/weather', (req, res) => {
    res.render("login",{layout: "layouts/login_layout.ejs"})
  })

// app.get('*', (req, res) => {
//     res.render("404", { layout: "layouts/layout2.ejs" })
//  })

route.get("/authenticate", (req, res) => {
    res.render("weather");
  })
  
  app.use("/", route);

  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

