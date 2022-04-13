import {  useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { Navigate } from "react-router-dom";


const VerificarUsuario = ({ children }) => {
//Tenemos al user
//como es valor booleano -- (preguntar por el usuario)
//En caso de que no exista
//Navegate -- React-Router-DOM - Hace que podamos empujar al usuario, en caso de que no exista es como
//un redirect a la ruta que quieras (ej: si no esta logeado, por favor vaya a logearse ) pequena validacion
//En caso de que exista el usuario , retornamos el children
//Validacion del usuario
   const { user } = useContext(UserContext);

  if(!user) {

   return <Navigate to="/" />;

  }
  
  return children;
};

export default VerificarUsuario;