
import React, { useState } from "react";

import styles from "./App.module.scss";

import { Switch, Route, Redirect } from "react-router-dom";
import { routes } from "./routes/routes";

import SideBar from "./components/Sidebar/Sidebar";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
    const [isAuth, setIsAuth] = useState(JSON.parse(localStorage.getItem("ISAUTH")));

    return (
        <>
            <div className={styles.App}>
                <SideBar
                    isAuth={isAuth}
                    setIsAuth={setIsAuth}
                />
                <Switch>
                    {routes.map((route, index) =>
                        route.withAuth ? (
                            <ProtectedRoute
                                path={route.path}
                                key={index}
                                component={route.component}
                                exact
                                isAuth={isAuth}
                                setIsAuth={setIsAuth}
                            />
                        ) : (
                            <Route
                                key={index}
                                path={route.path}
                                routes={route.exact}
                                render={() => {
                                    const Component = route.component;
                                    return (
                                        <>
                                            <Component
                                                isAuth={isAuth}
                                                setIsAuth={setIsAuth}
                                            />
                                        </>
                                    );
                                }}
                            />
                        )
                    )}
                </Switch>
            </div>
        </>
    );
}

export default App;