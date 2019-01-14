import React from 'react';
import { connect } from 'react-redux';
import PayOffForm from '../form/PayOffForm';
import { startAddPayOff } from '../../actions/payoff';
import wagesTotal from '../../selectors/wages-total';
import { payoffTotal } from '../../selectors/payoff-total';
import { saveforTotal } from '../../selectors/savefor-total';
import { billTotal } from '../../selectors/bill-total';
import numeral from 'numeral';


export class PayOffAddStudent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            principal: 0,
            payment: 0,
            totalinterest: 0,
            enddate: 'Date',
            error: ''
        };
    }
    onSubmit = (payoff) => {
        let remainingWage = this.props.wagesTotal - this.props.payoffTotal - this.props.saveforTotal - this.props.billTotal;
        if (remainingWage < payoff.payment) {
            const errorOver = "This is too much for your current wage";
            this.setState(() => ({ error: errorOver }));
        } else {
            this.props.startAddPayOff(payoff);
            this.props.history.push('/');
        }
    };
    onClick = (payoff) => {
        let remainingWage = this.props.wagesTotal - this.props.payoffTotal - this.props.saveforTotal - this.props.billTotal;
        if (remainingWage < payoff.payment) {
            const errorOver = "This is too much for your current wage";
            this.setState(() => ({ error: errorOver }));
        } else {
            this.setState(() => ({
                principal: payoff.principal,
                payment: payoff.payment,
                totalinterest: payoff.totalinterest,
                enddate: payoff.enddate,
                error: ''
            }));
        }
    };
    render() {
        return (
            <div className="content-container">
                <div className="summary-container">
                    <div className="payoff-element">
                        <div className="payoff-header">Loan Information</div>
                        <PayOffForm
                            description='Student Loan'
                            onClick={this.onClick}
                            onSubmit={this.onSubmit}
                        />
                    </div>
                    <div className="payoff-element">
                        <div className="payoff-header">Pay Off Summary</div>
                        <div className="form">
                            {this.state.error && <p className="form__error">{this.state.error}</p>}
                        </div>
                        <div className="calc-container">
                            <div className="calc-number">{numeral(this.state.payment).format('$0,0')}</div>
                            <div className="calc-text">in Monthly Payment</div>
                        </div>
                        <div className="calc-container">
                            <div className="calc-number">{numeral(this.state.payment / this.props.wagesTotal).format('0%,0.0')}</div>
                            <div className="calc-text">of Monthly Wage</div>
                        </div>
                        <div className="calc-container">
                            <div className="calc-text">Pay Off by</div>
                            <div className="calc-number">{this.state.enddate}</div>
                        </div>
                        <div className="calc-container">
                            <div className="calc-number">{numeral(this.state.totalinterest).format('$0,0')}</div>
                            <div className="calc-text">in Total Interest</div>
                        </div>
                        <div className="calc-container">
                            <div className="calc-number">{numeral(this.state.totalinterest + this.state.principal).format('$0,0')}</div>
                            <div className="calc-text">in Total Loan Cost</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state, props) => ({
    wagesTotal: wagesTotal(state.wages),
    payoffTotal: payoffTotal(state.payoffs),
    saveforTotal: saveforTotal(state.savefors),
    billTotal: billTotal(state.bills)
});

const mapDispatchToProps = (dispatch) => ({
    startAddPayOff: (payoff) => dispatch(startAddPayOff(payoff)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PayOffAddStudent);