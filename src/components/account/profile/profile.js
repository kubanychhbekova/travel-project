import React, {useEffect, useState} from 'react';
import {AiOutlineCamera} from "react-icons/ai";
import {useDispatch, useSelector} from "react-redux";
import {handleImage, handleHasImage, updateUser} from "../../../store/registerSlice";
import axios from "axios";


const Profile = () => {
    const {saveImage, user, firstLetter, hasImage, isAuth} = useSelector(s => s.user)
    const [data, setData] = useState({})
    const [name, setName] = useState(user.first_name)
    const [lastName, setLastName] = useState(user.last_name)
    const [emails, setEmails] = useState(user.email)
    const [birthDay, setBirthDay] = useState(user.date_of_birth)
    const [confirm, setConfirm] = useState("")
    const [passwords, setPasswords] = useState("")
    const [tel, setTel] = useState(user.phone_number)
    const dispatch = useDispatch()
    const [modal,setModal]=useState(false)
    const[tokenE,setTokenE]=useState("")
    const[tokenP,setTokenP]=useState("")

    const changeData = async (accessToken) => {
        try {
            const upDateData = {
                "id":user.id,
                "first_name": name,
                "last_name": lastName,
                "email": emails,
                "username": name,
                "password": passwords,
                "phone_number": tel,
                "date_of_birth": birthDay
            }
            const response = await axios.patch(`http://34.207.195.167/api/v1/accounts/users/${user.id}/`,
                upDateData, {
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': `Bearer ${accessToken}`
        }
                })
            dispatch(updateUser(upDateData))
            console.log("Данные успешно обновлены:", response.data);
        } catch
            (error) {

            console.error("Ошибка при выполнении запроса:", error);
        }

    }
const getToken= async ()=>{
      try{
          const res=await axios.post("http://34.207.195.167/api/v1/token/api/token/",{
              email:tokenE,
              password:tokenP
          })
          const accessToken = res.data.access;
          const refreshToken = res.data.refresh;
          changeData(accessToken)
          console.log("token",res.data)
      }catch (error){
          console.error('Ошибка при выполнении запроса:', error);      }
}
    const handleHasImg = () => {
        if (isAuth) {
            const hasImage = !!saveImage
            dispatch(handleHasImage(hasImage))
        }
    }
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
    useEffect(() => {
        const storedImage = localStorage.getItem('saveImage');
        if (storedImage) {
            dispatch(handleImage(storedImage));
        }

    }, [dispatch]);

    useEffect(() => {
        handleHasImg()
        localStorage.setItem("hasImage", JSON.stringify(!!saveImage))
    }, [dispatch])
    const handleImageChange = (e) => {
        if (isAuth) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    dispatch(handleImage(reader.result));
                    localStorage.setItem('saveImage', reader.result);
                };
                reader.readAsDataURL(file);
            }
        }
    };
    return (
        <div className="profile">
            <div className="profile--top">
                <p className="profile--top__edit">Edit Cover Photo</p>
                <div className="profile--top__user">
                    <div className="profile--top__user--img">
                        <input type="file" onChange={handleImageChange}/>

                        {hasImage ? <img src={saveImage} alt=""/>
                            :
                            <div><p>{firstLetter}</p></div>

                        }

                        <AiOutlineCamera className="icon"/>
                    </div>
                    <div className="profile--top__user--title">
                        <h1>{data.first_name} {data.last_name}</h1>
                        <p>Moscow, Rossia</p>
                    </div>
                </div>

            </div>
            <div className="profile--modal" style={{
                display:modal ? "block" :"none"
            }}>
                <div className="profile--modal__div">
                    <h3>Do you want change your data?</h3>
                    <input type="email"
                           placeholder="Your email"
                           onChange={(e)=>{
                               setTokenE(e.target.value)
                           }}/>
                    <input type="text"
                           placeholder="Your email password"
                           onChange={(e)=>{
                               setTokenP(e.target.value)
                           }}
                    />
                   <div className="profile--modal__div--btn">
                       <button onClick={()=>{
                           setModal(false)
                       }}>no</button>
                       <button onClick={()=>{
                           getToken()
                           setModal(false)
                       }}>yes</button>
                   </div>
                </div>
            </div>
            <div className="profile--card">
                <div>
                    <h1>Personal information</h1>
                    <div className="profile--card__inputs">
                        <input type="email" placeholder="Your E-mail"
                               value={emails}
                               onChange={(e) => {
                                   setEmails(e.target.value)
                               }}

                        />
                        <input type={"password"} placeholder="Password"
                               value={passwords}
                               onChange={(e) => {
                                   setPasswords(e.target.value)
                               }}
                        />
                        <input type={"password"} placeholder="Confirm password"
                        />


                    </div>
                    <div className="profile--card__data">
                        <div>
                            <label>
                                <p>Name <span>*</span></p>
                                <input type="text" value={name}
                                       onChange={(e) => {
                                           setName(e.target.value)
                                       }}/>

                            </label>
                        </div>
                        <div>

                            <label>

                                <p>Surname <span>*</span></p>
                                <input
                                    type="text"
                                    value={lastName} onChange={(e) => {
                                    setLastName(e.target.value)
                                }}/>
                            </label>
                        </div>
                        <div>
                            <label>

                                <p>Phone number <span>*</span></p>
                                <input type={"tel"}
                                       placeholder="+996"
                                       value={tel}
                                       onChange={(e) => {
                                           setTel(e.target.value)
                                       }}
                                />
                            </label>
                        </div>
                        <div>

                            <label>

                                <p>Birth date <span>*</span></p>
                                <input
                                    placeholder="yyyy-mm-dd"
                                    value={birthDay}
                                    onChange={(e) => {
                                        setBirthDay(e.target.value)
                                    }}/>
                            </label>

                        </div>
                    </div>

                    <button onClick={()=>{
                        setModal(!modal)
                    }}>Save changes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;