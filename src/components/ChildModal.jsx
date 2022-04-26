import React, {useState} from 'react'; 
import '../style/styleModal.css'

function ChildModal({active, setActive, count}) { 

    return (
        <article className={active ? "child-modal active" : "child-modal"} onClick={() => setActive(false)}>
            <section className="content-modal" onClick={e => e.stopPropagation()}>

                <div className="info-about-child">
                    <h2 className="amount-child">{count} ребенка</h2>
                    <input type="text" />
                    <input type="text" />
                </div>
            </section>
        </article>
    )

} export default ChildModal;