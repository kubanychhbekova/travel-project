import "./App.scss";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Culture from "./components/Culture";
import GamesPage from "./components/GamesPage";
import NationalPage from "./components/NationalPage";
import HandsPage from "./components/HandsPage";
import InstrumentPage from "./components/InstrumentPage";
import Kitchen from "./components/KitchenPage";
import {Route, Routes} from "react-router-dom";
import Hero from "./components/Hero";
import IssytKyl from "./components/regions/issykKul/issytKyl";
import CholponAta from "./components/regions/issykKul/cholponAta/cholponAta";
import Routs from './components/routes/routes';
import Gallery from "./components/gallery/gallery";
import SignUp from "./components/register/signup";
import Login from "./components/register/login";
import Forgot from "./components/register/forgot/forgot";
import Digit from "./components/register/digit/digit";
import CultureDetails from "./components/CultureDetails";

import Account from "./components/account";
 

function App() {
    return (
        <div className="App">
            <Header/>

            <Routes>
                <Route path={"/"} element={<Hero/>}/>
                <Route path={"/culture"} element={<Culture/>}/>
                <Route path={"/regions/:id"} element={<IssytKyl/>}/>
                <Route path={"/regions/:id/:name"} element={<CholponAta/>}/>

                <Route path={'/routes'} element={<Routs/>}/>
                {/* <Route path="/games" element={<GamesPage/>}/> */}
                <Route path="/national" element={<NationalPage/>}/>
                <Route path="/hand" element={<HandsPage/>}/>
                <Route path="/instrument" element={<InstrumentPage/>}/>
                <Route path="/kitchen" element={<Kitchen/>}/>
                <Route path="/gallery" element={<Gallery/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/forgot" element={<Forgot/>}/>
                <Route path="/digit" element={<Digit/>}/>
                <Route path="/cultureDetail/:cultureId" element={<CultureDetails/>}/>
                <Route path="/account" element={<Account/>}/>
            </Routes>
            <Footer/>
        </div>
    );

}
    export default App;
