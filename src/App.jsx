import React from 'react';
import './App.css';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Calvin from './pages/calvin.jsx';
import Riley from './pages/riley.jsx';
import Will from './pages/will.jsx';
import Navbar from './Navbar';
import Footer from './Components/Footer';
import PP from './pages/pp';
import Port from './pages/port';
import SparkleComponent from './Sparkle';
import Links from './Links';


import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

// {category, title, subtitle, image, caption, date, content}


const router = createBrowserRouter([
  {
    //keep this blank to default to home page
    path: '',
    element: <About />
  },
  {
    path: '/riley',
    element: <Riley />
  },
  {
    path: '/calvin',
    element: <Calvin />
  },
  {
    path: '/will',
    element: <Will />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/pp',
    element: <PP />
  },
  {
    path: '/Port',
    element: <Port />
  }
]);

function App() {
  return (
    <div class='wrapper'>
      {/* <Navbar /> */}
      <RouterProvider router={router}></RouterProvider>
  
    </div>
  );
}
export default App;
