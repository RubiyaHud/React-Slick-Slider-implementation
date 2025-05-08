import React from 'react'
import Heading from './Heading'


const ServiceContent = ({ Component, className, headingText, bodyText }) => {
    return (
        <div className={`${className} group w-[370px] px-[63px] py-[48px]  bg-white rounded-10 border border-borderColor hover:shadow-lg hover:border-white`}>
            <Component classOne={"fill-white transition group-hover:fill-primary"} classTwo={"fill-blue-500 transition group-hover:fill-white"} /> {/* Render the passed component */}
            <Heading className={"my-[30px] font-bold font-inter text-[25px] text-menuColor"} text={headingText} as={"h3"} />
            <p className={"w-[274px] font-medium font-inter text-[16px] text-menuColor opacity-70"}>
                {bodyText}
            </p>
        </div>
    )
}

export default ServiceContent