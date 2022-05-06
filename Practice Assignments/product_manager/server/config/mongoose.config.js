const mongoose = require('mongoose');


// /newproducts creates a new db 


mongoose.connect('mongodb://127.0.0.1:27017/newproducts').then(() => {
    console.log("connected to database");
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));