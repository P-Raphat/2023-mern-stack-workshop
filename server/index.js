let express = require('express'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    dbConfig = require('./database/db')

//Express Route
const studentRoute = require('../server/routes/student.route');

//Connecting MongoDB Database
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db,{
    useNewUrlParser:true
}).then(()=>{
    console.log('Database successfully connected');
},
    error =>{
        console.log('Could not connect to database: ',error);
    }
)

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlendcoded({
    exrended:true
}))
app.use(cors());
app.use('/student',studentRoute);


//PORT
const port = process.env.PORT || 4000;
const server = app.listen(port,()=>{
    console.log('Connected to port ',port)
})

app.use((req,res,next)=>{
    next(createError(404))
})

app.use(function(err,req,res,next){
    console.error(err.message)
    if(!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
})