import styles from './App.module.scss';
import SideBar from "./components/Sidebar/Sidebar";
import {Switch, Route} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import MyProducts from './components/MyProducts/MyProducts';
import { routes } from './components/Routing/routes';
import ProtectedRoute from './components/Routing/ProtectedRoute';
import MySales from "./components/MySales/MySales";
import PersonalCabinet from "./components/PersonalCabinet/PersonalCabinet";
import SignIn from "./components/Sign/SingIn/SignIn";
function App() {

    routes.map((route,index) => (
            route.withAuth
                ? (<ProtectedRoute path={route.path} key={index} component={route.component} routes={route.exact}/>)
                : (<Route key={index} path={route.path} component={route.component} routes={route.exact}/>)
        )
    )

    return (

        <div className={styles.App}>
            <SideBar/>
            <Switch>
                <Route exact path={'/main-page'} component={MainPage}></Route>
                <Route path={'/products'} component={MyProducts}></Route>
                <Route path={'/sales'} component={MySales}></Route>
                <Route path={'/personal-cabinet'} component={PersonalCabinet}></Route>
            </Switch>
        </div>

    );

}

export default App;