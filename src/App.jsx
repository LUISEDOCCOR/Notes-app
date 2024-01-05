import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./Pages/home"



const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home/>
    },
    {
      path: 'login',
      element: <h1>login page</h1>
    }
  ]
)


function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
