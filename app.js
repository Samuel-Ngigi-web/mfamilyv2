//Connection to the database.
const express = require ("express");
const https = require("https");
const bodyParser =require("body-parser")
const ejs = require("ejs")
const mongoose = require("mongoose")



const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))

//different routes
app.get("/", function(req, res){
    res.sendFile(__dirname + "/public/home.html")
})

app.get("/home.html", function(req, res){
    res.sendFile(__dirname + "/home.html")
})

app.get("/familytree.html", function(req, res){
    res.sendFile(__dirname + "/familytree.html")
})

app.get("/events.html", function(req, res){
    res.sendFile(__dirname + "/events.html")
})

app.get("/importantdates.html", function(req, res){
    res.sendFile(__dirname + "/importantdates.html")
})

app.get("/Gallery.html", function(req, res){
    res.sendFile(__dirname + "/Gallery.html")
})



const port = process.env.port;
app.listen(port || 3000, function(err){
    if(err){
        console.log(err)
    }
    else{
        console.log("The serve is running on port 3000")
    }
})



