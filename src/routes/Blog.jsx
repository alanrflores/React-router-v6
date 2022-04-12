//import { useEffect } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const Blog = () => {
//Manipular los parametros de busqueda
//1- searchParams , 2 -- lo que lo modifica setSearchParams
//Almacena y establece el estado en los parámetros de búsqueda de URL en lugar de en la memoria.
let [searchParams, setSearchParams] = useSearchParams()
//Cada vez que cambie nuestro params, yo voy hacer una ejecucion de ("")
//.get (parametro= me trae la query) me trae lo que esta despues del =
//useEffect(()=>{
//  console.log(searchParams.get())
// })

//Lo mismo que retornamos en useFetch
//destructuracion
//recibe la url. la activamos
  const {data, error, loading} = useFetch('https://jsonplaceholder.typicode.com/posts')
//Cada vez que se haga la solicitud va estar en ....
    if(loading){
       return <h2>Loading....</h2>
    }
//En caso de un error , ya que inicia con un string vacio en useState, si es distinto a eso retorname...
    if(error !== ''){
      return <h2>{error}</h2>
    }

 
  const handleChange = (e) => {
  //inicializamos, lo que viene de nuestro inputs
    let filter = e.target.value;
  //En caso de exista ese filter, hacemos el set como un objeto({})
    if(filter){
      setSearchParams({filter});
  //En caso contrario le pasamos un objeto vacio
    }else {
      setSearchParams({})
    }
  }

//Despues que cargue si no hay error
//Iteramos la data
//Colocar una key que sea unica
//Usamos en link para retornar una ruta , vamos hacer uan interpolacion
//Que genere por cada blog que hacemos, que lo empuje a su ruta correspondiente
//en el index tenemos configurar las rutas dinamicas(post)
//el value lee el filter que esta arriba del buscador y devuelve el string en el input del blog
  return (
//filter-- devuelve un array , recibe un true o false para ver si recibe o no el resultado.
//En caso que filter no exista , voy a devolver true! por que no escribo nada en el input y me devuelve
//la lista entera.
//Y si escribe algo , que devuelva el resultado
//let title que lea la lista con su titulo por cada vuelta 
//startsWith()-- Indica si una cadena de texto comienza con los caracteres de una cadena de texto concreta,
//devolviendo true o false.
//si coincide el title que me retorne lo que escribio como filtro
    <div>
        <h1>Blog</h1>

        <input 
          type="text"
          className="form-control mb-2"
          value={searchParams.get('filter') || ""}
          onChange={handleChange} />
          
        
        {
         data.filter(item => {
           let filter = searchParams.get('filter')
           if(!filter) return true

           let title = item.title.toLowerCase()
           return title.startsWith(filter.toLowerCase())
           
         }).map((item) => (
            <h4 key={item.id}>
              <Link to={`/blog/${item.id}`}>{item.id} - {item.title}</Link>
              
            </h4>
          ))
        }
    </div>
  )

}

export default Blog