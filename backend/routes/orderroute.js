const express=require('express')
const router=express.Router()
const orderschema=require('../datamodel/orders')
router.post('/myorders', async (request, response) => {
  let userid = await orderschema.findOne({ 'email': request.body.email });

  if (userid) {
      try {
        console.log('Received request:', request.body); 
          await orderschema.findOneAndUpdate({ email: request.body.email }, { $push: { orders: { $each: request.body.orders } } })
              .then(() => {
                  response.json({ success: true });
              });
      } catch (e) {
          response.status(500).json({ success: false, error: e.message });
      }
  } else {
      try {
        console.log('Received request:', request.body); 
          await orderschema.create({
              email: request.body.email,
              orders: [request.body.orders]
          }).then(() => {
              response.json({ success: true });
          });
      } catch (e) {
          response.status(500).json({ success: false, error: e.message });
      }
  }
});

router.post('/pastorders',async (request,response)=>{
    try{
        const orderdata=await orderschema.findOne({'email':request.body.email})
        response.json({pastorders:orderdata.orders})
    }
    catch(e){
        console.log("error",e.messsage)
        response.send("error",e.message)
    }
})

module.exports = router;
