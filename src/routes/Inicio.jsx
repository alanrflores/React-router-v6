import { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import { Link } from "react-router-dom";


const Inicio = () => {
//llamamos al Provider con el hooks useContext() para poder tener acceso al value{}
//UseProvider es para envolver a todos nuestros componentes y que todos tengan acceso a esa variable global.

//Con esto tengo acceso a los values
  const { user, signIn, signOut } = useContext(UserContext);

//Este State lo tenemos que enviar al navbar.
//const [user, setUser] = useState(false);
//onClick -- sirve para cambiar el estado de ese usuario
//Pintarlo en un h2 -- si existe el usuario le pongo conectado y en caso contrario desconectado.
//En caso de que conectado o registrado "Desconectar" y en caso contrario "Acceder"

    return (
        <div>
            <h1>Inicio</h1>
            <h2>{user ? "Conectado" : "Desconectado"}</h2>
            {user ? (
                <>
                <button className="btn btn-danger" onClick={signOut}>
                    Cerrar sesión
                </button>
                {/* Link para empujar la ruta protegida*/}
                <Link to="/protegida" className="btn btn-warning" >Ruta Protegida</Link>

                </>
            ) : (
                <button className="btn btn-primary" onClick={signIn}>
                    Iniciar sesión
                </button>
            )}
        </div>
    );
};

export default Inicio;





