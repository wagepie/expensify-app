import React from 'react';
import { connect } from 'react-redux';
import PayOffForm from '../form/PayOffForm';
import wagesTotal from '../../selectors/wages-total';
import { payoffTotal } from '../../selectors/payoff-total';
import { saveforTotal } from '../../selectors/savefor-total';
import { billTotal } from '../../selectors/bill-total';
import { startRemovePayOff, startEditPayOff } from '../../actions/payoff';
import numeral from 'numeral';


export class EditPayOffPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            principal: this.props.payoff.principal,
            payment: this.props.payoff.payment,
            totalinterest: this.props.payoff.totalinterest,
            enddate: this.props.payoff.enddate,
            error: ''
        };
    }
    onSubmit = (payoff) => {
        let remainingWage = this.props.wagesTotal - this.props.payoffTotal - this.props.saveforTotal - this.props.billTotal + this.props.payoff.payment;
        if (remainingWage < payoff.payment) {
            const errorOver = "This is too much for your current wage";
            this.setState(() => ({ error: errorOver }));
        } else {
            this.props.startEditPayOff(this.props.payoff.id, payoff);
            this.props.history.push('/');
        }
    };
    onRemove = () => {
        this.props.startRemovePayOff({ id: this.props.payoff.id });
        this.props.history.push('/');
    };
    onClick = (payoff) => {
        let remainingWage = this.props.wagesTotal - this.props.payoffTotal - this.props.saveforTotal - this.props.billTotal + this.props.payoff.payment;
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
                            payoff={this.props.payoff}
                            onClick={this.onClick}
                            onSubmit={this.onSubmit}
                        />
                        <div className="form__container">
                            <button className="button--remove" onClick={this.onRemove}>Delete</button>
                        </div>
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
                            <div className="calc-text">in Total Interest Paid</div>
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
    payoff: state.payoffs.find((payoff) => payoff.id === props.match.params.id),
    wagesTotal: wagesTotal(state.wages),
    payoffTotal: payoffTotal(state.payoffs),
    saveforTotal: saveforTotal(state.savefors),
    billTotal: billTotal(state.bills)
});

const mapDispatchToProps = (dispatch, props) => ({
    startEditPayOff: (id, payoff) => dispatch(startEditPayOff(id, payoff)),
    startRemovePayOff: (data) => dispatch(startRemovePayOff(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPayOffPage);