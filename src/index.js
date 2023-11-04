import "./styles.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./home";
import ErrorPage from "./error-page";
import Kitchen from "./kitchen";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/kitchen",
    element: <Kitchen />
  }
]);

root.render(
  <StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </StrictMode>
);
