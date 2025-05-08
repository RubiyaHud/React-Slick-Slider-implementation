import React from 'react'
import Container from './Container'
import HeadingWithPara from './HeadingWithPara'
import Flex from './Flex'
import Image from './Image'
import customerImage from '../assets/customerImg.png'
import { FaStar } from "react-icons/fa"
import DoubleQuotation from './icons/DoubleQuotation'

const CustomerExperrience = () => {
    return (
        <div className={"mb-[150px]"}>
            <Container>
                <HeadingWithPara className={""} classH={"w-[603px]"} classP={""} hText={"We Care About Our Customer Experience Too"} pText={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."} />
                <Flex className={"justify-between"}>
                    <div className={"relative bg-white mt-12 px-12 pb-[46px] pt-12 rounded-10 shadow-[0_6px_35px_rgba(0,0,0,0.08)]"}>
                        <Image imgSrc={customerImage} imgAlt={"Customer Image"} />
                        <Flex className={"gap-1.5 my-7"}>
                            <FaStar className={"text-[20px] text-starColor"} />
                            <FaStar className={"text-[20px] text-starColor"} />
                            <FaStar className={"text-[20px] text-starColor"} />
                            <FaStar className={"text-[20px] text-starColor"} />
                            <FaStar className={"text-[20px] text-starColor"} />
                        </Flex>
                        <p className={"w-[274px] mb-7 font-inter font-medium text-[16px] text-menuColor leading-7 opacity-70"}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                        <h3 className={"font-inter font-semibold text-[20px] leading-7 text-menuColor"}> Mahid Ahmed </h3>
                        <h3 className={"font-inter font-medium text-[16px] leading-7 text-[#5D5D5D]"}> UX Designer </h3>
                        <DoubleQuotation className={"absolute right-[30px] bottom-[23px] "}/>
                    </div>
                    <div className={"relative bg-white mt-12 px-12 pb-[46px] pt-12 rounded-10 shadow-[0_6px_35px_rgba(0,0,0,0.08)]"}>
                        <Image imgSrc={customerImage} imgAlt={"Customer Image"} />
                        <Flex className={"gap-1.5 my-7"}>
                            <FaStar className={"text-[20px] text-starColor"} />
                            <FaStar className={"text-[20px] text-starColor"} />
                            <FaStar className={"text-[20px] text-starColor"} />
                            <FaStar className={"text-[20px] text-starColor"} />
                            <FaStar className={"text-[20px] text-starColor"} />
                        </Flex>
                        <p className={"w-[274px] mb-7 font-inter font-medium text-[16px] text-menuColor leading-7 opacity-70"}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                        <h3 className={"font-inter font-semibold text-[20px] leading-7 text-menuColor"}> Mahid Ahmed </h3>
                        <h3 className={"font-inter font-medium text-[16px] leading-7 text-[#5D5D5D]"}> UX Designer </h3>
                        <DoubleQuotation className={"absolute right-[30px] bottom-[23px] "}/>
                    </div>
                    <div className={"relative bg-white mt-12 px-12 pb-[46px] pt-12 rounded-10 shadow-[0_6px_35px_rgba(0,0,0,0.08)]"}>
                        <Image imgSrc={customerImage} imgAlt={"Customer Image"} />
                        <Flex className={"gap-1.5 my-7"}>
                            <FaStar className={"text-[20px] text-starColor"} />
                            <FaStar className={"text-[20px] text-starColor"} />
                            <FaStar className={"text-[20px] text-starColor"} />
                            <FaStar className={"text-[20px] text-starColor"} />
                            <FaStar className={"text-[20px] text-starColor"} />
                        </Flex>
                        <p className={"w-[274px] mb-7 font-inter font-medium text-[16px] text-menuColor leading-7 opacity-70"}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                        <h3 className={"font-inter font-semibold text-[20px] leading-7 text-menuColor"}> Mahid Ahmed </h3>
                        <h3 className={"font-inter font-medium text-[16px] leading-7 text-[#5D5D5D]"}> UX Designer </h3>
                        <DoubleQuotation className={"absolute right-[30px] bottom-[23px] "}/>
                    </div>
                </Flex>
            </Container>
        </div>
    )
}

export default CustomerExperrience