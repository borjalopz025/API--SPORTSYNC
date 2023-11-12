const { pool } = require('../database');


const getUser =  async(req, res) =>
{
  try 
  {
      res.send("api desplegada")
      
  } 
  catch (error) 
  {
      console.log(error);
  }
 
}

module.exports= {getUser}