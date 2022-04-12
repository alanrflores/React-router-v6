import { useEffect, useState } from "react";
//recibo la url , por que tiene que ser dinamico
export const useFetch = (url) => {
//Guardamos los post de json placeholder
//por defecto es un array
 const [data, setData] = useState([])
 //necesitamos detectar el error
 const [error, setError] = useState('')
//para ser el loading
 const [loading, setLoading] = useState(false)
 

 useEffect(()=>{
//Activar el loading
    setLoading(true)
//toma la url, para las solicitudes en GET
    fetch(url)
//then nos trae como respuesta una respuesta y nosotros la retornamos en json
    .then(res => res.json())
//Obtenemos una data, y lo pintamos con setData que me va a traer data
    .then(data => setData(data))
//Manejamos el error
    .catch(e => setError('Error de servidor'))
    .finally(()=> setLoading(false))
//Mientras dure esta solicitud va  aestar en true y cuando termine sea verdadero o falle nos va a tirar false

  
//Dejamos los corchetes para que se ejecute una sola vez
//Tiene que estar pendiente a la url, cada vez que cambie la url va hacer el useEffect
 },[url])

  return {data, error, loading};
};
