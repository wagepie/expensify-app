import React from 'react';
import { connect } from 'react-redux';
import BillForm from '../form/BillForm';
import wagesTotal from '../../selectors/wages-total';
import { payoffTotal } from '../../selectors/payoff-total';
import { saveforTotal } from '../../selectors/savefor-total';
import { billTotal } from '../../selectors/bill-total';
import { startRemoveBill, startEditBill } from '../../actions/bill';
import numeral from 'numeral';


export class EditBillPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            payment: this.props.bill.payment,
            error: ''
        };
    }
    onSubmit = (bill) => {
        let remainingWage = this.props.wagesTotal - this.props.payoffTotal - this.props.saveforTotal - this.props.billTotal + this.props.bill.payment;
        if (remainingWage < bill.payment) {
            const errorOver = "This is too much for your current wage";
            this.setState(() => ({ error: errorOver }));
        } else {
            this.props.startEditBill(this.props.bill.id, bill);
            this.props.history.push('/');
        }
    };
    onRemove = () => {
        this.props.startRemoveBill({ id: this.props.bill.id });
        this.props.history.push('/');
    };
    onClick = (bill) => {
        let remainingWage = this.props.wagesTotal - this.props.payoffTotal - this.props.saveforTotal - this.props.billTotal + this.props.bill.payment;
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
                            bill={this.props.bill}
                            onClick={this.onClick}
                            onSubmit={this.onSubmit}
                        />
                        <div className="form__container">
                            <button className="button--remove" onClick={this.onRemove}>Delete</button>
                        </div>
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
    bill: state.bills.find((bill) => bill.id === props.match.params.id),
    wagesTotal: wagesTotal(state.wages),
    payoffTotal: payoffTotal(state.payoffs),
    saveforTotal: saveforTotal(state.savefors),
    billTotal: billTotal(state.bills)
});

const mapDispatchToProps = (dispatch, props) => ({
    startEditBill: (id, bill) => dispatch(startEditBill(id, bill)),
    startRemoveBill: (data) => dispatch(startRemoveBill(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditBillPage);