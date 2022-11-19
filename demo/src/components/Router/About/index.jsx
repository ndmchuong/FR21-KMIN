import { useContext } from "react"
import { AboutContext } from "../../../context/AboutContext"

export const About = () => {
    const {counter, setCounter} = useContext(AboutContext);
    return (
        <>
            <h1>About</h1>
            <span>{counter}</span>
            <button onClick={() => {
                setCounter(pre => pre + 1)
            }}>+</button>
            <button onClick={() => {
                setCounter(pre => pre - 1)
            }}>-</button>
        </>
    )
}