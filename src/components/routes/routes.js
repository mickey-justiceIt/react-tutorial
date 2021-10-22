import MyProducts from "../MyProducts/MyProducts";
import MainPage from "../MainPage/MainPage";
import PersonalCabinet from "../PersonalCabinet/PersonalCabinet";
import MySales from "../MySales/MySales";
import SignIn from "../Sign/SignUp/SignUp";
import SignUp from "../Sign/SignUp/SignUp";

export const routes = [
  {
    component: MainPage,
    path: "/main-page",
    exact: true,
    withAuth: false,
  },

  {
    component: MyProducts,
    path: "/products",
    exact: true,
    withAuth: false,
  },

  {
    component: MySales,
    path: "/sales",
    exact: true,
    withAuth: false,
  },
  {
    component: PersonalCabinet,
    path: "/personal-cabinet",
    exact: true,
    withAuth: false,
  },
  {
    component: PersonalCabinet,
    path: "/personal-cabinet",
    exact: true,
    withAuth: false,
  },
  {
    component: SignIn,
    path: "/signin",
    exact: true,
    withAuth: false,
  },
  {
    component: SignUp,
    path: "/signup",
    exact: true,
    withAuth: false,
  },
];
