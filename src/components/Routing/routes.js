import MyProducts from "../MyProducts/MyProducts";
import Login from "../Login/Login";
import MainPage from "../MainPage/MainPage";
import PersonalCabinet from "../PersonalCabinet/PersonalCabinet";
import MySales from "../MySales/MySales";

export const routes = [
    {
        component: Login,
        path: '/login/',
        exact: true,
        withAuth: true
    },
    {
        component: MainPage,
        path: '/main-page',
        exact: true,
        withAuth: false
    },
    {
        component: MyProducts,
        path: '/products',
        exact: true,
        withAuth: false
    },
    {
        component: MySales,
        path: '/sales',
        exact: true,
        withAuth: false
    },
    {
        component: PersonalCabinet,
        path: '/personal-cabinet',
        exact: true,
        withAuth: true
    }

]