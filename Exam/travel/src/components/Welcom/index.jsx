import './style.scss'
import play1 from "../../assets/icons/play1.png";
import play2 from "../../assets/icons/play2.png";




function First() {
    return ( 
        <div className="wrepper">
            <div className="inner">
                 <div className="slogn">
                <h1 className='h1'>Путешествуй</h1>
                <h3>вместе с</h3>
                <h1 className="second">PERO TRAVEL</h1>
                <button className="excursion">К экскурсиям ➡</button>
            </div>
    <div className="images">
                <img src={play1} alt="play1" />
                <img src={play2} alt="play2" />
            </div>

            </div>

        
            </div>
     );
}

export default First;