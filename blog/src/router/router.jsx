import {createBrowserRouter} from 'react-router-dom'
import Write from '../page/Write/index.jsx'
import Layout from '../page/Layout/index.jsx'
import Login from '../page/Login/index.jsx'
import Home from '../page/Home/index.jsx'
import Register from '../page/Register/index.jsx'
import Single from '../page/Single/index.jsx'

const router = createBrowserRouter([
    {
        path:'/',
        element: <Layout/>,
        children:[
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'/write',
                element: <Write/>
            },
            {
                path:'/posts/:id',
                element: <Single/>
            }
        ]
    },
    {
        path:'/login',
        element: <Login/>
    },
    {
        path:'/register',
        element: <Register/>
    }
])

export default router