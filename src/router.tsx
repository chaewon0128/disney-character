import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Detail from "./screens/Detail";
import Home from "./screens/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "character/:id",
        element: <Detail />
      }
    ]
  }
]);

export default router;
