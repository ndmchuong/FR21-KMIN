export const FunctionComponent = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.children}</p>
        </div>
    )
}