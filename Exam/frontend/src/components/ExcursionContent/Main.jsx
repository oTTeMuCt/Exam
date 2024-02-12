import "./style.scss"
import { Link } from "react-router-dom"
import Details from "./index.jsx";


function Content() {
    return (
        <div className="main-wrapper">
            <div className="content-wrapper">
                <div className="content">
                    <h3>Автобусный тур</h3>
                    <h1>ЗОЛОТОЕ КОЛЬЦО АБХАЗИИ (ИЗ АДЛЕРА)</h1>
                    <Link to={'/excursions'}>
                    <button>К другим эксруксиям</button>
                    </Link>
                </div>
            </div>
        <Details />
        </div>

    );
}

export default Content;