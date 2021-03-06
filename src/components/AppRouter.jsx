import React from 'react';
import {
    Navigate,
    Routes,
    Route,
} from "react-router-dom";
import {routes} from "../router/routes";

const AppRouter = () => {
    return (
        <Routes>
            {
                routes.map(route => <Route key={route.path} path={route.path} element={<route.element/>} exact={route.exact}/>)
            }
            <Route path="*" element={<Navigate to="/posts/error" replace />}/>
        </Routes>
    );
};

export default AppRouter;