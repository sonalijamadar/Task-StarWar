import logo from './logo.svg';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home';
import Character from './Components/Character';
import './index.css'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/characters/:id",
    element: <Character/>
  }
])

const App = () =>{
  return <RouterProvider router={router} />
}

export default App;
