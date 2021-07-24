import { useRoutes } from "react-router";
import GlobalStyle from "./globalStyles";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import Account from "./pages/Account/Account";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/search", element: <Search /> },
  { path: "/account", element: <Account /> },
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
