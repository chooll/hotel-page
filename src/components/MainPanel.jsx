import React, { useState } from "react";
import Hotels from "./Hotels.jsx";
import SearchBar from "./SearchBar.jsx";
import NameCompany from "./NameCompany.jsx";
import Loader from "./Loader.jsx";

function MainPanel() { 
    const [resource, setResource] = useState([]); 
    const [postLoad, setPostLoad] = useState(false);
    const [subDate, setSubDate] = useState(0); 
    const [amountPeople, setAmountPeople] = useState(1); 

    const isResourceEmpty = () => {
        return resource.length > 0;
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
                    <SearchBar setResource={setResource} setPostLoad={setPostLoad} setAmountPeople={setAmountPeople} setSubDate={setSubDate}/>
                </div>

                {/* Панель выбора  */}
                <div className="order-show-panel">
                    <div className="select-panel-order">
                        <p className="b">Выбор</p>
                        <a className="a-panel-order" href="#1">По номерам</a>
                        <a className="a-panel-order" href="#2">По тарифам</a>
                    </div>

                    {
                       postLoad 
                       ? 
                       <div style={{display: 'flex', justifyContent: 'center'}}><Loader/></div>
                       :
                       <h3 className={isResourceEmpty() ? "non-visible" : "active-info"}>Здесь ничего нет</h3>
                    }
                    
                    {/* Блок с отелями */}
                    <div className="order-show-content round-order-content">
                        {
                            resource.map (room => outRoomsInfo(room))
                        }

                    </div>
                </div>

            </div>

        </div>
    );

} export default MainPanel;