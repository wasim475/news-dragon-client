import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../../RootLayout/Root";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <h1>Error</h1>,
      Children:[
        {
            
        }
    ]
    },
    
  ]);

  export default router;