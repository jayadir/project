const mongoose = require('mongoose');
const url = "mongodb+srv://canteen:canteen2346@cluster0.zgewpk9.mongodb.net/canteen?retryWrites=true&w=majority";

const mongo = async () => {
  try 
  {
    await mongoose.connect(url,{ 
        useNewUrlParser: true, 
        useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');
    
    const data = mongoose.connection.db.collection("food_items");
    const innerdata = await data.find({}).toArray();
    const cat=await mongoose.connection.db.collection("category");
    const categorydata=await cat.find({}).toArray();
    //console.log(innerdata);
    
    global.food=innerdata;
    console.log(global.food);
    global.category=categorydata
    console.log(global.category);
  } 
  catch (err) 
  {
    console.error('Error connecting to MongoDB:', err);
  } 
//   finally 
//   {
//     mongoose.connection.close(); 
//   }
};

module.exports = mongo;
