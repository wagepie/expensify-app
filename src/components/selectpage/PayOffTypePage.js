import React from 'react';
import { Link } from 'react-router-dom';


const PayOffType = () => (
    <div>
        <div className="payoffpage-header">
            <div className="content-container">
                <h1 className="page-header__title">Pay Off My Loans</h1>
            </div>
        </div>
        <div className="content-container">
            <div className="summary-container">
                <Link className="payoff-icon-container" to="/payoffaddcar">
                    <div>Mortgage</div>
                    <i className="fas fa-home fa-5x"></i>
                </Link>
                <Link className="payoff-icon-container" to="/payoffaddcar">
                    <div>Student</div>
                    <i className="fas fa-graduation-cap fa-5x"></i>
                </Link>
                <Link className="payoff-icon-container" to="/payoffaddcar">
                    <div>Credit Card</div>
                    <i className="far fa-credit-card fa-5x"></i>
                </Link>
                <Link className="payoff-icon-container" to="/payoffaddcar">
                    <div>Car</div>
                    <i className="fas fa-car fa-5x"></i>
                </Link>
                <Link className="payoff-icon-container" to="/payoffaddcar">
                    <div>Business</div>
                    <i className="fas fa-briefcase fa-5x"></i>
                </Link>
                <Link className="payoff-icon-container" to="/payoffaddcar">
                    <div>Other</div>
                    <i className="fas fa-money-bill-wave fa-5x"></i>
                </Link>
            </div>
        </div>
    </div>
);

export default PayOffType; 



// <Link className="icon-item" to="/payoffaddcreditcard">
// <i className="far fa-credit-card fa-5x"></i>Credit Card Debt
// </Link>
// <Link className="icon-item" to="/payoffaddstudentloan">
// <i className="fas fa-graduation-cap fa-5x"></i>Student Loan
// </Link>
// <Link className="icon-item" to="/payoffaddmortgage">
// <i className="fas fa-home fa-5x"></i>Mortgage
// </Link>
// <Link className="icon-item" to="/payoffaddother">
// <i className="fas fa-money-bill-wave fa-5x"></i>Other Loans
// </Link>