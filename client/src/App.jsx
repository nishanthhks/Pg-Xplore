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
import { Layout, RequireAuth } from "./pages/Layout/Layout";
import LoginPage from "./pages/LoginPage/LoginPage";
import Profile from "./pages/Profile/Profile";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ProfileUpdate from "./pages/ProfileUpdate/ProfileUpdate";

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

        {
          path: "/register",
          element: <RegisterPage />,
        },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/profile/update",
          element: <ProfileUpdate />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
