import { useLocation, Route, Routes } from "react-router-dom";
import Navigation from "./Navigation/index.jsx"
import Cabinet from "./Cabinet"
import Excursions from "./Excursions"
import Main from "./Main"
import Welcom from './Welcom'

function AllComponents(props) {
    const location = useLocation()
    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Navigation />} >
                <Route index element ={<Welcom />} />
                <Route path="/main" element={<Main />} />
                <Route path="/excursions" element={<Excursions />} />
                <Route path="/cabinet" element={<Cabinet />} />
            </Route>
        </Routes>
    );
}

export default AllComponents;