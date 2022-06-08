import React from "react";

function ModalWin ({active, setActive, content}) { 

    return (
        <div className={active ? "modal-back" : "non-visible"} onClick={() => setActive(false)}>
           
            <div className="modal-content" onClick={e => e.stopPropagation()}>

                <div className="descript-header">
                    <h1>Описание</h1>
                    <div className="close-button" onClick={() => setActive(false)}>X</div>
                </div>
                <div className="block-test">
                    <div className="descript-hotel" dangerouslySetInnerHTML={{__html: content}}></div>
                </div>
            </div>
        </div>
    )

} export default ModalWin; 