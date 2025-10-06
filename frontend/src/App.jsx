import './App.css'
import {Button} from "flowbite-react"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Router,
  RouterProvider,
} from "react-router-dom";
import AdminLayout from './layoutes/AdminLayout';
import Dashboard from './pages/admin/Dashboard';

import Orders from './pages/admin/Orders';
import Products from './pages/admin/Products';
import Users from './pages/admin/Users';
import Categories from './pages/admin/Categories';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path='/admin' element={<AdminLayout/>}>
        <Route index element={<Dashboard/>}/>
        <Route path='products' element={<Products/>}/>
        <Route path='categories' element={<Categories/>}/>
        <Route path='orders' element={<Orders/>}/>
        <Route path='users' element={<Users/>}/>
      </Route>
      </>
    )
  )
  return <RouterProvider router={router}/>
}

export default App
