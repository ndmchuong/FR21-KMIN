import PropsTypes from 'prop-types';


export const KminCounter = (props) => {
    return(
        <div className="container-counter">
            <h1>{props.title}</h1>
            <div className="result">
                <button className="btn-previous" onClick={() => props.handleCount()}>Previous</button>
                <span>{props.number}</span>
                <button className="btn-next">Next</button>
            </div>
            <span className="hello"></span>
            <span className="bye"></span>
        </div>
    )
}
KminCounter.propTypes = {
    title: PropsTypes.string.isRequired,
    number: PropsTypes.number.isRequired
}