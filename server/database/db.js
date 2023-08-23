module.exports = {
    db:'mongodb://127.0.0.1:27017/mern-stack-workshop'
}

// var mongoose = require('mongoose');
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/mern-stack-workshop', {useNewUrlParser: true});
// var conn = mongoose.connection;
// conn.on('connected', function() {
//     console.log('database is connected successfully');
// });
// conn.on('disconnected',function(){
//     console.log('database is disconnected successfully');
// })
// conn.on('error', console.error.bind(console, 'connection error:'));
// module.exports = conn;

