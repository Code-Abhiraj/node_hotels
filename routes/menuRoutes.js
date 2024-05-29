const express =require('express');
const router= express.Router();
const Menu= require('../models/Menu')

// Post route to add a person
router.get('/',async(req,res)=>
    {
        try{
            const data=await Menu.find();
            console.log('data fetched');
            res.status(200).json(data);
        }
        catch(err)
        {
            console.log(err);
            res.status(500).json({error:'Internal server error'});
        }
    })
  router.post('/', async (req, res) => {
    try {
      const data = req.body; // assuming the request body contains the person data
  
      // Create a new person document using mongoose model
      const newMenu = new Menu(data);
      
      // Save the new person in the database
      const response = await newMenu.save();
      console.log('data saved');
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
      module.exports=router;