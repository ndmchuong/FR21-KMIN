export const OptionFilter = (props) => {
    return (
        <div>
            {props.listBrand.map((item) => 
            <button>{item}</button>)}
            <span>{props.status}</span>
        </div>
    )
}