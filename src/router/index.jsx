import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../provider/authProvider";
import { ProtectedRoute } from "./ProtectedRoute";
import { RedirectedIfAuthenticated } from "./RedirectedIfAuthenticated";
// All the components
import Login from '../components/Login/Login'
import GoogleAuth from '../components/Login/GoogleAuth'
import Dashboard from '../components/Dashboard/Dashboard'
import Profile from '../components/Profile/Profile'
import UpdateProfile from '../components/Profile/UpdateProfile'
import Logout from '../components/Logout/Logout'

const Routes = () => {
  const { token } = useAuth();

  // Define public routes accessible to all users
  const routesForPublic = [
    {
      path: "/",
      element: <div>Home</div>,
    },
  ];

  // Define routes accessible only to authenticated users
  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/update-profile",
          element: <UpdateProfile />,
        },
        {
          path: "/logout",
          element: <Logout/>,
        },
      ],
    },
  ];
// Define routes accessible only to non-authenticated users
const routesForNotAuthenticatedOnly = [
    {
        path: "/",
        element: <RedirectedIfAuthenticated />, // Wrap the component in ProtectedRoute
        children: [
            {
            path: "/login",
            element: <Login />,
            },
            {
              path: "/auth/google/callback",
              element: <GoogleAuth />,
            },
        ],
    },
    ];

  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter([
    ...routesForPublic,
    ...routesForNotAuthenticatedOnly,
    ...routesForAuthenticatedOnly,
  ]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;