
  import { createRoot } from "react-dom/client";
  import { RouterProvider, createBrowserRouter } from "react-router-dom";
  import { routes } from "./router/routes";
  import "./index.css";

  const router = createBrowserRouter(routes);

  createRoot(document.getElementById("root")!).render(<RouterProvider router={router} />);
  