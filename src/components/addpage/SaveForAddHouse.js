import React from 'react';
import { connect } from 'react-redux';
import SaveForForm from '../form/SaveForForm';
import { startAddSaveFor } from '../../actions/savefor';
import wagesTotal from '../../selectors/wages-total';
import { payoffTotal } from '../../selectors/payoff-total';
import { saveforTotal } from '../../selectors/savefor-total';
import { billTotal } from '../../selectors/bill-total';
import numeral from 'numeral';


export class SaveForAddHouse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            payment: 0,
            enddate: 'Date',
            error: ''
        };
    }
    onSubmit = (savefor) => {
        let remainingWage = this.props.wagesTotal - this.props.payoffTotal - this.props.saveforTotal - this.props.billTotal;
        if (remainingWage < savefor.payment) {
            const errorOver = "This is too much for your current wage";
            this.setState(() => ({ error: errorOver }));
        } else {
            this.props.startAddSaveFor(savefor);
            this.props.history.push('/');
        }
    };
    onClick = (savefor) => {
        let remainingWage = this.props.wagesTotal - this.props.payoffTotal - this.props.saveforTotal - this.props.billTotal;
        if (remainingWage < savefor.payment) {
            const errorOver = "This is too much for your current wage";
            this.setState(() => ({ error: errorOver }));
        } else {
            this.setState(() => ({
                payment: savefor.payment,
                enddate: savefor.enddate,
                error: ''
            }));
        }
    };
    render() {
        return (
            <div className="content-container">
                <div className="summary-container">
                    <div className="savefor-element">
                        <div className="savefor-header">Save For Information</div>
                        <SaveForForm
                            description='New House'
                            onClick={this.onClick}
                            onSubmit={this.onSubmit}
                        />
                    </div>
                    <div className="savefor-element">
                        <div className="savefor-header">Save For Summary</div>
                        <div className="form">
                            {this.state.error && <p className="form__error">{this.state.error}</p>}
                        </div>
                        <div className="calc-container">
                            <div className="calc-number">{numeral(this.state.payment).format('$0,0')}</div>
                            <div className="calc-text">in Monthly Savings</div>
                        </div>
                        <div className="calc-container">
                            <div className="calc-number">{numeral(this.state.payment / this.props.wagesTotal).format('0%,0.0')}</div>
                            <div className="calc-text">of Monthly Wage</div>
                        </div>
                        <div className="calc-container">
                            <div className="calc-text">Save For by</div>
                            <div className="calc-number">{this.state.enddate}</div>
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
    startAddSaveFor: (savefor) => dispatch(startAddSaveFor(savefor)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SaveForAddHouse);