import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    // loader: () =>
    //   fetch(
    //     "https://sikkhayon-academy-server-sharminmoon.vercel.app/course-categories"
    //   ),
    children: [],
  },
]);
