import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const Post = () => {
//params en post , estoy leyendo la url con el parametro que le colocamos en index route ":id"
//tengo el id y el la url con el useEffect, ahora hay que mandar la url con el id correspondiente
 const params = useParams()
//Sacamos todo lo que viene del useFetch
//Hacemos la interpolacion
//ese id es el nombre que le pusimos en index la cual puede ser renombrado
 const {data, error, loading} = useFetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)

//Cada vez que se haga la solicitud va estar en ....
if(loading){
    return <h2>Loading....</h2>
 }
//En caso de un error , ya que inicia con un string vacio en useState, si es distinto a eso retorname...
 if(error !== ''){
   return <h2>{error}</h2>
 }
//Despues que cargue si no hay error
//Iteramos la data
//Colocar una key que sea unica
//El objeto que nosotros traemos de nuestra API
  return (
    <div>
        <h1>{params.id} - {data.title}</h1>
        <p>{data.body}</p>
    </div>
  )
}

export default Post