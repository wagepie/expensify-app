import React from 'react';
import { Link } from 'react-router-dom';

const BillType = () => (
    <div>
        <div className="billpage-header">
            <div className="content-container">
                <h1 className="page-header__title">Pay My Bills</h1>
            </div>
        </div>
        <div className="content-container">
            <div className="summary-container">
                <Link className="bill-icon-container" to="/billaddfood">
                    <div>Rent</div>
                    <i className="fas fa-home fa-5x"></i>
                </Link>
                <Link className="bill-icon-container" to="/billaddfood">
                    <div>Food</div>
                    <i className="fas fa-utensils fa-5x"></i>
                </Link>
                <Link className="bill-icon-container" to="/billaddfood">
                    <div>Utilities</div>
                    <i className="far fa-lightbulb fa-5x"></i>
                </Link>
                <Link className="bill-icon-container" to="/billaddfood">
                    <div>Transportation</div>
                    <i className="fas fa-car fa-5x"></i>
                </Link>
                <Link className="bill-icon-container" to="/billaddfood">
                    <div>Shopping</div>
                    <i className="fas fa-shopping-cart fa-5x"></i>
                </Link>
                <Link className="bill-icon-container" to="/billaddfood">
                    <div>Other</div>
                    <i className="fas fa-file-invoice-dollar fa-5x"></i>
                </Link>
            </div>
        </div>
    </div>
);

export default BillType;