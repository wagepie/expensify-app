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
import PayOffAddBusiness from '../components/addpage/PayOffAddBusiness';
import PayOffAddCar from '../components/addpage/PayOffAddCar';
import PayOffAddCC from '../components/addpage/PayOffAddCC';
import PayOffAddMortgage from '../components/addpage/PayOffAddMortgage';
import PayOffAddOther from '../components/addpage/PayOffAddOther';
import PayOffAddStudent from '../components/addpage/PayOffAddStudent';
import PayOffEditPage from '../components/editpage/PayOffEditPage';

import SaveForType from '../components/selectpage/SaveForTypePage';
import SaveForAddBusiness from '../components/addpage/SaveForAddBusiness';
import SaveForAddCar from '../components/addpage/SaveForAddCar';
import SaveForAddHouse from '../components/addpage/SaveForAddHouse';
import SaveForAddOther from '../components/addpage/SaveForAddOther';
import SaveForAddRetirement from '../components/addpage/SaveForAddRetirement';
import SaveForAddVacation from '../components/addpage/SaveForAddVacation';
import SaveForEditPage from '../components/editpage/SaveForEditPage';

import BillType from '../components/selectpage/BillTypePage';
import BillAddFood from '../components/addpage/BillAddFood';
import BillAddOther from '../components/addpage/BillAddOther';
import BillAddRent from '../components/addpage/BillAddRent';
import BillAddShopping from '../components/addpage/BillAddShopping';
import BillAddTransportation from '../components/addpage/BillAddTransportation';
import BillAddUtilities from '../components/addpage/BillAddUtilities';
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
                <PrivateRoute path="/payoffaddbusiness" component={PayOffAddBusiness} />
                <PrivateRoute path="/payoffaddcar" component={PayOffAddCar} />
                <PrivateRoute path="/payoffaddcc" component={PayOffAddCC} />
                <PrivateRoute path="/payoffaddmortgage" component={PayOffAddMortgage} />
                <PrivateRoute path="/payoffaddother" component={PayOffAddOther} />
                <PrivateRoute path="/payoffaddstudent" component={PayOffAddStudent} />
                <PrivateRoute path="/editpayoff/:id" component={PayOffEditPage} />

                <PrivateRoute path="/savefortype" component={SaveForType} />
                <PrivateRoute path="/saveforaddbusiness" component={SaveForAddBusiness} />
                <PrivateRoute path="/saveforaddcar" component={SaveForAddCar} />
                <PrivateRoute path="/saveforaddhouse" component={SaveForAddHouse} />
                <PrivateRoute path="/saveforaddother" component={SaveForAddOther} />
                <PrivateRoute path="/saveforaddretirement" component={SaveForAddRetirement} />
                <PrivateRoute path="/saveforaddvacation" component={SaveForAddVacation} />
                <PrivateRoute path="/editsavefor/:id" component={SaveForEditPage} />
                <PrivateRoute path="/savefortype" component={SaveForType} />
                <PrivateRoute path="/saveforaddcar" component={SaveForAddCar} />
                <PrivateRoute path="/editsavefor/:id" component={SaveForEditPage} />

                <PrivateRoute path="/billtype" component={BillType} />
                <PrivateRoute path="/billaddfood" component={BillAddFood} />
                <PrivateRoute path="/billaddother" component={BillAddOther} />
                <PrivateRoute path="/billaddrent" component={BillAddRent} />
                <PrivateRoute path="/billaddshopping" component={BillAddShopping} />
                <PrivateRoute path="/billaddtransportation" component={BillAddTransportation} />
                <PrivateRoute path="/billaddutilities" component={BillAddUtilities} />
                <PrivateRoute path="/editbill/:id" component={BillEditPage} />

                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;