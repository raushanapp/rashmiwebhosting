const express = require("express");
const cors=require("cors")



const men=require("./models/men.models.js");
const women=require("./models/women.models.js");
const everything=require("./models/everything.models.js");



const mencontroller=require("./controllers/men.controller.js")
const womencontroller=require("./controllers/women.controllers.js")
const everythingcontroller = require("./controllers/everything.controllers.js");
const catg1controller=require("./controllers/catg1.controllers.js");
const catg1iicontroller=require("./controllers/catg1ii.controller.js")
const shop1controller=require("./controllers/shop1.controller.js")
const gifcontroller=require("./controllers/gif.controller.js")
const catg2controller=require("./controllers/catg2.controller.js")
const shop2controller=require("./controllers/shop2.controller.js")
const catg3controller=require("./controllers/catg3.controller.js")
const shop3controller=require("./controllers/shop3.controller.js")
const catg4controller=require("./controllers/catg4.controller.js")



const app = express();

app.use(express.json());
app.use(cors({origin :"*"}));

// app.use("/mens",mencontroller);
// app.use("/womens",womencontroller);
// app.use("/everythings", everythingcontroller);
// app.use("/catg1",catg1controller);
// app.use("/catg1ii",catg1iicontroller);
// app.use("/shop1",catg1iicontroller);
// app.use("/gif",catg1iicontroller);
// app.use("/catg2",catg1iicontroller);
// app.use("/shop2",catg1iicontroller);
// app.use("/catg3",catg1iicontroller);
// app.use("/shop3",catg1iicontroller);
// app.use("/catg4",catg1iicontroller);

app.use("/mens",mencontroller);
app.use("/womens",womencontroller);
app.use("/everythings", everythingcontroller);
app.use("/catg1",catg1controller);
app.use("/catg1ii",catg1iicontroller);
app.use("/shop1",shop1controller);
app.use("/gif",gifcontroller);
app.use("/catg2",catg2controller);
app.use("/shop2",shop2controller);
app.use("/catg3", catg3controller);
app.use("/shop3",shop3controller);
app.use("/catg4",catg4controller);


module.exports = app;






