const mongoose = require('mongoose')
try{
    mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
    const db = mongoose.connection
    db.on('error', (error) => console.error(error))
    db.once('open', () => console.log('connected to Database'))
}
catch(err){
    console.log(err.message);
}



