import React from "react";

function ModalWin ({active, setActive, content}) { 

    return (
        <div className={active ? "modal-back" : "non-visible"} onClick={() => setActive(false)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="descript-header">
                    <h2>Описание</h2>
                </div>
                <div className="descript-hotel" dangerouslySetInnerHTML={{__html: content}}></div>
            </div>
        </div>
    )

} export default ModalWin; 