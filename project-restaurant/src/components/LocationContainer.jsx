import { dataLocation } from "../data/data"
import { BranchItem } from "./BranchItem";

export const LocationContainer = (props) => {
    const data = dataLocation;
    return(
        <section className="location">
            <div className="container-location-title-content">
                <h2 className="location-title">{data.title}</h2>
                <p className="location-description">{data.description}</p>
            </div>
            <div className="container-branch">
                { data.cardBranch.map((item) => 
                    <BranchItem key={item.id} info={item}/>
                ) }
            </div>
        </section>
    )
}