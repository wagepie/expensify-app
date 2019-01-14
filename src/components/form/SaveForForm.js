import React from 'react';
import 'react-dates/initialize';
import CurrencyInput from 'react-currency-input';
import moment from 'moment';
import numeral from 'numeral';


export default class SaveForForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: props.savefor ? props.savefor.type : 'Save For',
            description: props.savefor ? props.savefor.description : props.description,
            savegoal: props.savefor ? props.savefor.savegoal : 0,
            savedtodate: props.savefor ? props.savefor.savedtodate : 0,
            payment: props.savefor ? props.savefor.payment : 0,
            apr: props.savefor ? props.savefor.apr : 0,
            enddate: props.savefor ? props.savefor.enddate : 0,
            error: ''
        };
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };
    onSavegoalChange = (e, maskedvalue) => {
        this.setState(() => ({ savegoal: maskedvalue }));
    };
    onSavedtodateChange = (e, maskedvalue) => {
        this.setState(() => ({ savedtodate: maskedvalue }));
    };
    onPaymentChange = (e, maskedvalue) => {
        this.setState(() => ({ payment: maskedvalue }));
    };
    onAprChange = (e) => {
        const apr = e.target.value;
        this.setState(() => ({ apr }));
    };
    onClick = (e) => {
        e.preventDefault();
        if (!this.state.type || !this.state.description || !this.state.savegoal || !this.state.payment ) {
            const errorMessage = "Please provide the information below:";
            this.setState(() => ({ error: errorMessage }));
        } else {
            this.setState(() => ({ error: '' }));
            let savingmonths = 0;
            let saved = this.state.savedtodate;
            while (saved < this.state.savegoal) {
                savingmonths++;
                saved = saved + this.state.payment + (saved * this.state.apr / 100 / 12);
            }
            this.props.onClick({
                type: this.state.type,
                description: this.state.description,
                savegoal: parseFloat(this.state.savegoal, 10),
                savedtodate: parseFloat(this.state.savedtodate, 10),
                payment: parseFloat(this.state.payment, 10),
                apr: parseFloat(this.state.apr, 10),
                enddate: moment().add(savingmonths, 'months').format('MMM YYYY')
            });
        }
    };
    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.type || !this.state.description || !this.state.savegoal || !this.state.payment ) {
            const errorMessage = "Please provide the information below:";
            this.setState(() => ({ error: errorMessage }));
        } else {
            this.setState(() => ({ error: '' }));
            let savingmonths = 0;
            let saved = this.state.savedtodate;
            while (saved < this.state.savegoal) {
                savingmonths++;
                saved = saved + this.state.payment + (saved * this.state.apr / 100 / 12);
            }
            this.props.onSubmit({
                type: this.state.type,
                description: this.state.description,
                savegoal: parseFloat(this.state.savegoal, 10),
                savedtodate: parseFloat(this.state.savedtodate, 10),
                payment: parseFloat(this.state.payment, 10),
                apr: parseFloat(this.state.apr, 10),
                enddate: moment().add(savingmonths, 'months').format('MMM YYYY')
            });
        }
    };
    render() {
        return (
            <div>
                <form className="form">
                    {this.state.error && <p className="form__error">{this.state.error}</p>}
                    <div className="form__container">
                        <div className="form__label">Save For</div>
                        <input
                            type="text"
                            placeholder="Description"
                            className="text-input"
                            value={this.state.description}
                            onChange={this.onDescriptionChange}
                        />
                    </div>
                    <div className="form__container">
                        <div className="form__label">Saving Goal</div>
                        <CurrencyInput
                            prefix="$"
                            precision="0"
                            className="text-input"
                            value={this.state.savegoal}
                            onChange={this.onSavegoalChange}
                        />
                    </div>
                    <div className="form__container">
                        <div className="form__label">Saved So Far</div>
                        <CurrencyInput
                            prefix="$"
                            precision="0"
                            className="text-input"
                            value={this.state.savedtodate}
                            onChange={this.onSavedtodateChange}
                        />
                    </div>
                    <div className="form__container">
                        <div className="form__label">Monthly Saving</div>
                        <CurrencyInput
                            prefix="$"
                            precision="0"
                            className="text-input"
                            value={this.state.payment}
                            onChange={this.onPaymentChange}
                        />
                    </div>
                    <div className="form__container">
                        <div className="form__label">APR</div>
                        <input
                            type="number"
                            placeholder="0"
                            className="text-input"
                            value={this.state.apr}
                            onChange={this.onAprChange}
                        />
                    </div>
                    <div className="form__container">
                        <button className="savefor--calculate" onClick={this.onClick}>Calculate</button>
                        <button className="savefor--calculate" onClick={this.onSubmit}>Save</button>
                    </div>
                </form>
            </div>
        )
    }
}