import React from 'react';

const Header = () => {
    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <div className="header--logo"></div>
                    <div className="header--center">
                        <h4>Home</h4>
                        <h4>Regions</h4>
                        <h4>Culture</h4>
                        <h4>Gallery</h4>
                        <h4>Routes</h4>

                    </div>
                    <div className="header--right">
                        <select name="language" id="">
                            <option value="en">English</option>
                            <option value="ru">Russian</option>
                            <option value="ch">Chinese</option>
                            <option value="arab">Arabic</option>
                        </select>
                        <div className="header--right__log">
                            <button>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;