import { createBrowserRouter } from "react-router-dom";
import LogIn from "../AuthPage/LogIn";
import SignUp from "../AuthPage/SignUp";
import AllTask from "../components/AllTask";
import Spin from "../components/Spin";
import TaskDetails from "../components/TaskDetails";
import AuthLayout from "../layout/AuthLayout";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/homePage/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <LogIn />,
      },
      {
        path: "register",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/home",
    element: <MainLayout />,
    // errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "taskDetails/:id",
        element: <TaskDetails />,
      },
      {
        path: "spin",
        element: <Spin />,
      },
    ],
  },
]);
