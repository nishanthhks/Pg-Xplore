import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import "./styles/index.scss";
import "./styles/layout.scss";

import HomePage from "./pages/HomePage/HomePage";
import ListPage from "./pages/ListPage/ListPage";
import SinglePage from "./pages/SinglePage/SinglePage";
import Layout from "./pages/Layout/Layout";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="layout">
          <Layout />
        </div>
      ),
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
