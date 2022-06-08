import React, { useState, useEffect, Children,cloneElement } from "react";
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';

function ModalCarousel ({children, length, active, setActive}) { 

    const[pages, setPages] = useState([]);
    const[offset, setOffset] = useState(0); 

    const handleLeftArrowClick = () => {
        setOffset((currentOffset) => {
            let newOffset = currentOffset;
            newOffset += 750;
            return Math.min(newOffset, 0);
        })
    }

    const handleRightArrowClick = () => {
        setOffset((currentOffset) => {
            let newOffset = currentOffset;
            newOffset -= 750;
            return Math.max(newOffset, -750 * (length - 1));
        })
    }

    useEffect( () => {
        setPages (Children.map(
            children, (child) => {
                return cloneElement(child, {
                    style: {
                        minWidth: '100%',
                        maxWidth: '100%',
                    }
                });
            }
        ))
    }, []);


    return (
        <div className={active ? "modal-back" : "non-visible"} onClick={() => setActive(false)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="close-button" onClick={() => setActive(false)}>X</div>
                <div className="carousel-container">
                    <div className="big-carousel-images">
                        <div className="all-pages" style={
                                {transform: `translateX(${offset}px)`
                            }}>
                                {pages}
                            </div>
                        </div>
                            
                    <FaChevronLeft className="arrow-left" onClick={handleLeftArrowClick}/>
                    <FaChevronRight className="arrow-right" onClick={handleRightArrowClick}/>
                        

                </div>
            </div>
        </div>
        
    ); 

} export default ModalCarousel;