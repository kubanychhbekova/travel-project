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
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      <Culture />
      <Routes>
        <Route path="/games" element={<GamesPage />} />
        <Route path="/national" element={<NationalPage />} />
        <Route path="/hand" element={<HandsPage />} />
        <Route path="/currency" element={<Currency />} />
        <Route path="/instrument" element={<InstrumentPage />} />
        <Route path="/kitchen" element={<Kitchen />} />
      </Routes>
    </div>
  );
import Hero from './components/Hero';
import {Route, Routes} from "react-router-dom";
import IssytKyl from "./components/regions/issykKul/issytKyl";
import CholponAta from "./components/regions/issykKul/cholponAta/cholponAta";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={"/"} element={<Hero/>}/>
                <Route path={"/issykKul"} element={<IssytKyl/>}/>
                <Route path={"/issykKul/cholponAta"} element={<CholponAta/>}/>
            </Routes>
            <Footer/>
        </div>
    );

}

export default App;
