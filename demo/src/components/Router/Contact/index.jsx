import { Link } from "react-router-dom"

export const Contact = () => {
    return (
        <>
            <h1>Contact</h1>
            <ul>
                <li>
                    <Link to="/Contact/1">Contact 1</Link>
                </li>
                <li>
                    <Link to="/Contact/2">Contact 2</Link>
                </li>
                <li>
                    <Link to="/Contact/3">Contact 3</Link>
                </li>
            </ul>
        </>
    )
}