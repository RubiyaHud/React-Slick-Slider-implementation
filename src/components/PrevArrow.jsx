import React from 'react'
import { FaArrowCircleLeft } from "react-icons/fa";

const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div className={`text-primary text-3xl ${className}`} onClick={onClick} >
            <FaArrowCircleLeft/>
        </div>
    )
}

export default PrevArrow

