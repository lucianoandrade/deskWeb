import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AuthLayout from '../layouts/AuthLayout'
import DefaultLayout from '../layouts/DefaultLayout';

const RouteWrapper = ({
  isPrivate,
  component: Component,
  token,
  path,
  signed,
  ...rest
}) => {
  if (!signed && isPrivate) {
    return <Redirect to="/" />
  }

  if (signed && !isPrivate && token) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

const mapStateToProps = ({ authReducer }) => (authReducer);

export default connect(mapStateToProps)(RouteWrapper);
