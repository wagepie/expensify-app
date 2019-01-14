import React from 'react';
import { connect } from 'react-redux';
import PayOffForm from '../form/PayOffForm';
import { startAddPayOff } from '../../actions/payoff';

export class PayOffAddCar extends React.Component {
    onSubmit = (payoff) => {
        this.props.startAddPayOff(payoff);
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Pay Off Car Loan</h1>
                    </div>
                </div>
                <div className="content-container">
                    <PayOffForm
                        description='Car Loan'
                        onSubmit={this.onSubmit}
                    />
                </div>
            </div>
        );        
    }
};

const mapDispatchToProps = (dispatch) => ({
    startAddPayOff: (payoff) => dispatch(startAddPayOff(payoff))
});

export default connect(undefined, mapDispatchToProps)(PayOffAddCar);