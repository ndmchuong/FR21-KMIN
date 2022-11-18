import { useState } from "react";
import { OptionFilter } from "./OptionFilter";

export const FilterBar = (props) => {
    const listBrand = ["Apple", "Samsung", "Oppo", "Vivo"];
    const [displayOption, setDisplayOption] = useState([
        "brand", "ram", "rom"
    ]);
    const handleDisplayOption = (id) => {
        setDisplayOption(displayOption.map((item, index) => {
            if(index === id) {
                return item = item + "active"; 
            }
            else {
                return item
            }
        }))
    }
    return (
        <div className="filter-bar">
            <div onClick={() => handleDisplayOption("brand")} className="filter-brand">
                <label className="filter-label">Hãng</label>
                <OptionFilter listBrand={listBrand} status={String(displayOption.brand)}/>
            </div>
            <div className="filter-ram">
                <label className="filter-label">RAM</label>
                <div className="option">
                    <button>6GB</button>
                    <button>8GB</button>
                    <button>12GB</button>
                </div>
            </div>
            <div className="filter-rom">
                <label className="filter-label">ROM</label>
                <div className="option">
                    <button>128GB</button>
                    <button>256GB</button>
                    <button>512GB</button>
                </div>
            </div>
        </div>
    )
}