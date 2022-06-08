import React, { useState, useEffect, Children,cloneElement } from "react";
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';
import ModalCarousel from "./ModalCarousel";

function Carousel ({children, sizeImage, length}) { 

    const[pages, setPages] = useState([]);
    const[offset, setOffset] = useState(0); 
    const [fullScreen, setFullScreen] = useState(false);

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
    }, []);

    const [active, setActive] = useState(false);

    return (
        <div className={fullScreen ? "full-screen carousel-container" : "carousel-container"}>
            
            <ModalCarousel children={children} length={length} active={active} setActive={setActive}/>
            <div className="show-windows">
                <div className="all-pages round-order-content" onClick={() => setActive(true)} style={
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