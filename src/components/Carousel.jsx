import React, { useState, useEffect, Children,cloneElement, setOffset } from "react";
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';

function Carousel ({children}) { 

    const[pages, setPages] = useState([]);
    const[offset, setOffset] = useState(0); 

    const handleLeftArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + 364;
            return Math.min(newOffset, 0);
        })
    }

    const handleRightArrowClick = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset - 364;
            console.log(newOffset, Math.max(newOffset, -728));
            return Math.max(newOffset, -728);
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
            <FaChevronLeft className="arrow-left" onClick={handleLeftArrowClick}/>
            <div className="show-windows">
                <div className="all-pages" style={
                    {transform: `translateX(${offset}px)`
                }}>
                    {pages}
                </div>
            </div>
            <FaChevronRight className="arrow-right" onClick={handleRightArrowClick}/>

        </div>
    ); 


} export default Carousel;