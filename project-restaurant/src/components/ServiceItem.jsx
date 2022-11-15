export const ServiceItem = (props) => {
    const dataItem = props.dataItem;
    const index = props.index;
    return(
        <>
            <div className={`container-service-item-img${index}`}>
                <img className="service-item-img" src={dataItem.img} alt="" />
            </div>
            <div className={`container-service-item-content${index}`}>
                <div className="service-item-content">
                    <h3 className="service-content-title">{dataItem.title}</h3>
                    <h3 className="sup-title">{dataItem.supTitle}</h3>
                    <p className="service-content-desc">{dataItem.content}</p>
                </div>
            </div>
        </>
    )
}