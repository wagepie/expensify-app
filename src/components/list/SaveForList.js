import React from 'react';
import { connect } from 'react-redux';
import wagesTotal from '../../selectors/wages-total';
import { saveforGoals, saveforTotal } from '../../selectors/savefor-total';
import { Link } from 'react-router-dom';
import numeral from 'numeral';


export const SaveForList = (props) => (
    <div className="content-container">
        <div className="saveforlist-container">
            <div className="saveforlist-header">
                <table>
                    <tbody>
                        <tr>
                            <td scope="column" width='300'>Save For</td>
                            <td scope="column" width='300' align='right'>Amount ($)</td>
                            <td scope="column" width='300' align='right'>Wage (%)</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="saveforlist-body">
                {
                    props.saveforGoals.length === 0 ? (
                        <div className="list-item list-item--message">
                            <span>Nothing to Save For</span>
                        </div>
                    ) : (
                            props.saveforGoals.map((savefor) => {
                                const total = props.wagesTotal;
                                return (
                                    <Link className="saveforlist-item" key={savefor.id} to={`/editsavefor/${savefor.id}`}>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td scope="column" width='300'>{savefor.description}</td>
                                                    <td scope="column" width='300' align='right'>{numeral(savefor.payment).format('$0,0')}</td>
                                                    <td scope="column" width='300' align='right'>{numeral(savefor.payment / total).format('0%,0')}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </Link>
                                );
                            })
                        )
                }
            </div>
            <div className="saveforlist-header">
                <table>
                    <tbody>
                        <tr>
                            <td scope="column" width='300'>Total</td>
                            <td scope="column" width='300' align='right'>{numeral(props.saveforTotal).format('$0,0')}</td>
                            <td scope="column" width='300' align='right'>{numeral(props.saveforTotal / props.wagesTotal).format('0%,0')}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Link className="savefor--add" to="/savefortype">Add Save For</Link>
        </div>
    </div>
);


const mapStateToProps = (state) => {
    return {
        wagesTotal: wagesTotal(state.wages),
        saveforGoals: saveforGoals(state.savefors),
        saveforTotal: saveforTotal(state.savefors)
    };
};

export default connect(mapStateToProps)(SaveForList);