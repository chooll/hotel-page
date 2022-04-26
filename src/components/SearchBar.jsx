import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

function SearchBar () { 

    const [inSelectedDate, inSetSelectedDate] = useState(new Date());
    const [outSelectedDate, outSetSelectedDate] = useState(new Date());

    return (
    <div className="sort__panel">
        
        <div className="inp-date-start">
            <p>Дата заезда</p>
            <DatePicker className="inp-date" 
                selected={inSelectedDate} 
                onChange={date => inSetSelectedDate(date)}
                dateFormat='dd - MM - yyyy'
                minDate={new Date()}/> 
        </div>

        <div className="inp-date-end">
            <p>Дата выезда</p>
            <DatePicker className="inp-date" 
                selected={outSelectedDate}
                onChange={date => outSetSelectedDate(date)}
                dateFormat='dd - MM - yyyy'
                minDate={inSelectedDate}/> 
        </div>

        <div className="inp-amount-people">
            <p>Взрослые</p>
            <select className="inp-date">
                <option>1</option>
                <option>2</option>
                <option>3</option>

            </select>
        </div>

        <div className="inp-amount-people">
            <p>Дети</p>
            <select className="inp-date">
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
            <button className="search-button right-border-round">Найти номер<span className="material-symbols-outlined">search</span></button>
        </div>

    </div>
    )
    
} export default SearchBar;