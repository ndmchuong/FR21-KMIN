import { dataFeature } from "../data/data"

export const Feature = () => {
    return (
        <div className="feature">
            <h1 className="feature-title">Những điều thú vị khi đến với DC Coffee</h1>
            <div className="container-card-feature">
                {dataFeature.map((item) => 
                    <div className="card-feature">
                        <h3>{item.title}</h3>
                        <img src={item.urlImg} alt="" />
                        <p>{item.desc}</p>
                    </div>
                )}
            </div>
        </div>
    )
}