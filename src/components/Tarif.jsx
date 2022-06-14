
import React from 'react'; 
import {rigthNigthWord} from "../Utils.js";


function Tarif ({entries, subDate, amountPeople}) { 

    return (
        <div className="tarif">
            <div className="header-tarif">
                <p className="tarif-name">{entries["rate_name"]}</p>
                <p className='info-icon'>i</p>
            </div>
            <p className="info-text">Здесь что-то должно быть</p>

            <div className="info-about-tarif">
                <p className="price-tarif">{"от " + entries["prices"][0]["amount"] + " ₽"}</p>
                <p className="t-ro">{subDate} {rigthNigthWord(subDate)} / {amountPeople} гостя</p>
            </div>
            <button className="select-hotel">Выбрать<span className="material-symbols-outlined m_t">arrow_forward_ios</span></button>

        </div>  
    )

} export default Tarif; 