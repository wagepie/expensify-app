import React from 'react';
import { connect } from 'react-redux';
import wagesTotal from '../../selectors/wages-total';
import { billGoals, billTotal } from '../../selectors/bill-total';
import { Link } from 'react-router-dom';
import numeral from 'numeral';


export const BillList = (props) => (
    <div className="content-container">
        <div className="billlist-container">
            <div className="billlist-header">
                <table>
                    <tbody>
                        <tr>
                            <td scope="column" width='300'>Bills</td>
                            <td scope="column" width='300' align='right'>Amount ($)</td>
                            <td scope="column" width='300' align='right'>Wage (%)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div>
                {
                    props.billGoals.length === 0 ? (
                        <div className="list-item list-item--message">
                            <span>No Bills</span>
                        </div>
                    ) : (
                            props.billGoals.map((bill) => {
                                const total = props.wagesTotal;
                                return (
                                    <Link className="billlist-item" key={bill.id} to={`/editbill/${bill.id}`}>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td scope="column" width='300'>{bill.description}</td>
                                                    <td scope="column" width='300' align='right'>{numeral(bill.payment).format('$0,0')}</td>
                                                    <td scope="column" width='300' align='right'>{numeral(bill.payment / total).format('0%,0')}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </Link>
                                );
                            })
                        )
                }
            </div>
            <div className="billlist-header">
                <table>
                    <tbody>
                        <tr>
                            <td scope="column" width='300'>Total</td>
                            <td scope="column" width='300' align='right'>{numeral(props.billTotal).format('$0,0')}</td>
                            <td scope="column" width='300' align='right'>{numeral(props.billTotal / props.wagesTotal).format('0%,0')}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Link className="bill--add" to="/billtype">Add Bill</Link>
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        wagesTotal: wagesTotal(state.wages),
        billGoals: billGoals(state.bills),
        billTotal: billTotal(state.bills)
    };
};

export default connect(mapStateToProps)(BillList);