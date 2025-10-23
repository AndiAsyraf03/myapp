import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Profile from "../pages/profile";
import Galeri from "../pages/galeri";
import Contact from "../pages/contact";
import Register from "../pages/register";
import App from "../App";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "profile", element: <Profile />},
      { path: "galeri", element: <Galeri />},
      { path: "contact", element: <Contact />},
      { path: "registrasi", element: <Register />}
    ],
  },
]);
