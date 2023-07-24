const mongoose=require('mongoose');
const mongURI='mongodb+srv://dip:123@cluster0.43uc3ys.mongodb.net/test';
//mongodb://localhost:27017/?directConnection=true&readPreference=primary
const connectToMongo=()=>{
    mongoose.connect(mongURI,()=>{
        console.log('Connected to MongoDB Successfully');
    })
}

module.exports=connectToMongo;