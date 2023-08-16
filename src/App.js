import "./App.scss";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Culture from "./components/Culture";
import GamesPage from "./components/GamesPage";
import NationalPage from "./components/NationalPage";
import HandsPage from "./components/HandsPage";
import Currency from "./components/Currency";
import InstrumentPage from "./components/InstrumentPage";
import Kitchen from "./components/KitchenPage";
import {Route, Routes} from "react-router-dom";
import Hero from "./components/Hero";
import IssytKyl from "./components/regions/issykKul/issytKyl";
import CholponAta from "./components/regions/issykKul/cholponAta/cholponAta";
import Routs from './components/routes/routes';
import Gallery from "./components/gallery/gallery";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={"/"} element={<Hero/>}/>
                <Route path={"/culture"} element={<Culture/>}/>
                <Route path={"/issykKul"} element={<IssytKyl/>}/>
                <Route path={"/issykKul/cholponAta"} element={<CholponAta/>}/>
                <Route path={'/routes'} element={<Routs/>}/>
                <Route path="/games" element={<GamesPage/>}/>
                <Route path="/national" element={<NationalPage/>}/>
                <Route path="/hand" element={<HandsPage/>}/>
                <Route path="/currency" element={<Currency/>}/>
                <Route path="/instrument" element={<InstrumentPage/>}/>
                <Route path="/kitchen" element={<Kitchen/>}/>
                <Route path="/gallery" element={<Gallery/>}/>
            </Routes>
            <Footer/>
        </div>
    );

}
    export default App;
