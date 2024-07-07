import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../../RootLayout/Root";
import Home from "../../Components/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <h1>Error</h1>,
      children:[
        {
            path: '/',
            element: <Home/>
        }
    ]
    },
    
  ]);

  export default router;