const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute=require("./routes/product.route.js");
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//routes

app.use("/api/products",productRoute);






app.get('/', (req, res) => {
    res.send("hello from node API apdated");
});



mongoose.connect("mongodb+srv://fatima:fatimazahrae@backenddb.zwdiu79.mongodb.net/learning_node?retryWrites=true&w=majority&appName=backendDB")
    .then(() => {
        console.log('connected');
        app.listen(3000, () => {
            console.log('server running on 3000');
        });
    })
    .catch((err) => {
        console.log('connection failed:', err);
    });





