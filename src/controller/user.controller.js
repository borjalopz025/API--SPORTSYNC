const { pool } = require("../database");

/*Funcion Resgistrar */
const postRegister = async (req, res) =>
{

   try 
   {

       let sql = "INSERT INTO usuario (nombre, usuario, email, password, provincia, ciudad) " + 
                 "VALUES ('" + req.body.nombre + "', '" +
                               req.body.usuario + "', '" +
                               req.body.email + "', '" +
                               req.body.password + "', '" +
                               req.body.provincia + "', '" +
                               req.body.ciudad + "')";
       
       console.log(sql);
       let [result] = await pool.query(sql);
       console.log(result);

       if (result.insertId)
          res.send(String(result.insertId));

       else
         res.send("-1");
   }
   catch(err)
   {
       console.log(err);
   }
} 


/* Funcion Iniciar Sesion */
const postLogin = async (req, res) =>
{
   const { email, password } = req.body;

   try 
   {

       let sql = "SELECT id_usuario, nombre, usuario, email, provincia, ciudad FROM usuario WHERE email = ? AND password = ?";
       
       let [result , data] = await pool.query(sql, [email, password]);
       console.log(result);
       res.send(result);
       

}
catch(err)
{
    console.log(err);
}
}


/*Actualiza la informacion del perfil del usuario */
const putUsuario = async (req, res) =>
{
    try
    {   
        console.log(req.body);
        let params = [req.body.nombre,
                      req.body.provincia,
                      req.body.descripcion,
                      req.body.foto,
                      req.body.id_usuario]

        let sql = "UPDATE usuario SET  nombre = COALESCE(?, nombre) , " + 
                                   "ciudad = COALESCE(?, last_ciudad), " +
                                   "descripcion = COALESCE(?, descripcion), " +
                                   "foto = COALESCE(?, foto) WHERE id_usuario = ?";

        console.log(sql);
        let [result] = await pool.query(sql, params);
        res.send(result); 
    }
    catch(err)
    {
        console.log(err)
    }
}
module.exports = {postRegister, postLogin, putUsuario};