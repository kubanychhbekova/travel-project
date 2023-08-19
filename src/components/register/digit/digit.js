import React from 'react';

const Digit = () => {
    return (
        <div id="digit">
            <div className="container">
                <div className="digit">
                    <div className="digit--card">
                        <h2>Enter 4 digit code</h2>
                        <p>A four-digit code should have come to your email address that you indicated.</p>
                        <div className="digit--card__number">
                            <input type="text"/>
                            <input type="text"/>
                            <input type="text"/>
                            <input type="text"/>
                        </div>
                        <div className="digit--card__button">
                            <button>Confirm</button>
                            <button>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Digit;