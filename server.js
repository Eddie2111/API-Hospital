require('dotenv').config()

const express = require('express');
const app = express();
const mongo = require('./models/mongo');
const cors = require("cors");

const corsOptions = require("./data/config");

app.use(cors(corsOptions));
app.use(express.json());


const patientRouter = require('./routes/patients')
const doctorRouter = require('./routes/doctors')

app.get("/",(req,res)=>{
    res.send("reached here");
})

app.use('/patients', patientRouter)
app.use('/doctors',doctorRouter)

const port = process.env.PORT;
console.log(port);

app.listen(process.env.PORT, () => console.log('Server Started',process.env.PORT));