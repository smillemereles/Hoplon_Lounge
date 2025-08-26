import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Error404, MaintenanceNotice } from "@/components/ErrorAndMaintenancePages";
import Home from "./Home"; // tu página principal

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/maintenance", element: <MaintenanceNotice /> },
  { path: "*", element: <Error404 /> }, // 404 catch-all
]);

export default function App() {
  return <RouterProvider router={router} />;
}