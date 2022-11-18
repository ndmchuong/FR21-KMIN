import { useState } from "react";
import { smartphone } from "../data/dataSmartphone";
import { FilterBar } from "./FilterBar";
import { Header } from "./Header";
import { ListProducts } from "./ListProducts";
export const ContainerApp = () => {
    const [listSmartphone, setListSmartphone] = useState(smartphone);
    return (
        <>
            <Header/>
            <FilterBar/>
            <ListProducts products={listSmartphone}/>
        </>
    )
}
// const filterRam = (ram) => {
    //     const phone = smartphone.map((value) => {
    //         const condition = value.version.filter((value) => ram === value.ram);
    //         if (condition.length > 0) {
    //             return value
    //         }
    //         else {
    //             return false
    //         }
    //     });
    //     console.log(phone)
    //}