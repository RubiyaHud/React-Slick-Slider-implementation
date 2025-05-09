import React from 'react'
import { FaArrowCircleRight } from "react-icons/fa";

const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div className={`text-primary text-3xl ${className}`} onClick={onClick} >
            <FaArrowCircleRight/>
        </div>
    )
}

export default NextArrow

