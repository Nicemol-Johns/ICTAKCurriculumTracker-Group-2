const express = require('express');
const app = express();

const morgan = require('morgan');
app.use(morgan('dev'));

const cors = require('cors');
app.use(cors());

const PORT = 3000;

const api = require('./routes/route');
app.use('/curriculum-tracker',api);
app.use('/curriculum-tracker/pendingCurriculums', api);

const db=require("./db/connection")

//----------------------------------



//---------------------------------


app.listen(PORT,()=>{
    console.log(`Server : https://localhost/${PORT}`)
});
