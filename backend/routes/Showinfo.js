const express = require('express');
const router = express.Router();
router.post('/food',(request,response)=>
{
    try{
        response.send([global.food,global.category])
        //response.send([global.category])

    }
    catch(error)
    {
        console.log(error);
        response.send("error ")
    }
})
module.exports=router;
