import { useState } from "react"
import { dataMenu } from "../data/data"
import { MenuItem } from "./MenuItem";

export const Menu = () => {
    const [menuList, setMenuList] = useState(dataMenu);
    return (
        <section className="menu">
            {menuList.map((item) => 
                <MenuItem info={item} />
            )}
        </section>
    )
}