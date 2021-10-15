import styles from './App.module.scss';
import SideBar from "./components/Sidebar/Sidebar";
import {Switch, Route} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";

function App() {
  return (
    <div className={styles.App}>
        <SideBar/>
        <Switch>
            <Route path={'/main-page'} component={MainPage}></Route>
        </Switch>
    </div>
  );
}

export default App;
