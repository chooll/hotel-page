import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ChildPanel from "./ChildPanel.jsx";
import {subDateDay, sendRequestForSearchHotel} from '../Utils.js';

function SearchBar ({setResource, setPostLoad, setAmountPeople, setSubDate}) { 

    const getGetMaxDate = (date) => { return new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1); }
    // Количество детей
    const [value, setValue] = useState([]);
    // Отвечает за ввод даты заезда
    const [inSelectedDate, inSetSelectedDate] = useState(new Date());
    // Отвечает за ввод даты выезда
    const [outSelectedDate, outSetSelectedDate] = useState(getGetMaxDate(inSelectedDate));
    // Количество выбранных взрослых
    const [selectHuman, setSelectHuman] = useState(1);

    const selectAmountHuman = (val) => { 
        sendRequestForSearchHotel(inSelectedDate, outSelectedDate, selectHuman, value, setResource, setPostLoad)
        setAmountPeople(parseInt(selectHuman) + value.length); 
        setSubDate(subDateDay(outSelectedDate, inSelectedDate));
    }

    const checkDate = (date) => {
        if (date > outSelectedDate) {
            inSetSelectedDate(date);
            outSetSelectedDate(getGetMaxDate(date));
        } 
        else {
            inSetSelectedDate(date)
        }
    }

    return (
    <div className="sort__panel">
        <div className="inp-date-start">
            <p>Дата заезда</p>
            <DatePicker  className="inp-date" 
                selected={inSelectedDate} 
                onChange={date => checkDate(date)}
                dateFormat='dd - MM - yyyy'
                minDate={new Date()}/> 
        </div>

        <div className="inp-date-end">
            <p>Дата выезда</p>
            <DatePicker className="inp-date" 
                selected={outSelectedDate}
                onChange={date => outSetSelectedDate(date)}
                dateFormat='dd - MM - yyyy'
                minDate={getGetMaxDate(inSelectedDate)}/> 
        </div>

        <div className="inp-amount-people">
            <p>Взрослые</p>
            <select className="inp-date" onChange={event => setSelectHuman(event.target.value)}>
                <option>1</option>
                <option>2</option>
                <option>3</option>

            </select>
        </div>

        <div className="inp-amount-people">
            <p>Дети</p>
            <ChildPanel value={value} setValue={setValue}/> 
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
            <button onClick={() => selectAmountHuman()} className="search-button right-border-round">Найти номер<span className="material-symbols-outlined">search</span></button>
        </div>
    </div>
    )
    
} export default SearchBar;