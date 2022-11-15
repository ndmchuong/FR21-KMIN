import locationIcon from "../assets/icon/location-icon.png"

export const BranchItem = (props) => {
    const info = props.info;
    return (
        <div className="branch-item">
            <img src={info.img} alt="" className="item-img"/>
            <div className="item-bg"></div>
            <div className="item-info">
                <h3 className="item-name">{info.name}</h3>
                <p className="item-desc">{info.desc}</p>
                <div className="item-location-bar">
                    <img src={locationIcon} alt="" />
                    <span>{info.location}</span>
                </div>
            </div>
            <button>Book Now</button>
        </div>
    )
}