import './App.scss';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import {Route, Routes} from "react-router-dom";
import IssytKyl from "./components/regions/issytKyl";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={"/issykKul"} element={<IssytKyl/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
