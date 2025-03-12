import React from 'react'
import { createBrowserRouter , RouterProvider} from "react-router-dom";
// import Homepg from './src/Pages/Homepg.jsx';
// import Dashboard from './src/Pages/Dashboard.jsx';
// import Nav from './src/Components/Nav.jsx';
import Homepg from './pages/homepg.jsx';
import Dashboard from './pages/dashboard.jsx';
import Nav from './components/nav.jsx';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      // element: <>
      // <Nav/> <Homepg />
      // </>
      element:(
        <div>
          <Nav/>
          <Homepg/>
        </div>
      )
    },

    {
      path: '/dashboard',
      element:(
        <div>
          <Nav/>
          <Dashboard/>
        </div>
      )
    }
  ]);
  return (
    <div>
      <RouterProvider router={router}/>

    </div>
  )
}

export default App
