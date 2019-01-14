import React from 'react';
import 'react-dates/initialize';
import CurrencyInput from 'react-currency-input';
import moment from 'moment';

export default class PayOffForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: props.payoff ? props.payoff.type : 'Pay Off',
            description: props.payoff ? props.payoff.description : props.description,
            principal: props.payoff ? props.payoff.principal : '',
            payment: props.payoff ? props.payoff.payment : '',
            apr: props.payoff ? props.payoff.apr : '',
            loanterm: props.payoff ? props.payoff.loanterm : '',
            startdate: props.payoff ? props.payoff.startdate : '',
            totalinterest: props.payoff ? props.payoff.totalinterest : '',
            enddate: props.payoff ? props.payoff.enddate : '',
            error: ''
        };
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };
    onPrincipalChange = (e, maskedvalue) => {
        this.setState(() => ({ principal: maskedvalue }));
    };
    onAprChange = (e) => {
        const apr = e.target.value;
        this.setState(() => ({ apr }));
    };
    onLoantermChange = (e) => {
        const loanterm = e.target.value;
        this.setState(() => ({ loanterm }));
    };
    onStartdateChange = (e) => {
        const startdate = e.target.value;
        this.setState(() => ({ startdate }));
    };
    onClick = (e) => {
        e.preventDefault();

        if (!this.state.type || !this.state.description || !this.state.principal || !this.state.apr || !this.state.loanterm || !this.state.startdate || this.state.apr < 0|| this.state.loanterm < 0) {
            const errorMessage = "Please provide the information below";
            this.setState(() => ({ error: errorMessage }));
        } else {
            this.setState(() => ({ error: '' }));

            let AmortizeJS = require('amortizejs').Calculator;
            let payoffloan = AmortizeJS.calculate({
                method: 'mortgage',
                apr: this.state.apr,
                balance: this.state.principal,
                loanTerm: this.state.loanterm,
                startDate: this.state.startdate
            });
            this.props.onClick({
                type: this.state.type,
                description: this.state.description,
                principal: parseFloat(this.state.principal, 10),
                payment: parseFloat(payoffloan.periodicPayment, 10),
                apr: parseFloat(this.state.apr, 10),
                loanterm: parseFloat(this.state.loanterm, 10),
                startdate: this.state.startdate,
                totalinterest: parseFloat(payoffloan.totalInterest, 10),
                enddate: moment(payoffloan.endDate).format('MMM YYYY')
            });
        }
    };
    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.type || !this.state.description || !this.state.principal || !this.state.apr || !this.state.loanterm || !this.state.startdate || this.state.apr < 0|| this.state.loanterm < 0) {
            const errorMessage = "Please provide the information below";
            this.setState(() => ({ error: errorMessage }));
        } else {
            this.setState(() => ({ error: '' }));

            let AmortizeJS = require('amortizejs').Calculator;
            let payoffloan = AmortizeJS.calculate({
                method: 'mortgage',
                apr: this.state.apr,
                balance: this.state.principal,
                loanTerm: this.state.loanterm,
                startDate: this.state.startdate
            });
            this.props.onSubmit({
                type: this.state.type,
                description: this.state.description,
                principal: parseFloat(this.state.principal, 10),
                payment: parseFloat(payoffloan.periodicPayment, 10),
                apr: parseFloat(this.state.apr, 10),
                loanterm: parseFloat(this.state.loanterm, 10),
                startdate: this.state.startdate,
                totalinterest: parseFloat(payoffloan.totalInterest, 10),
                enddate: moment(payoffloan.endDate).format('MMM YYYY')
            });
        }
    };
    render() {
        return (
            <div>
                <form className="form">
                    {this.state.error && <p className="form__error">{this.state.error}</p>}
                    <div className="form__container">
                        <div className="form__label">Pay Off</div>
                        <input
                            type="text"
                            placeholder="Description"
                            className="text-input"
                            value={this.state.description}
                            onChange={this.onDescriptionChange}
                        />
                    </div>
                    <div className="form__container">
                        <div className="form__label">Amount</div>
                        <CurrencyInput
                            prefix="$"
                            precision="0"
                            className="text-input"
                            value={this.state.principal}
                            onChange={this.onPrincipalChange}
                        />
                    </div>
                    <div className="form__container">
                        <div className="form__label">APR</div>
                        <input
                            type="number"
                            placeholder="APR"
                            className="text-input"
                            value={this.state.apr}
                            onChange={this.onAprChange}
                        />
                    </div>
                    <div className="form__container">
                        <div className="form__label">Period</div>
                        <input
                            type="number"
                            placeholder="Period (in months)"
                            className="text-input"
                            value={this.state.loanterm}
                            onChange={this.onLoantermChange}
                        />
                    </div>
                    <div className="form__container">
                        <div className="form__label">Issued</div>
                        <input
                            type="date"
                            placeholder="mm-dd-yyyy"
                            className="text-input"
                            value={this.state.startdate}
                            onChange={this.onStartdateChange}
                        />
                    </div>
                    <div className="form__container">
                        <button className="payoff--calculate" onClick={this.onClick}>Calculate</button>
                        <button className="payoff--calculate" onClick={this.onSubmit}>Save</button>
                    </div>
                </form>
            </div>
        )
    }
}