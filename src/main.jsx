import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  Router,
  RouterProvider,
} from "react-router-dom";


import { RickAndMorty } from './pages/RickAndMorty.jsx'
import { DescriptionRM} from './pages/DescriptionRM.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <RickAndMorty/>,
  },
  {
    path:'/detalles/:id',
    element: <DescriptionRM/>,
  }
]);




createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
