export const MenuItem = (props) => {
    return (
        <div className="menu-item">
            <img src={props.info.img} alt="" />
            <h4>{props.info.name}</h4>
        </div>
    )
}