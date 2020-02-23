import React from 'react';
import { Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, isAuth, ...rest }) => {
    const renderComponent = isAuth ? <Component {...rest} /> : <Redirect to="/login" />;

    return (renderComponent)
}

export default ProtectedRoute;