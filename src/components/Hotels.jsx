import React, {useState} from "react";
import Carousel from "./Carousel.jsx";
import ModalWin from "./ModalWin.jsx";

function Hotels ({hotel}) {

    const [activeFullInfo, setActiveFullInfo] = useState(false);
    const [modalActive, setModalActive] = useState(false); 

    const name = hotel["name"];
    const area = hotel["area"];
    const price = hotel["price"];
    const max_bed = hotel["max_bed"];
    const wifi_status = hotel["wifi"];
    const cond_status = hotel["cond_status"];
    const about = hotel["description"];
    
    const add_i = "https://go.sochisirius.ru/pr_img/";
    const images = hotel["pic"]; 

    const changeActiveFullInfo = () => {
        return activeFullInfo ? setActiveFullInfo(false) : setActiveFullInfo(true);
    }

    return (
        <article className="order-content round-order-content">
    
            <ModalWin active={modalActive} setActive={setModalActive} content={about}/>
            <Carousel sizeImage={394.3} length={images.length}>
                { images.map ( img => <img src={add_i+img} key={img}/>) }
            </Carousel>

            <div className="order-info">
                <div>
                    <p className="name-hotel">{name}</p>
                    <p className="l-ho">{area + " кв.м"}</p>
                    <p className="show-full-info" onClick={() => setModalActive(true)}>Подробнее..</p>
                </div>

                <div>
                    <p className="cost-hotel">от {price} ₽</p>
                    <p className="r-ho">1 ночь / {max_bed} гостя</p>
                </div>

            </div>

            <div className="bottom-line">
                <div className="icons-list">
                    <span className={wifi_status ? "material-symbols-outlined" : "non-visible"}>wifi</span>
                    <span className={cond_status ? "material-symbols-outlined" : "non-visible"}>ac_unit</span>
                    <p>До {max_bed} мест</p>
                </div>
                <button className="select-hotel">Выбрать<span className="material-symbols-outlined m_t">arrow_forward_ios</span></button>
            </div>
        </article>
    )

} export default Hotels;