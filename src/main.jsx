import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import Sobre from './pages/Sobre.jsx'
import Conteudoprincipal from './components/Conteudoprincipal.jsx'
import Pagenotfound from './components/Pagenotfound.jsx'

const router = createBrowserRouter([
  {
    path: '/', 
    element:<App/>,
    children: [
      {index: true, element: <Conteudoprincipal/>},
      {path: '/sobre', element:<Sobre/>},
      {path: '*', element:<Pagenotfound/>}
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
