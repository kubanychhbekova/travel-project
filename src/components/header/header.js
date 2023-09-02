import React, {useEffect, useRef, useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {firstAuth, getImg, getLetter, IsAuth} from "../../store/registerSlice";
import axios from "axios";


const Header = () => {
    const [modal, setModal] = useState(false)
    const modalRef = useRef(null);
    const [data,setData]=useState({})
    const {isAuth,user,firstLetter,hasImage,saveImage} = useSelector(s => s.user)
    const navigate = useNavigate()
    const dispatch=useDispatch()
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
    const getUser = async () => {
        try{
            const res = await axios.get(  `http://34.207.195.167/api/v1/accounts/users/${user.id}/`)
            setData(res.data)
        }catch (error){
            console.error("Ошибка при выполнении запроса:", error);

        }
    }

useEffect(()=>{
   if(isAuth){
       getUser()
   }
},[])
const changeAuth=()=>{

        dispatch(firstAuth(user.length !==0))
}

    useEffect(()=>{
        changeAuth()
    },[])
    const handleGetLetter=()=>{
        if(isAuth){
            const letter=user.username.split("")[0].toUpperCase()
            dispatch(getLetter(letter))
        }
    }
    useEffect(()=>{
        handleGetLetter()
    },[])
    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <div className="header--logo">
                        {/* <h1>Logo</h1> */}
                    </div>
                    <div className="header--center">
                        <NavLink to={"/"}><h4>Home</h4></NavLink>
                        <h4 onClick={() => {
                            setModal(!modal)
                        }}>Regions</h4>
                        <NavLink to={"/culture"}><h4>Culture</h4></NavLink>
                        <NavLink to={"/gallery"}><h4>Gallery</h4></NavLink>
                        <NavLink to={'/routes'}><h4>Routes</h4></NavLink>
                    </div>

                    <div className="header--modal"
                         onClick={() => {
                             setModal(!modal)
                         }}
                         ref={modalRef}
                         style={{
                             display: modal ? "block" : "none"
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

                            {
                                isAuth ?
                                    <div   className="header--right__log--img" onClick={()=>{
                                    navigate("/account")}
                                    } >
                                        {hasImage ? <img src={saveImage} alt=""/>
                                            :
                                            <div><p>{firstLetter}</p></div>

                                        }
                                    </div>
                                    :
                                    <button onClick={() => {
                                        navigate("signup")

                                    }}
                                    >Sign Up</button>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;