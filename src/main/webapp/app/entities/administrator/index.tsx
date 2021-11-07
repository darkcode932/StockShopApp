import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Administrator from './administrator';
import AdministratorDetail from './administrator-detail';
import AdministratorUpdate from './administrator-update';
import AdministratorDeleteDialog from './administrator-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={AdministratorUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={AdministratorUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={AdministratorDetail} />
      <ErrorBoundaryRoute path={match.url} component={Administrator} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={AdministratorDeleteDialog} />
  </>
);

export default Routes;
