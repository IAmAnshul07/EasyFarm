import Header from './header/Header';
import Home from './Home/Home'
import Auth from './Login/Auth'
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Auth />,
  }
]);
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
      </BrowserRouter>
      <RouterProvider router={router} />
      
  </div>
  
  );
}

export default App;
