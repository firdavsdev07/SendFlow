import AuthLayout from '../layouts/AuthLayout'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import Dashboard from '../pages/Dashboard'
import Home from '../pages/Home'
export const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path:"/auth",
    component:AuthLayout,
    children:[
      {
        path:"login",
        component:Login
      },
      {
        path:"register",
        component:Register
      }
    ]
  },
  {
    path:"/dashboard",
    component:Dashboard
  }
]
