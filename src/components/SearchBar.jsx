import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import ChildPanel from "./ChildPanel.jsx";

function SearchBar () { 
    const [value, setValue] = useState([]);

    // Форматирование даты в строку
    const _formatDate = (date) => {
        var dd = date.getDate();
        if (dd < 10) dd = '0' + dd;
        
        var mm = date.getMonth() + 1;
        if (mm < 10) mm = '0' + mm;
        
        var yy = date.getFullYear();
        
        return dd + '.' + mm + '.' + yy;
    }

    // Отвечает за ввод даты заезда
    const [inSelectedDate, inSetSelectedDate] = useState(new Date());
    // Отвечает за ввод даты выезда
    const [outSelectedDate, outSetSelectedDate] = useState(new Date());

    // Количество выбранных взрослых
    const [selectHuman, setSelectHuman] = useState(1);

    const checkDate = (date) => {
        if (date > outSelectedDate) {
            inSetSelectedDate(date);
            outSetSelectedDate(date);
        } 
        else {
            inSetSelectedDate(date)
        }
    }

    // Нахождение разницы между датами в днях
    const subDateDay = (date_1, date_2) => { return (date_1 - date_2) / (3600 * 24 * 1000) }

    const sendRequest = () => {
        let age_man = 36;
        let dateIn = _formatDate(inSelectedDate)
        let p  = '';

        for (let i = 0; i != selectHuman; i++) {
            p += '0' + dateIn.split('.')[0] + dateIn.split('.')[1] + (dateIn.split('.')[2] - age_man) + '0';
            if (i != selectHuman - 1) {
                p += '.';
            }
        } 

        for (let i = 0; i != value.length; i++) {
            p += '.0' + dateIn.split('.')[0] + dateIn.split('.')[1] + (dateIn.split('.')[2] - value[i]) + '0'
        }
        
        let f7 = subDateDay(outSelectedDate, inSelectedDate);

        console.log(`/hotel24?xml=31&action=price&tid=211&flt=100410000050&flt2=100510000863&id_price=-1&p=${p}&data=${dateIn}&d2=1&f7=${f7}&F4=199010240062&promocode=&mode=ROOMS`)
    };

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
                minDate={inSelectedDate}/> 
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
            <button onClick={sendRequest} className="search-button right-border-round">Найти номер<span className="material-symbols-outlined">search</span></button>
        </div>

    </div>
    )
    
} export default SearchBar;