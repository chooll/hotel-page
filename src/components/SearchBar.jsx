import React from "react";

function SearchBar () { 

    return (
    <div className="sort__panel">
        
        <div className="inp-date-start">
            <p>Дата заезда</p>
            <input className="inpDate  left-border-round" type="date" defaultValue={"2022-04-15"}/>
        </div>

        <div className="inp-date-end">
            <p>Дата выезда</p>
            <input className="inpDate" type="date" defaultValue={"2022-04-15"}/>
        </div>

        <div className="inp-amount-people">
            <p>Взрослые</p>
            <select className="inpDate">
                <option>1</option>
                <option>2</option>
                <option>3</option>

            </select>
        </div>

        <div className="inp-amount-people">
            <p>Дети</p>
            <select className="inpDate">
               <option>-</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>

            </select>
        </div>

        <div className="inp-promocode">
            <p>Промокод</p>
            <div className="checkPromocode">
                <input type="checkbox" name="isPromo"/>
                <label htmlFor="isPromo">Есть промокод?</label>
            </div>
        </div>

        <div className="button-sort">
            <p className="unvisible">Поиск</p>
            <button className="search-button right-border-round">Найти номер<span class="material-symbols-outlined">search</span></button>
        </div>

    </div>
    )
    
} export default SearchBar;