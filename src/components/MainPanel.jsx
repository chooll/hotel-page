import React, { useState } from "react";
import Hotels from "./Hotels.jsx";
import SearchBar from "./SearchBar.jsx";

function MainPanel() { 

    let [hotelList, setHotelList] = useState([
        {id: 1, type: "Стандарт", square: 25, cost: "5 000", 
            image1: "https://i.pinimg.com/originals/1e/cb/60/1ecb60097949938d0db94d0695752216.jpg",
        image2: "https://bluebiz-media.azureedge.net/48da09/contentassets/cc4c46c0c048442683523c7f9253b1b6/hotel-room-624x364.jpg"},
        {id: 2, type: "Премиум", square: 45, cost: "15 000", 
            image1: "https://i.pinimg.com/originals/1e/cb/60/1ecb60097949938d0db94d0695752216.jpg",
        image2: "data:image/jpeg;base64,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"},
        {id: 3, type: "Люкс", square: 55, cost: "25 000", 
            image1: "https://i.pinimg.com/originals/1e/cb/60/1ecb60097949938d0db94d0695752216.jpg"},
    ]);

    return (
        <div className="main-panel container">

            <div className="name-company">
                <h1>Omega</h1>
                <div>
                    <span className="material-symbols-outlined star">grade</span>
                    <span className="material-symbols-outlined star">grade</span>
                    <span className="material-symbols-outlined star">grade</span>
                </div>
            </div>

            <div className="order-panel">

                {/* Верхняя панель сортировки */}
                <div className="sort-order-panel">
                    <h3 className="name-block">Поиск по номера в отеле:</h3>
                    <SearchBar />
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
                            hotelList.map(h => <Hotels hotel={h} key={h.id}/>)
                        }

                    </div>
                </div>

            </div>

        </div>
    );

} export default MainPanel;