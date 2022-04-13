import { createContext, useState } from "react"
//Exportamos el contexto no es un default
//Creamos el context -- exportar si o si una const que sea UserContext y creamos el contexto.
//UserContext-- es lo que nosotros vamos a poder acceder despues en el navbar o en el inicio.
//UserProvider-- va ser el que va a proveer al UserContext dentro de los componentes.
export const UserContext = createContext()
//paso despues de todo lo de abajo
//Sacamos el props -- y el mismo tiene un children - hacemos una destructuracion
//los otros componentes que estamos envolviendo viajan a children que va envuelto a provider.
const UserProvider = (props) => {

  const [user, setUser] = useState(false);
//Creamos metodos para cambiar el estado de User, todo dentro de UserProvider
//Ahora este proveedor tiene que sacar el user, signIn, signOut 
//Para sacarlo usamos el UserContext, tiene la capacidad de sacar el Provider y lo pasamos dentro del return.
//Es el que nosotros vamos a poder acceder dentro del Navbar y dentro del inicio
//UserContext -- (tiene dentro a user, signIn, signOut) y el UseProvider es el que envuelve a los otrs componen
//tiene un value y adentro le mandamos un objeto(para poder acceder)
  const signIn = () => setUser(true)
  const signOut = () => setUser(false)

//Cuando necesitemos utilizar el value con user, signIn, signOut , utilizamos el UserContent
  return (
    <UserContext.Provider value={{user, signIn, signOut}}>
         {props.children}
    </UserContext.Provider>
  )
}
//Exportamos toda la funcion de UserProvider
export default UserProvider;