import { dataServices } from "../data/data"
import { ServiceItem } from "./ServiceItem";


export const ServicesContainer = (props) => {
    const data = dataServices;
    return(
        <section className="services">
            <div className="services-title-description">
                <h2 className="services-title">{data.title}</h2>
                <p className="services-description">{data.desc}</p>
            </div>
            <div className="container-our-services">
                { dataServices.serviceItem.map((item, index) => 
                    <ServiceItem dataItem={item} index={index + 1}/>
                )}
            </div>
        </section>
    )
}