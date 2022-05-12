const express = requre("express");
const faker = faker();
const app = express();
const port = 8000;

app.get("/faker", (req,res) =>{
    res.json({message: "Faker Api"});
})