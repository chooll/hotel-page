import React, {useState} from "react";
import ChildAge from "./ChildAge";

function ChildPanel( ){ 

    const [showChildPanel, setShowChildPanel] = useState(false);
    const [amountChild, setAmountChild] = useState(0);
    let [childAge, setChildAge] = useState([]);

    const addChild = () => {
        if (amountChild != 4) {
            setAmountChild(amountChild + 1);
                setChildAge([...childAge, <ChildAge key={amountChild} n={amountChild + 1}/>])
        }
    }

    const retAdd = () => {
        return (
            <ChildAge n={amountChild} />
        )
    }

    const subChild = () => {
        if (amountChild != 0) {
            setAmountChild(amountChild - 1);
            if (childAge.length != 0) {
                setChildAge(...childAge, ...childAge.pop())
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
                <button className="button a" onClick={()=>setShowChildPanel(false)}>Отменить</button>
                <button className="button c" onClick={() => setShowChildPanel(false)}>Применить</button>
            </div>
            </div>
        </div>
    );

} export default ChildPanel;