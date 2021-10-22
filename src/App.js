import styles from "./App.module.scss";

import { Switch, Route } from "react-router-dom";
import { routes } from "./components/routes/routes";
import SideBar from "./components/Sidebar/Sidebar";
import ProtectedRoute from "./components/routes/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <div className={styles.App}>
      <SideBar />
      <Switch>
        {routes.map((route, index) =>
          route.withAuth ? (
            <ProtectedRoute />
          ) : (
            <Route
              key={index}
              path={route.path}
              component={route.component}
              routes={route.exact}
            />
          )
        )}
      </Switch>
    </div>
  );
}

export default App;
