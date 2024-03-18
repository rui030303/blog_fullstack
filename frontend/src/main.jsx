import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'
import router from './router/router.jsx'
import { AuthContextProvider } from './context/authContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <AuthContextProvider>
  <RouterProvider router={router}>
    
  </RouterProvider>
  </AuthContextProvider>
  </>
)
