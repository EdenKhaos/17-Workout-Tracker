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
//mongoDB connection
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/17-workout-tracker";
mongoose.connect(MONGODB_URI,{  
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});
mongoose.connection.on("connected", () => {
    console.log("Mongoose is connected!!!!");
});
//use routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);
//app listener
app.listen(PORT,function(){ 
    console.log(`App listening on: http://localhost:3000 ${PORT}`);
});