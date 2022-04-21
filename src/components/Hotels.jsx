import React from "react";

function Hotels (props) {

    return (
        <article className="order_content">
            <img src="https://i.pinimg.com/originals/1e/cb/60/1ecb60097949938d0db94d0695752216.jpg" alt="" srcset="" />
            
            <div className="order_info">
                <div>
                    <p className="name_hotel">{props.hotel.type}</p>
                    <p className="l_ho">{props.hotel.square + " кв.м"}</p>
                </div>

                <div>
                    <p className="cost_hotel">от {props.hotel.cost} Р</p>
                    <p className="r_ho">1 ночь / 2 гостя</p>
                </div>
            </div>


            <div className="bottom-line">
                <div className="icons-list">
                    <span className="material-symbols-outlined">wifi</span>
                    <span className="material-symbols-outlined">ac_unit</span>
                    <p>До 3-х мест</p>
                </div>

                <button className="select_hotel">Выбрать<span className="material-symbols-outlined m_t">arrow_forward_ios</span></button>
            </div>
        </article>
    )

} export default Hotels;