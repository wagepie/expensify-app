import React from 'react';
import { connect } from 'react-redux';
import wagesTotal from '../../selectors/wages-total';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

export const WageList = (props) => (
    <div className="content-container">
        <div className="wagelist-container">
            <div className="wagelist-header">
                <table>
                    <tbody>
                        <tr>
                            <td scope="column" width='300'>Occupation</td>
                            <td scope="column" width='300' align='right'>Wage ($)</td>
                            <td scope="column" width='300' align='right'>Wage (%)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="wagelist-body">
                {
                    props.wages.length === 0 ? (
                        <div className="list-item list-item--message">
                            <span>No Wages</span>
                        </div>
                    ) : (
                            props.wages.map((wage) => {
                                const total = props.wagesTotal;
                                return (
                                    <Link className="wagelist-item" key={wage.id} to={`/editwage/${wage.id}`}>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td scope="column" width='300'>{wage.occupation}</td>
                                                    <td scope="column" width='300' align='right'>{numeral(wage.netwage).format('$0,0')}</td>
                                                    <td scope="column" width='300' align='right'>{numeral(wage.netwage / total).format('0%,0')}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </Link>
                                );
                            })
                        )
                }
            </div>
            <div className="wagelist-header">
                <table>
                    <tbody>
                        <tr>
                            <td scope="column" width='300'>Total</td>
                            <td scope="column" width='300' align='right'>{numeral(props.wagesTotal).format('$0,0')}</td>
                            <td scope="column" width='300' align='right'>{numeral(props.wagesTotal / props.wagesTotal).format('0%,0')}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Link className="wage--add" to="/createwage">Add Wage</Link>
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        wages: state.wages,
        wagesTotal: wagesTotal(state.wages)
    };
};

export default connect(mapStateToProps)(WageList);