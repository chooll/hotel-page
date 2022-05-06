import React, {useState} from "react";
import ChildAge from "./ChildAge";
import {addValueInArray, subValueInArray} from '../Utils';

function ChildPanel ({value, setValue}){ 

    const [showChildPanel, setShowChildPanel] = useState(false);
    const [amountChild, setAmountChild] = useState(0);
    const [childAge, setChildAge] = useState([]);

    const addChild = () => {
        if (amountChild != 4) {
            setAmountChild(amountChild + 1);
            setValue(addValueInArray(value, 1));
            setChildAge([...childAge, <ChildAge key={amountChild} selectedIndex={amountChild} v={value} setValue={setValue} n={amountChild + 1}/>])
        }
    }

    const agreeButtonClick = () => { 
        setShowChildPanel(false);
    }

    const cancelButtonClick = () => {
        setShowChildPanel(false);
        setAmountChild(0);
        setChildAge([]);
        setValue([]);
    }

    const subChild = () => {
        if (amountChild != 0) {
            setAmountChild(amountChild - 1);
            setValue(subValueInArray(value));
            
            if (childAge.length != 0) {
                setChildAge(subValueInArray(childAge));
            }
        }
    }

    return (
        <div onClick={() => setShowChildPanel(true)} className="child-panel">
            <p>{amountChild == 0 ? " - " : amountChild}</p>

            <div className={showChildPanel ? "panel-setting-child active" : "panel-setting-child"} onClick={e => e.stopPropagation()}>
                <div className="amount-child">
                    <p className="p-butt material-symbols-outlined" onClick={subChild}>remove</p>
                    <h2>{amountChild == 1 ? amountChild + " ребенок" : amountChild + " ребенка"}</h2>
                    <p className="p-butt material-symbols-outlined" onClick={addChild}>add</p>
                </div>

            <div className="set-child">
                <p className="title-age">Укажите возраст детей</p>

                <div className="child-age">
                    {
                        childAge.map (elem => elem)
                    }
                </div>

            </div>
            <div className="bottom-block">
                <button className="button a" onClick={cancelButtonClick}>Отменить</button>
                <button className="button c" onClick={agreeButtonClick}>Применить</button>
            </div>
            </div>
        </div>
    );

} export default ChildPanel;