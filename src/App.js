import { useRoutes } from "react-router";
import GlobalStyle from "./globalStyles";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";

const routes = [{ path: "/", element: <Home /> }];

const App = () => {
  let element = useRoutes(routes);

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <main>{element}</main>
    </>
  );
};

export default App;
