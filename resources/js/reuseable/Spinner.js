import React from "react";
import {MDB} from 'mdbreact';
import "./Reuseable.css";





const SpinnerPage = () => {
    return (
        <div className="loader-container">
            <div className="spinner-border spinner-border" role="status">
                <span className="sr-only loader">Loading...</span>
            </div>
        </div>
    );
}

export default SpinnerPage;
