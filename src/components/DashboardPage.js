import React from 'react';
import WagePieChart from './WagePieChart';
import WageList from './list/WageList';
import PayOffList from './list/PayOffList';
import SaveForList from './list/SaveForList';
import BillList from './list/BillList';


const DashboardPage = () => (
    <div>
        <WagePieChart />
        <WageList />    
        <PayOffList />
        <SaveForList />
        <BillList />
    </div>
);

export default DashboardPage;

