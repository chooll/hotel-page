import React, { useState, useEffect, Children,cloneElement, setOffset } from "react";
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';

function Carousel ({children}) { 

    const[pages, setPages] = useState([]);
    const[offset, setOffset] = useState(0); 

    const handleLeftArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + 394;
            return Math.min(newOffset, 0);
        })
    }

    const handleRightArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset - 394;
            return Math.max(newOffset, -394 * 2);
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
    }, [])

    return (
        <div className="carousel-container">
            

            <div className="show-windows">
                <div className="all-pages round-order-content" style={
                    {transform: `translateX(${offset}px)`
                }}>
                    {pages}
                </div>
            </div>
                
            <FaChevronLeft className="arrow-left" onClick={handleLeftArrowClick}/>
            <FaChevronRight className="arrow-right" onClick={handleRightArrowClick}/>
            

        </div>
    ); 


} export default Carousel;