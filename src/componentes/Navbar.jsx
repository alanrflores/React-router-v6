import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { UserContext } from "../context/UserProvider"
//Aca es donde hay que pintarlo para que me aparezca conectado y como viaja? con "ContextApi"
const Navbar = () => {
//Navbar tiene el usuario
//Como ya tenemos el provedor
  const {user} = useContext(UserContext)
//Como pusimos UserContext -- ahora si el usuario va a estar disponible


  return (
    <nav className="navbar navbar-dark bg-dark">
    
     <div className="container">
       <Link to="/"> { user  ? "Alan" : "Sin Conexion" } </Link>
        <NavLink  to="/" className="btn btn-outline-primary">Inicio</NavLink >
        <NavLink  to="/blog" className="btn btn-outline-primary">Blog</NavLink >
        <NavLink  to="/contacto" className="btn btn-outline-primary">Contacto</NavLink >
     </div>  


    </nav>
  )
}

export default Navbar