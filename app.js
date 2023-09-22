const express = require("express")
const dotenv = require("dotenv").config();

const app = express();

const port  = process.env.PORT || 4000;

app.use(express.json());
app.use("/posts",require("./routes/postRoutes"));

app.listen(port,function(req,res){
    console.log(`server running on port ${port}`);
});


