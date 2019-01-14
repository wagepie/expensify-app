import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import WageAddPage from '../components/addpage/WageAddPage';
import WageEditPage from '../components/editpage/WageEditPage';

import PayOffType from '../components/selectpage/PayOffTypePage';
import PayOffAddCar from '../components/addpage/PayOffAddCar';
import PayOffEditPage from '../components/editpage/PayOffEditPage';

import SaveForType from '../components/selectpage/SaveForTypePage';
import SaveForAddCar from '../components/addpage/SaveForAddCar';
import SaveForEditPage from '../components/editpage/SaveForEditPage';

import BillType from '../components/selectpage/BillTypePage';
import BillAddFood from '../components/addpage/BillAddFood';
import BillEditPage from '../components/editpage/BillEditPage';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={DashboardPage} />

                <PrivateRoute path="/createwage" component={WageAddPage} />
                <PrivateRoute path="/editwage/:id" component={WageEditPage} />

                <PrivateRoute path="/payofftype" component={PayOffType} />
                <PrivateRoute path="/payoffaddcar" component={PayOffAddCar} />
                <PrivateRoute path="/editpayoff/:id" component={PayOffEditPage} />

                <PrivateRoute path="/savefortype" component={SaveForType} />
                <PrivateRoute path="/saveforaddcar" component={SaveForAddCar} />
                <PrivateRoute path="/editsavefor/:id" component={SaveForEditPage} />

                <PrivateRoute path="/savefortype" component={SaveForType} />
                <PrivateRoute path="/saveforaddcar" component={SaveForAddCar} />
                <PrivateRoute path="/editsavefor/:id" component={SaveForEditPage} />

                <PrivateRoute path="/billtype" component={BillType} />
                <PrivateRoute path="/billaddfood" component={BillAddFood} />
                <PrivateRoute path="/editbill/:id" component={BillEditPage} />

                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;