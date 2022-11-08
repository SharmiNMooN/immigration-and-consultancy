import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Login from "../../pages/Auth/Login/Login";
import Register from "../../pages/Auth/Register/Register";
import Home from "../../pages/Home/Home";
import Blog from "../../pages/Blog/Blog";
import MyReview from "../../pages/MyReview/MyReview";
import ServiceDetails from "../../pages/ServiceDetails/ServiceDetails";
import Services from "../../pages/Services/Services";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(
            `${process.env.REACT_APP_SERVER_BASEURL}/services?page=1&limit=3`
          ),
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: () =>
          fetch(
            `${process.env.REACT_APP_SERVER_BASEURL}/services?page=1&limit=6`
          ),
      },
      {
        path: "/services/:serviceId",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(
            `${process.env.REACT_APP_SERVER_BASEURL}/services/${params.serviceId}`
          ),
      },
      {
        path: "/my-reviews",
        element: <MyReview></MyReview>,
        // loader: ({ params }) =>
        //   fetch(
        //     `${process.env.REACT_APP_SERVER_BASEURL}/reviews/get-review-by-user/${params.userId}`
        //   ),
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);
