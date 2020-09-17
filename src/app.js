const path = require('path')
const express = require('express');
const hbs = require('hbs')
const geocode = require('../utils/geocode');
const forecast = require('../utils/forecast');


const publicDirectoryPath = path.join(__dirname, "../public") 
const app = express();
const templatesPath = path.join(__dirname, "../views/templates")
const partialsPath = path.join(__dirname,"../views/partials")

app.use(express.static(publicDirectoryPath))
app.set('view engine', 'hbs');
app.set('views', templatesPath)
hbs.registerPartials(partialsPath)


app.get('',(req, res)=>{
    res.render('index',{
        title: "Weather App",
        name: "ilyas ahjari"
    });
})

app.get('/product',(req, res)=>{
    if(!req.query.search)
        return res.send({
            error: "You must provide a query"
        })
    
    console.log(req.query.search)
        
    res.send({
        product: []
    })
})

app.get('/help', (req,res)=>{
    res.render('help',{
        title: "Help",
        name: "ilyas ahjari"
    });
})


app.get('/about',(req, res)=>{
    res.render('about',{
        title: 'ABOUT',
        name: "ilyas ahjari"
    })
})



app.get('/weather', (req, res)=>{
    if(!req.query.location)
        return res.send({
            error: "You must fill the location query"
        })
    geocode(req.query.location,(data)=>{
        forecast(data.lantitude, data.longitude, (data) => {
            return res.send({
                location: data.name,
                temperature: data.temperature
            })
        })            
    })
})

app.get('/help/*', (req,res)=>{
    res.render('errorHelp',{
        title: "Error Help",
        name: "ilyas ahjari"
    })
})

app.get('*',(req, res)=>{
    res.render('error',{
        title: "Error",
        name: "ilyas ahjari"
    })
})

app.listen(3000, ()=>{
    console.log('Server is on port 3000');
})

