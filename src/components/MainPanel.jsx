import React, { useState } from "react";
import Hotels from "./Hotels.jsx";
import SearchBar from "./SearchBar.jsx";

function MainPanel() { 

    let [hotelList, setHotelList] = useState([
        {id: 1, type: "Стандарт", square: 25, cost: "5 000"},
        {id: 2, type: "Премиум", square: 45, cost: "15 000"},
        {id: 3, type: "Люкс", square: 55, cost: "25 000"},
    ]);

    return (
        <div className="mainPanel container">

            <div className="nameCompany">
                <h1>Omega</h1>
                <div>
                    <span className="material-symbols-outlined star">grade</span>
                    <span className="material-symbols-outlined star">grade</span>
                    <span className="material-symbols-outlined star">grade</span>
                </div>
            </div>

            <div className="orderPanel">

                {/* Верхняя панель сортировки */}
                <div className="sortOrderPanel">
                    <h3 className="nameBlock">Поиск по номера в отеле:</h3>
                    <SearchBar />
                </div>

                {/* Панель выбора  */}
                <div className="orderShowPanel">

                    <div className="select_panel_order">
                        <p className="b">Выбор</p>
                        <a className="a_panel_order" href="#1">По номерам</a>
                        <a className="a_panel_order" href="#2">По тарифам</a>
                    </div>

                    
                    {/* Блок с отелями */}
                    <div className="order_show_content">
                        {hotelList.map(h => 
                            <Hotels hotel={h} key={h.id}/>)
                        }

                    </div>
                </div>

            </div>

        </div>
    );

} export default MainPanel;