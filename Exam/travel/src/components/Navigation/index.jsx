import './style.scss'
import Logo from "../../assets/icons/logo.png"
import { Link, Outlet } from "react-router-dom"



function Navigation() {
    return (
        <div>
        <div className="outlet">
            <Outlet />
        </div>
        <nav className='nav-wrepper'>
            <div className="logo">
                <h1>
                    <Link to={"/"}>
                        <img src={Logo} alt="AirBallon" />
                    </Link>
                </h1>
            </div>
            <div className="Links">
                <Link to="/">Главная</Link>
                <Link to="/excursions">Экскурсии</Link>
                <Link to="/kabinet">Личный кабинет</Link>
            </div>
        </nav>

       
    </div>
      );
}

export default Navigation;