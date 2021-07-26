import { useRoutes } from "react-router";
import GlobalStyle from "./globalStyles";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Search from "./pages/Search/Search";
import Account from "./pages/Account/Account";
import MyList from "./pages/Account/MyList/MyList";
import Downloads from "./pages/Account/Downloads/Downloads";
import Continue from "./pages/Account/Continue/Continue";
import InDev from "./pages/InDev/InDev";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/search", element: <Search /> },
  {
    path: "/account",
    element: <Account />,
    children: [
      { path: "/my-list", element: <MyList /> },
      { path: "/downloads", element: <Downloads /> },
      { path: "/continue-watching", element: <Continue /> },
    ],
  },
  {
    path: "/genre/:id",
    element: <InDev />,
  },
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
