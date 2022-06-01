import React, { useState } from "react";
import Hotels from "./Hotels.jsx";
import SearchBar from "./SearchBar.jsx";
import NameCompany from "./NameCompany.jsx";

function MainPanel() { 
    const [resource, setResource] = useState([]); 

    const isResourceEmpty = () => {
        return resource.length > 0;
    }

    const outRoomsInfo = (room) => { 
        return ( 
            <Hotels hotel={room} key={room["id_r"]}/> 
        );
    }

    return (
        <div className="main-panel container">

            <NameCompany />

            <div className="order-panel">

                {/* Верхняя панель сортировки */}
                <div className="sort-order-panel">
                    <h3 className="name-block">Поиск по номера в отеле:</h3>
                    <SearchBar setResource={setResource}/>
                </div>

                {/* Панель выбора  */}
                <div className="order-show-panel">
                    <div className="select-panel-order">
                        <p className="b">Выбор</p>
                        <a className="a-panel-order" href="#1">По номерам</a>
                        <a className="a-panel-order" href="#2">По тарифам</a>
                    </div>

                    
                    {/* Блок с отелями */}
                    <div className="order-show-content round-order-content">
                        {
                            resource.map (room => outRoomsInfo(room))
                        }
                        <h3 className={isResourceEmpty() ? "non-visible" : "active-info"}>Здесь ничего нет</h3>
                    </div>
                </div>

            </div>

        </div>
    );

} export default MainPanel;