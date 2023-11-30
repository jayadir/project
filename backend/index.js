const express = require('express');
const app = express();
const port = 5001;
const mongo = require("./db");
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-origin","http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
  );
  next();
})

mongo().then(() => {
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

//   const temp = require("./routes/Create");
  app.use(express.json());
  app.use('/api', require("./routes/Create"));
 // app.use('/api', require("./routes/Display"));
 app.use('/api', require("./routes/Showinfo"));
app.use('/api',require('./routes/orderroute'));

  app.listen(port, () => {
    console.log(`port ${port}`);
  });
}).catch(err => {
  console.error('Error connecting to MongoDB:', err);
}); 
