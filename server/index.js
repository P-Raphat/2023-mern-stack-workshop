let express = require('express'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    dbConfig = require('./database/db')

//Express Route
const studentRoute = require('../server/routes/student.route');

//Connecting MongoDB Database

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db,{
    useNewUrlParser:true,
    // useUnifiedTopology: true
}).then(()=>{
    console.log('Database successfully connected');
},
    error =>{
        console.log('Could not connect to database: ',error);
    }
)

const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.use(cors());
app.use('/student',studentRoute);


//PORT
const port = process.env.PORT || 4000;
app.listen(port,()=>{
    console.log('Application is running on port:',port)
})

app.use('*',(req,res,next)=>{
    next(res.status(404))
})

app.use((err,req,res,next)=>{
    console.error(err.message)
    if(!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
})