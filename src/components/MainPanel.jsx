import React, { useState } from "react";
import Hotels from "./Hotels.jsx";
import SearchBar from "./SearchBar.jsx";
import NameCompany from "./NameCompany.jsx";
import Loader from "./Loader.jsx";
import Tarif from "./Tarif.jsx";
import FilterBlock from "./FilterBlock.jsx";

function MainPanel() { 
    const [resource, setResource] = useState([]); 
    const [postLoad, setPostLoad] = useState(false);
    const [subDate, setSubDate] = useState(0); 
    const [amountPeople, setAmountPeople] = useState(1); 
    const [entries, setEntries] = useState([]); 
    const [activeFilter, setActiveFilter] = useState(false);
    const [modeOut, setModeOut] = useState("Номера");
    const [filterSetting, setFilterSetting] = useState({"ot": 0, "do": 150000, "maxBed": 10});
    const changeActiveStatus = (value, setValue) => { 
        value ? setValue(false) : setValue(true); 
    }

    const isResourceEmpty = (modeOut) => {
        
        if (modeOut == "Номера") {
            return resource.length > 0;
        } else { 
            return entries.length > 0;
        }
    }

    const outRoomsInfo = (room) => { 
        return ( 
            <Hotels subDate={subDate} amountPeople={amountPeople} hotel={room} key={room["id_r"]}/> 
        );
    }

    return (
        <div className="main-panel container">

            <NameCompany />

            <div className="order-panel">

                {/* Верхняя панель сортировки */}
                <div className="sort-order-panel">
                    <h3 className="name-block">Поиск по номера в отеле:</h3>
                    <SearchBar setResource={setResource} setPostLoad={setPostLoad} setAmountPeople={setAmountPeople} setSubDate={setSubDate} setEntries={setEntries}/>
                </div>

                {/* Панель выбора  */}
                <div className="order-show-panel">
                    <div className="select-panel-order">
                        <p className="b">Выбор</p>
                        <a className={modeOut == "Номера" ? "selected-mode a-panel-order" : "a-panel-order"} onClick={() => setModeOut("Номера")} href="#1">По номерам</a>
                        <a className={modeOut == "Тариф" ? "selected-mode a-panel-order" : "a-panel-order"} onClick={() => setModeOut("Тариф")} href="#2">По тарифам</a>
                        <img className="icons" onClick={() => changeActiveStatus(activeFilter, setActiveFilter)} src="filter.png"/>
                        <FilterBlock setActive={setActiveFilter} active={activeFilter} filter={filterSetting} setFilterSetting={setFilterSetting}/>
                    </div>

                    {
                       postLoad 
                       ? 
                       <div style={{display: 'flex', justifyContent: 'center'}}><Loader/></div>
                       :
                       <h3 className={isResourceEmpty(modeOut) ? "non-visible" : "active-info"}>Здесь ничего нет</h3>
                    }
                    
                    {/* Блок с отелями */}
                    <div className="order-show-content round-order-content">
                        {
                            modeOut == "Номера"
                            ?
                                resource.map (room => {

                                    if (room["max_bed"] <= filterSetting["maxBed"] && room["price"] >= parseInt(filterSetting["ot"]) && room["price"] <= parseInt(filterSetting["do"])) {
                                        return (
                                            <Hotels subDate={subDate} amountPeople={amountPeople} hotel={room} key={room["id_r"]}/>
                                        )
                                    }

                                }
                                )
                            :
                                entries.map (ent => <Tarif entries={ent} subDate={subDate} amountPeople={amountPeople}/>)
                        }

                    </div>
                </div>

            </div>

        </div>
    );

} export default MainPanel;