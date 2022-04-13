import React from 'react';
import ReactDOM from 'react-dom';

//lo llevamos como una etiqueta html por fuera de la App componente principal
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";

//Views
import App from './App';
import Blog from './routes/Blog';
import Contacto from './routes/Contacto';
import Inicio from './routes/Inicio';
import NoEncontrada from './componentes/NoEncontrada';
import Post from './routes/Post';
//Importamos el UserProvider 
import UserProvider from "./context/UserProvider";
import RutaProtegida from './routes/RutaProtegida';
import VerificarUsuario from "./componentes/VerificarUsuario"
//Todo lo que este dentro del UserProvider va a poder acceder a todo lo que ponemos en el value
//por la via children
//VerificarUsuario en caso de exista perfecto vaya a la ruta protegida y en caso que no, no va a retornar 
// y con navigate lo vamos a redirigir a la pagina seleccionada.
ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
    <BrowserRouter>
     <Routes>
       <Route path='/' element={<App />}>
         <Route index element={<Inicio />}/>
         <Route path='blog' element={<Blog />} />
         <Route path='blog/:id' element={<Post />} />
         <Route path='contacto' element={<Contacto />} />

         <Route 
             path='protegida' 
             element={
                    <VerificarUsuario>
                      <RutaProtegida />
                    </VerificarUsuario>
             } 
         />

         <Route path='*' element={<NoEncontrada />} />
       </Route>
     </Routes>
    </BrowserRouter>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

