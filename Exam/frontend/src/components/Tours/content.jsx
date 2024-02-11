import contentData from "../../db/tour.json"
import ContentItem from "./contendItems.jsx"
import "./style.scss";

function Values() {
    return (
        <div className="values-content">
            {
                contentData && contentData.map((item, index) => {
                    return (
                        <ContentItem
                            key={index}
                            title={item.title}
                            about={item.about}
                            time={item.time}
                            price={"1 412 ₽"}
                            childrenPrice={item.childPrice}
                            subtitle={item.subtitle}
                        />
                    )
                })
            }
        </div>
    );
}

export default Values;