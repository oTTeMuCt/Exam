import { useLocation, Route, Routes } from 'react-router-dom'
import Navigation from "./Navigation"
import Excursion from "./Excursion"
import Cabinet from "./Cabinet"
import Main from "./Main"
import NoPage from "./NoPage"
import ExcursionContent from './ExcursionContent/Main.jsx'


function AllComponents(props) {
    const location = useLocation()

    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Navigation />} >
                <Route index element={<Main />} />
                <Route path="/main" element={<Main />} />
                <Route path="/excursions" element={<Excursion/>} />
                <Route path="/cabinet" element={<Cabinet/>} />
                <Route path="*" element={<NoPage />} />
                <Route path="/excursionContent" element={<ExcursionContent/>} />

            </Route>
        </Routes>
    );
}

export default AllComponents;