import React from 'react';
import 'react-dates/initialize';
import CurrencyInput from 'react-currency-input';
import moment from 'moment';

export default class BillForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: props.bill ? props.bill.type : 'Bill',
            description: props.bill ? props.bill.description : props.description,
            payment: props.bill ? props.bill.payment : 0,
            error: ''
        };
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };
    onPaymentChange = (e, maskedvalue) => {
        this.setState(() => ({ payment: maskedvalue }));
    };
    onClick = (e) => {
        e.preventDefault();

        if (!this.state.type || !this.state.description || !this.state.payment) {
            const errorMessage = "Please provide the information below";
            this.setState(() => ({ error: errorMessage }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onClick({
                type: this.state.type,
                description: this.state.description,
                payment: parseFloat(this.state.payment, 10)
            });
        }
    };
    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.type || !this.state.description || !this.state.payment) {
            const errorMessage = "Please provide the information below";
            this.setState(() => ({ error: errorMessage }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                type: this.state.type,
                description: this.state.description,
                payment: parseFloat(this.state.payment, 10)
            });
        }
    };
    render() {
        return (
            <div>
                <form className="form">
                    {this.state.error && <p className="form__error">{this.state.error}</p>}
                    <div className="form__container">
                        <div className="form__label">Bill Type</div>
                        <input
                            type="text"
                            placeholder="Description"
                            className="text-input"
                            value={this.state.description}
                            onChange={this.onDescriptionChange}
                        />
                    </div>
                    <div className="form__container">
                        <div className="form__label">Bill Amount</div>
                        <CurrencyInput
                            prefix="$"
                            precision="0"
                            className="text-input"
                            value={this.state.payment}
                            onChange={this.onPaymentChange}
                        />
                    </div>
                    <div className="form__container">
                        <button className="bill--calculate" onClick={this.onClick}>Calculate</button>
                        <button className="bill--calculate" onClick={this.onSubmit}>Save</button>
                    </div>
                </form>
            </div>
        )
    }
}