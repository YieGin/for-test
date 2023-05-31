import { createBrowserRouter, Outlet } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"

import { Home } from "./pages/Home/HomePage"
import { AuthLayout } from "./pages/layouts/AuthLayout"
import { RootLayout } from "./pages/layouts/RootLayout"
import { Login } from "./pages/Login/Login"
import { Signup } from "./pages/Signup/Signup"

export const router = createBrowserRouter([
  {
    element: <ContextWrapper />,
    children: [
      {
        path: "/",
        element: <RootLayout />,
        children: [
          { index: true, element: <Home /> },
        ],
      },
      {
        element: <AuthLayout />,
        children: [
          { path: "login", element: <Login /> },
          { path: "signup", element: <Signup /> },
        ],
      },
    ],
  },
])

function ContextWrapper() {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  )
}
