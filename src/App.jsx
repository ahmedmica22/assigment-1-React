import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Framework from "./components/Framework/Framework";
import Navbar from "./components/Navbar/Navbar";
import Protofolio from "./components/Protofolio/Protofolio";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import '@fortawesome/fontawesome-free/css/all.min.css';



let x = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "about", element: <About /> },
      { path: "protofolio", element: <Protofolio /> },
      { path: "contact", element: <Contact /> },
      { path: "framework", element: <Framework   /> },
    ],
  },
]);


function App(){

  return (
    
  <>
   <RouterProvider router={x}></RouterProvider>
  </>
);

}

export default App;
