import { useRoutes } from "react-router";
import GlobalStyle from "./globalStyles";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/search", element: <Search /> },
];

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
