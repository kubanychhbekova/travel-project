import './App.scss';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
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
