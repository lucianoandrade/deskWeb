import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './Route';
import AuthPage from '../pages/Auth';

import NodeBoard from '../pages/NodeBoard';
import NodesBoard from '../pages/NodesBoard';
import StaffBoard from '../pages/StaffBoard';
import Dashboard from '../pages/Dashboard';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={AuthPage} />
        <Route path="/dashboard" exact component={Dashboard} isPrivate />
        <Route path="/node-board" exact component={NodeBoard} isPrivate />
        <Route path="/nodes-board" exact component={NodesBoard} isPrivate />
        <Route path="/staff-board/:nodeId" exact component={StaffBoard} isPrivate />
      </Switch>
    </BrowserRouter>
  )
}