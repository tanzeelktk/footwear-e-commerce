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
import Products from './pages/admin/Products';
import Orders from './pages/admin/Orders';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path='/admin' element={<AdminLayout/>}>
        <Route index element={<Dashboard/>}/>
        <Route path='product' element={<Products/>}/>
        <Route path='order' element={<Orders/>}/>
      </Route>
      </>
    )
  )
  return <RouterProvider router={router}/>
}

export default App
