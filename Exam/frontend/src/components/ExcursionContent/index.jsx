import "./style.scss"
import { GiTwoCoins } from "react-icons/gi";
import { GoClockFill } from "react-icons/go";


function Details() {
    return (
        <div className="main-div">
            <div className="grid-div">
                <div>
                    <h2>Описание эксруксии</h2>
                    <br />
                    <p>
                        Вас ждет путешествие по "Золотому Кольцу Абхазии" на Мерседес Спринтер (20 мест). По маршруту вас будет сопровождать профессиональный гид. Посадка на экскурсию осуществляется с вашего отеля или ближайшей автобусной остановки. Пересечение границы без пересадок.
                    </p>
                </div>
                <div className="price" >

                    <div>
                        <h4><GiTwoCoins />1 618 ₽</h4>
                        <p>Взрослый билет</p>
                    </div>
                </div>
                <div className="price">
                    <div>
                        <h4><GiTwoCoins /> 1 412 ₽</h4>
                        <p>Детский билет</p>
                    </div>
                </div>
                <div className="price">
                    <div>
                        <h4><GoClockFill /> 12 Часов</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;