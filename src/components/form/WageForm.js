import React from 'react';
import 'react-dates/initialize';
import CurrencyInput from 'react-currency-input';


export default class WageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            occupation: props.wage ? props.wage.occupation : '',
            location: props.wage ? props.wage.location : '',
            weeksamonth: props.wage ? (props.wage.weeksamonth).toString() : '',
            hoursaweek: props.wage ? (props.wage.hoursaweek).toString() : '',
            hourlywage: props.wage ? (props.wage.hourlywage).toString() : '',
            netwage: props.wage ? (props.wage.netwage).toString() : '',
            error: ''
        };
    }
    onOccupationChange = (e) => {
        const occupation = e.target.value;
        this.setState(() => ({ occupation }));
    };
    onLocationChange = (e) => {
        const location = e.target.value;
        this.setState(() => ({ location }));
    };
    onHoursaweekChange = (e) => {
        const hoursaweek = e.target.value;
        this.setState(() => ({ hoursaweek }));
    };
    onWeeksamonthChange = (e) => {
        const weeksamonth = e.target.value;
        this.setState(() => ({ weeksamonth }));
    };
    onNetwageChange = (e, maskedvalue) => {
        this.setState(() => ({ netwage: maskedvalue }));
        // if (!netwage || netwage.match(/^\d{1,}(\.\d{0,2})?$/)) {
        //     this.setState(() => ({ netwage }));
        // }
    };
    onClick = (e) => {
        e.preventDefault();

        if (!this.state.occupation || !this.state.location || !this.state.weeksamonth || !this.state.hoursaweek || !this.state.netwage || this.state.weeksamonth < 1 || this.state.hoursaweek < 1) {
            const errorMessage = "Please provide the information below:";
            this.setState(() => ({ error: errorMessage }));
        } else {
            this.setState(() => ({ error: '' }));

            let calchourlywage = this.state.netwage / this.state.weeksamonth / this.state.hoursaweek; 

            this.props.onClick({
                occupation: this.state.occupation,
                location: this.state.location,
                hourlywage: parseFloat(calchourlywage, 10),
                weeksamonth: parseFloat(this.state.weeksamonth, 10),
                hoursaweek: parseFloat(this.state.hoursaweek, 10),
                netwage: parseFloat(this.state.netwage, 10)
            });
        }
    };
    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.occupation || !this.state.location || !this.state.weeksamonth || !this.state.hoursaweek || !this.state.netwage || this.state.weeksamonth < 1 || this.state.hoursaweek < 1) {
            const errorMessage = "Please provide the information below:";
            this.setState(() => ({ error: errorMessage }));
        } else {
            this.setState(() => ({ error: '' }));

            let calchourlywage = this.state.netwage / this.state.weeksamonth / this.state.hoursaweek; 

            this.props.onSubmit({
                occupation: this.state.occupation,
                location: this.state.location,
                hourlywage: parseFloat(calchourlywage, 10),
                weeksamonth: parseFloat(this.state.weeksamonth, 10),
                hoursaweek: parseFloat(this.state.hoursaweek, 10),
                netwage: parseFloat(this.state.netwage, 10)
            });
        }
    };
    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                <div className="form__container">
                    <div className="form__label">Monthly Wage (Net of Taxes)</div>
                    <CurrencyInput
                        prefix="$"
                        precision="0"
                        className="text-input"
                        value={this.state.netwage}
                        onChange={this.onNetwageChange}
                    />
                </div>
                <div className="form__container">
                    <div className="form__label">Occupation</div>
                    <input
                        type="text"
                        placeholder="Occupation"
                        className="text-input"
                        value={this.state.occupation}
                        onChange={this.onOccupationChange}
                    />
                </div>
                <div className="form__container">
                    <div className="form__label">Location</div>
                    <input
                        type="text"
                        placeholder="Location"
                        className="text-input"
                        value={this.state.location}
                        onChange={this.onLocationChange}
                    />
                </div>
                <div className="form__container">
                    <div className="form__label">Hours a Week</div>
                    <input
                        type="number"
                        placeholder="Hours a Week"
                        className="text-input"
                        value={this.state.hoursaweek}
                        onChange={this.onHoursaweekChange}
                    />
                </div>
                <div className="form__container">
                    <div className="form__label">Weeks a Month</div>
                    <input
                        type="number"
                        placeholder="Weeks a Month"
                        className="text-input"
                        value={this.state.weeksamonth}
                        onChange={this.onWeeksamonthChange}
                    />
                </div>

                <div className="form__container">
                    <button className="wage--calculate" onClick={this.onClick}>Calculate</button>
                    <button className="wage--calculate" onClick={this.onSubmit}>Save</button>
                </div>
            </form>
        )
    }
}