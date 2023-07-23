const mongoose=require('mongoose');
const mongURI='mongodb://localhost:27017/?directConnection=true&readPreference=primary';

const connectToMongo=()=>{
    mongoose.connect(mongURI,()=>{
        console.log('Connected to MongoDB Successfully');
    })
}

module.exports=connectToMongo;