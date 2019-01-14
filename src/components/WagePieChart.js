import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import wagesTotal from '../selectors/wages-total';
import { payoffTotal } from '../selectors/payoff-total';
import { saveforTotal } from '../selectors/savefor-total';
import { billTotal } from '../selectors/bill-total';
import DonutChart from 'react-donut-chart';

export const WagePieChart = ({ wagesTotal, payoffTotal, saveforTotal, billTotal }) => {
    const remainingWage = wagesTotal - saveforTotal - payoffTotal - billTotal;
    const wageData = [
        { label: 'Pay Off', value: payoffTotal },
        { label: 'Save For', value: saveforTotal },
        { label: 'Bills', value: billTotal },
        { label: 'Remaining Wage', value: remainingWage, isEmpty: true }
    ];
    if (wagesTotal < 1) {
        return (
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Add Wage To Begin</h1>
                </div>
            </div>
        )
    } else {
        return (
            <div className="content-container">
                <div className="summary-container">
                    <div className="summary-element">
                        <DonutChart
                            data={wageData}
                            strokeColor={'#ffffff'}
                            height={350}
                            width={350}
                            colors={['#5da2d5', '#f3d250', '#f78888']}
                            emptyColor={'#5dd58f'}
                            emptyOffset={0.08}
                            formatValues={(values, total) => `${numeral(values).format('$0,0')} / ${(values / total * 100).toFixed(0)}%`}
                            innerRadius={0.5}
                            outerRadius={0.8}
                            selectedOffset={0.08}
                            legend={false}
                            clickToggle={false}
                        />
                    </div>
                    <div className="summary-element">
                        <table className="summary-wage">
                            <tbody>
                                <tr>
                                    <td scope="column" width='300'>Monthly Net Wage</td>
                                    <td scope="column" width='300' align='right'>{numeral(wagesTotal).format('$0,0')}</td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="summary-payoff">
                            <tbody>
                                <tr>
                                    <td scope="column" width='300'>Pay Off Goals</td>
                                    <td scope="column" width='300' align='right'>{numeral(payoffTotal).format('$0,0')}</td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="summary-savefor">
                            <tbody>
                                <tr>
                                    <td scope="column" width='300'>Save For Goals</td>
                                    <td scope="column" width='300' align='right'>{numeral(saveforTotal).format('$0,0')}</td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="summary-bill">
                            <tbody>
                                <tr>
                                    <td scope="column" width='300'>Bills</td>
                                    <td scope="column" width='300' align='right'>{numeral(billTotal).format('$0,0')}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        payoffTotal: payoffTotal(state.payoffs),
        saveforTotal: saveforTotal(state.savefors),
        billTotal: billTotal(state.bills),
        wagesTotal: wagesTotal(state.wages)
    };
};

export default connect(mapStateToProps)(WagePieChart);