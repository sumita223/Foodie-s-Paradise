const express = require('express');
const app= express();
const bodyParser=require('body-parser');
const cors= require('cors');

require('dotenv').config();
require('./models/db');

const PORT= process.env.PORT || 8090;

app.get('/ping', (req,res)=>{
    res.send('success')
});

app.use(bodyParser.json());
app.use(cors());

// Import the router files
const AuthRouter= require('./Routes/AuthRouter');


// Use the routers
app.use('/auth', AuthRouter);


app.listen(PORT, ()=>{
    console.log('Server is running');
})