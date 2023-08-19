import React, { useEffect, useRef, useState} from 'react';
import {NavLink} from "react-router-dom";


const Header = () => {
    const [modal, setModal] = useState(false)
    const modalRef = useRef(null);
    

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setModal(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);
   


    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <div className="header--logo">
                    </div>
                    <div className="header--center">
                 <NavLink to={"/"}><h4>Home</h4></NavLink>
                        <h4 onClick={() => {
                            setModal(!modal)
                        }}>Regions</h4>
                      <NavLink to={"/culture"}>  <h4>Culture</h4></NavLink>
                     <NavLink to={"/gallery"}>   <h4>Gallery</h4></NavLink>
                        <h4>Routes</h4>
                    </div>

                    <div className="header--modal"
                         onClick={()=>{setModal(!modal)}}
                         ref={modalRef}
                    style={{
                        display:modal ? "block" : "none"
                    }}>
                        <h2>Chui</h2>
                        <h2>Talas</h2>
                      <NavLink to={"/issykKul"}>
                          <h2>Issyk-Kul</h2></NavLink>
                        <h2>Naryn</h2>
                        <h2>Jalal-Abad</h2>
                        <h2>Osh</h2>
                        <h2>Batken</h2>
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