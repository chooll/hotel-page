import React, { useState, useEffect, Children,cloneElement } from "react";
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';

function Carousel ({children, sizeImage, length}) { 

    const[pages, setPages] = useState([]);
    const[offset, setOffset] = useState(0); 
    const [fullScreen, setFullScreen] = useState(false);
    
    function fullScreenChange() {
        if (fullScreen) {
            setFullScreen(false);
            setOffset(0);
        } else {
            setFullScreen(true);
        }
    }

    const handleLeftArrowClick = () => {
        setOffset((currentOffset) => {
            let newOffset = currentOffset;
            if (fullScreen) {
                newOffset += 1200;
            } else {
                newOffset += sizeImage;
            }
        return Math.min(newOffset, 0);
        })
    }

    const handleRightArrowClick = () => {
        setOffset((currentOffset) => {
            let newOffset = currentOffset;
            if (fullScreen) {
                newOffset -= 1200;
                return Math.max(newOffset, -1200 * (length - 1));

            } else {
                newOffset -= sizeImage;
                return Math.max(newOffset, -sizeImage * (length - 1));

            }
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
        <div className={fullScreen ? "full-screen carousel-container" : "carousel-container"}>
            

            <div className="show-windows">
                <div className="all-pages round-order-content" onClick={fullScreenChange} style={
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