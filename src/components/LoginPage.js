import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <div className="box-layout__title">Better allocate your income to achieve your financial goals</div>
            <table className="box-layout__bullet">
                <tbody>
                    <tr>
                        <td scope="column" width='75'>
                            <i className="fas fa-university fa-2x"></i>
                        </td>
                        <td scope="column" width='225' align='left'>Pay Off Your Loans</td>
                    </tr>
                    <tr>
                        <td scope="column" width='75'>
                            <i className="fas fa-piggy-bank fa-2x"></i>
                        </td>
                        <td scope="column" width='225' align='left'>Save For Whats Important</td>
                    </tr>
                    <tr>
                        <td scope="column" width='75'>                
                            <i className="fas fa-file-invoice-dollar fa-2x"></i>
                        </td>
                        <td scope="column" width='225' align='left'>Manage Your Bills</td>
                    </tr>
                </tbody>
            </table>



            <button className="button--login" onClick={startLogin}>Free Login with Google</button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);