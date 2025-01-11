import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import { Toaster } from "react-hot-toast";
import Userprovider from "./context/User.context";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import GuestRoute from "./components/GuestedRoute/GuestRoute";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />,
        </ProtectedRoute>
      ),
      children: [{ index: true, element: <Home /> }],
    },
    {
      path: "/",
      element: (
        <GuestRoute>
          <Layout />,
        </GuestRoute>
      ),
      children: [
        { path: "/login", element: <Login /> },
        { path: "/signup", element: <Signup /> },
      ],
    },
  ]);
  return (
    <>
      <Userprovider>
        <RouterProvider router={router} />
      </Userprovider>
      <Toaster />
    </>
  );
}

export default App;
