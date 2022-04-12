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


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
     <Routes>
       <Route path='/' element={<App />}>
         <Route index element={<Inicio />}/>
         <Route path='blog' element={<Blog />} />
         <Route path='blog/:id' element={<Post />} />
         <Route path='contacto' element={<Contacto />} />

         <Route path='*' element={<NoEncontrada />} />
       </Route>
     </Routes>
    </BrowserRouter> 
  </React.StrictMode>,
  document.getElementById('root')
);

