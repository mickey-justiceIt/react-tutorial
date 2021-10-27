import MyProducts from "../components/MyProducts/MyProducts";
import MainPage from "../components/MainPage/MainPage";
import PersonalCabinet from "../components/PersonalCabinet/PersonalCabinet";
import MySales from "../components/MySales/MySales";
import Login from "../components/Login/Login";
import Registration from "../components/Registration/Registration";

export const routes = [
  {
    component: Registration,
    path: "/registration",
    exact: true,
    withAuth: false,
  },
  {
    component: Login,
    path: "/login",
    exact: true,
    withAuth: false,
  },
  {
    component: MainPage,
    path: "/main-page",
    exact: true,
    withAuth: true,
  },

  {
    component: MyProducts,
    path: "/products",
    exact: true,
    withAuth: true,
  },

  {
    component: MySales,
    path: "/sales",
    exact: true,
    withAuth: true,
  },

  {
    component: PersonalCabinet,
    path: "/personal-cabinet",
    exact: true,
    withAuth: true,
  },
];
