const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const items = require('./routes/api/items');

const port = process.env.port || 5000;

const app = express();

//bodyparser middleware
app.use(bodyParser.json());

//DB config
const db = require('./config/keys',{ useUnifiedTopology: true }).mongoURI;
mongoose
    .connect(db,{ useNewUrlParser: true,useUnifiedTopology: true })
    .then(()=> console.log('MongoDB connected'))
    .catch(err => console.log(err));

//Use   Routes 
app.use('/api/items',items);

app.listen(port,()=> console.log(`Server is running on port:${port}`));
