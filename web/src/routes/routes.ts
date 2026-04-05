import AuthLayout from '../layouts/AuthLayout'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import Dashboard from '../pages/Dashboard'
import DashboardHome from '../pages/dashboard/DashboardHome'
import DashboardTransfers from '../pages/dashboard/DashboardTransfers'
import DashboardRooms from '../pages/dashboard/DashboardRooms'
import DashboardSettings from '../pages/dashboard/DashboardSettings'
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
    component:Dashboard,
    children:[
      {
        path:"",
        component:DashboardHome,
        index: true
      },
      {
        path:"transfers",
        component:DashboardTransfers
      },
      {
        path:"rooms",
        component:DashboardRooms
      },
      {
        path:"settings",
        component:DashboardSettings
      }
    ]
  }
]
