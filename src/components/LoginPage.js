import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <div className="box-layout__title">Better allocate your income to achieve your financial goals</div>
            <div className="box-layout__bullet">
                <i className="fas fa-university fa-2x"></i>
                Pay Off Your Loans
            </div>
            <div className="box-layout__bullet">
                <i className="fas fa-piggy-bank fa-2x"></i>
                Save For Whats Important
            </div>
            <div className="box-layout__bullet">
                <i className="fas fa-file-invoice-dollar fa-2x"></i>
                Manage Your Bills
            </div>
            <button className="button--login" onClick={startLogin}>Free Login with Google</button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);