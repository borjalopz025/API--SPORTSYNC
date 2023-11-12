const { pool } = require('../database');


const getUser =  async(req, res) =>
{
  try 
  {

         
      console.log(sql);
      let [result] = await pool.query(sql)
      console.log(result); 
      
      res.send("api desplegada")
      
  } 
  catch (error) 
  {
      console.log(error);
  }
 
}

module.exports= {getUser}