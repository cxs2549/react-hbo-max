import { useRoutes } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";

const routes = [{ path: "/", element: <Home /> }];

const App = () => {
  let element = useRoutes(routes);

  return (
    <>
      <Navbar />
      <main>{element}</main>
    </>
  );
};

export default App;
