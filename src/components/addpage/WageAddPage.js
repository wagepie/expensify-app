import React from 'react';
import { connect } from 'react-redux';
import WageForm from '../form/WageForm';
import { startAddWage } from '../../actions/wages';
import wagesTotal from '../../selectors/wages-total';
import numeral from 'numeral';


export class WageAddPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            netwage: 0,
            hourlywage: 0,
            error: ''
        };
    }
    onSubmit = (wage) => {
        this.props.startAddWage(wage);
        this.props.history.push('/');
    };
    onClick = (wage) => {
        this.setState(() => ({
            netwage: wage.netwage,
            hourlywage: wage.hourlywage,
            error: ''
        }));
    };
    render() {
        return (
            <div className="content-container">
                <div className="summary-container">
                    <div className="wage-element">
                        <div className="wage-header">Wage Information</div>
                        <WageForm
                            onClick={this.onClick}
                            onSubmit={this.onSubmit}
                        />
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
    wagesTotal: wagesTotal(state.wages)
});

const mapDispatchToProps = (dispatch) => ({
    startAddWage: (wage) => dispatch(startAddWage(wage))
});

export default connect(mapStateToProps, mapDispatchToProps)(WageAddPage);