import React from 'react';
import { connect } from 'react-redux';
import BillForm from '../form/BillForm';
import { startAddBill } from '../../actions/bill';
import wagesTotal from '../../selectors/wages-total';
import { payoffTotal } from '../../selectors/payoff-total';
import { saveforTotal } from '../../selectors/savefor-total';
import { billTotal } from '../../selectors/bill-total';
import numeral from 'numeral';


export class BillAddUtilities extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            payment: 0,
            error: ''
        };
    }
    onSubmit = (bill) => {
        let remainingWage = this.props.wagesTotal - this.props.payoffTotal - this.props.saveforTotal - this.props.billTotal;
        if (remainingWage < bill.payment) {
            const errorOver = "This is too much for your current wage";
            this.setState(() => ({ error: errorOver }));
        } else {
            this.props.startAddBill(bill);
            this.props.history.push('/');
        }
    };
    onClick = (bill) => {
        let remainingWage = this.props.wagesTotal - this.props.payoffTotal - this.props.saveforTotal - this.props.billTotal;
        if (remainingWage < bill.payment) {
            const errorOver = "This is too much for your current wage";
            this.setState(() => ({ error: errorOver }));
        } else {
            this.setState(() => ({
                payment: bill.payment,
                error: ''
            }));
        }
    };
    render() {
        return (
            <div className="content-container">
                <div className="summary-container">
                    <div className="bill-element">
                        <div className="bill-header">Bill Information</div>
                        <BillForm
                            description='Utilities'
                            onClick={this.onClick}
                            onSubmit={this.onSubmit}
                        />
                    </div>
                    <div className="bill-element">
                        <div className="bill-header">Bill Summary</div>
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
    startAddBill: (bill) => dispatch(startAddBill(bill)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BillAddUtilities);