import Image from "../../assets/images/Rectangle 40.png"
import Line from "../../assets/images/Line.png"
import { FaRegHeart } from "react-icons/fa"
import { Link } from "react-router-dom";
import { GiTwoCoins } from "react-icons/gi";
import { GoClockFill } from "react-icons/go";
function ContentItem(props) {
    return (
        <div className="value-item">
            <img id="left" src={Image} alt="image" />
            <div className='value-info'>
                <h5>{props.title}</h5>
                <h2>{props.about}</h2>
                <br />
                <h3><GiTwoCoins />
                    {props.price}
                </h3>
                <h3><GiTwoCoins />
                    1 412 ₽
                </h3>
                <h3 id="last"><GoClockFill />{props.time}</h3>
                <br />
                <span>Взрослый билет</span>
                <span>Детский билет</span>

                <br />
                <img src={Line} alt="line" id="p" />
                <p>{props.subtitle}</p>
                <Link><button className="blue-btn">Подробнее</button></Link>
                <span className="like">
                    <FaRegHeart width={100} height={100} />
                </span>
            </div>
        </div>
    );
}

export default ContentItem;