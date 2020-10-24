//install packages
const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
//set port
const app = express();
const PORT = process.env.PORT || 3000;
//use logger/morgan
app.use(morgan("dev"));
//parser
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));
//use static files
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI,{  
    useNewUrlParser:true,
    useFindAndModify:false
})
//use routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
//app listener
app.listen(PORT,function(){ 
    console.log(`App listening on Port ${PORT}`);
});