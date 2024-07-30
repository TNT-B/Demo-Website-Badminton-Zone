import BookingPage from "../BookingPage/BookingPage";
import LandingPage from "../LandingPage/LandingPage";
import ContactPage from "../ContactPage/ContactPage";
import OwnerPage from "../OwnerPage/OwnerPage";
import List from "../OwnerPage/List";
import NewsPage from "../NewsPage/NewPage";
import BookingStep from "../BookingPage/BookingStep";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Login from "../component/Login/index";
import Register from "../component/Register";
import ResetPassword from "../component/ResetPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/booking",
        element: <BookingPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/new",
        element: <NewsPage />,
      },
      {
        path: "/payment",
        element: <BookingStep />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/hello",
    element: <div>helo</div>,
  },
  {
    path: "/owner-add",
    element: <OwnerPage />,
  },
  {
    path: "/owner",
    element: <List />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
]);
export default router;
