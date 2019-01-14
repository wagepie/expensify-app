import React from 'react';
import { Link } from 'react-router-dom';

const SaveForType = () => (
    <div>
        <div className="saveforpage-header">
            <div className="content-container">
                <h1 className="page-header__title">Save For My Goals</h1>
            </div>
        </div>
        <div className="content-container">
            <div className="summary-container">
                <Link className="savefor-icon-container" to="/saveforaddcar">
                    <div>House</div>
                    <i className="fas fa-home fa-5x"></i>
                </Link>
                <Link className="savefor-icon-container" to="/saveforaddcar">
                    <div>Vacation</div>
                    <i className="fas fa-map fa-5x"></i>
                </Link>
                <Link className="savefor-icon-container" to="/saveforaddcar">
                    <div>Car</div>
                    <i className="fas fa-car fa-5x"></i>
                </Link>
                <Link className="savefor-icon-container" to="/saveforaddcar">
                    <div>Retirement</div>
                    <i className="fas fa-hand-holding-usd fa-5x"></i>
                </Link>
                <Link className="savefor-icon-container" to="/saveforaddcar">
                    <div>Business</div>
                    <i className="fas fa-briefcase fa-5x"></i>
                </Link>
                <Link className="savefor-icon-container" to="/saveforaddcar">
                    <div>Other</div>
                    <i className="fas fa-piggy-bank fa-5x"></i>
                </Link>
            </div>
        </div>
    </div>
);

export default SaveForType;

// <i className="fas fa-money-bill-wave fa-7x"></i>
// <i className="fas fa-graduation-cap fa-7x"></i>
// <i className="fas fa-home fa-7x"></i>
// <i className="fas fa-car fa-7x"></i>
// <i className="fas fa-heart fa-7x"></i>
// <i className="fas fa-map fa-7x"></i>
// <i className="fas fa-briefcase fa-7x"></i>
// <i className="fas fa-piggy-bank fa-7x"></i>