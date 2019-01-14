import React from 'react';
import { connect } from 'react-redux';
import wagesTotal from '../../selectors/wages-total';
import { payoffGoals, payoffTotal } from '../../selectors/payoff-total';
import { Link } from 'react-router-dom';
import numeral from 'numeral';


export const PayOffList = (props) => (
    <div className="content-container">
        <div className="payofflist-container">
            <div className="payofflist-header">
                <table>
                    <tbody>
                        <tr>
                            <td scope="column" width='300'>Pay Off</td>
                            <td scope="column" width='300' align='right'>Amount ($)</td>
                            <td scope="column" width='300' align='right'>Wage (%)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="payofflist-body">
                {
                    props.payoffGoals.length === 0 ? (
                        <div className="list-item list-item--message">
                            <span>Nothing to Pay Off</span>
                        </div>
                    ) : (
                            props.payoffGoals.map((payoff) => {
                                const total = props.wagesTotal;
                                return (
                                    <Link className="payofflist-item" key={payoff.id} to={`/editpayoff/${payoff.id}`}>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td scope="column" width='300'>{payoff.description}</td>
                                                    <td scope="column" width='300' align='right'>{numeral(payoff.payment).format('$0,0')}</td>
                                                    <td scope="column" width='300' align='right'>{numeral(payoff.payment / total).format('0%,0')}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </Link>
                                );
                            })
                        )
                }
            </div>
            <div className="payofflist-header">
                <table>
                    <tbody>
                        <tr>
                            <td scope="column" width='300'>Total</td>
                            <td scope="column" width='300' align='right'>{numeral(props.payoffTotal).format('$0,0')}</td>
                            <td scope="column" width='300' align='right'>{numeral(props.payoffTotal / props.wagesTotal).format('0%,0')}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Link className="payoff--add" to="/payofftype">Add Pay Off</Link>
        </div>
    </div>
);


const mapStateToProps = (state) => {
    return {
        wagesTotal: wagesTotal(state.wages),
        payoffGoals: payoffGoals(state.payoffs),
        payoffTotal: payoffTotal(state.payoffs)
    };
};

export default connect(mapStateToProps)(PayOffList);