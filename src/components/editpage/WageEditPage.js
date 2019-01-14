import React from 'react';
import { connect } from 'react-redux';
import WageForm from '../form/WageForm';
import { startRemoveWage, startEditWage } from '../../actions/wages';
import numeral from 'numeral';
import wagesTotal from '../../selectors/wages-total';


export class EditWagePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            netwage: this.props.wage.netwage,
            hourlywage: this.props.wage.hourlywage,
            error: ''
        };
    }
    onSubmit = (wage) => {
        this.props.startEditWage(this.props.wage.id, wage);
        this.props.history.push('/');
    };
    onClick = (wage) => {
        this.setState(() => ({
            netwage: wage.netwage,
            hourlywage: wage.hourlywage,
            error: ''
        }));
    };
    onRemove = () => {
        this.props.startRemoveWage({ id: this.props.wage.id });
        this.props.history.push('/');
    };
    render() {
        return (
            <div className="content-container">
                <div className="summary-container">
                    <div className="wage-element">
                        <div className="wage-header">Wage Information</div>
                        <WageForm
                            wage={this.props.wage}
                            onClick={this.onClick}
                            onSubmit={this.onSubmit}
                        />
                        <div className="form__container">
                            <button className="button--remove" onClick={this.onRemove}>Delete</button>
                        </div>
                    </div>
                    <div className="wage-element">
                        <div className="wage-header">Net Wage Summary</div>
                        <div className="calc-container">
                            <div className="calc-number">{numeral(this.state.netwage).format('$0,0')}</div>
                            <div className="calc-text">a Month</div>
                        </div>
                        <div className="calc-container">
                            <div className="calc-number">{this.props.wagesTotal > 0 ? numeral(this.state.netwage / this.props.wagesTotal).format('0%,0.0') : numeral(1).format('0%,0.0')}</div>
                            <div className="calc-text">of Total</div>
                        </div>
                        <div className="calc-container">
                            <div className="calc-number">{numeral(this.state.hourlywage).format('$0,0')}</div>
                            <div className="calc-text">an Hour</div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
};

const mapStateToProps = (state, props) => ({
    wage: state.wages.find((wage) => wage.id === props.match.params.id),
    wagesTotal: wagesTotal(state.wages)
});

const mapDispatchToProps = (dispatch, props) => ({
    startEditWage: (id, wage) => dispatch(startEditWage(id, wage)),
    startRemoveWage: (data) => dispatch(startRemoveWage(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditWagePage);