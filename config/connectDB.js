const mongoose = require('mongoose');

//connect to db
const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('DataBase is connected ♥♥♥')
    } catch (error) {
        console.log(`connection DataBase Failed****${error}`)
    
    }
}

module.exports = connectDB