import React from "react";
import Carousel from "./Carousel.jsx";

function Hotels (props) {

    return (
        <article className="order-content">
            <Carousel>
            <img src={props.hotel.image1}/>
            <img src={props.hotel.image2}/>
            <img src={props.hotel.image1}/>

            </Carousel>


            
            <div className="order-info">
                <div>
                    <p className="name-hotel">{props.hotel.type}</p>
                    <p className="l-ho">{props.hotel.square + " кв.м"}</p>
                </div>

                <div>
                    <p className="cost-hotel">от {props.hotel.cost} Р</p>
                    <p className="r-ho">1 ночь / 2 гостя</p>
                </div>
            </div>


            <div className="bottom-line">
                <div className="icons-list">
                    <span className="material-symbols-outlined">wifi</span>
                    <span className="material-symbols-outlined">ac_unit</span>
                    <p>До 3-х мест</p>
                </div>

                <button className="select-hotel">Выбрать<span className="material-symbols-outlined m_t">arrow_forward_ios</span></button>
            </div>
        </article>
    )

} export default Hotels;