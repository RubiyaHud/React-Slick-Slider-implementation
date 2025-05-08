import React from 'react'
import HeadingWithPara from './HeadingWithPara'
import Container from './Container'
import Flex from './Flex'
import Image from './Image'
import newsImg1 from '../assets/newsImg1.png'
import newsImg2 from '../assets/newsImg2.png'
import newsImg3 from '../assets/newsImg3.png'
import AdminIcon from './icons/AdminIcon'
import CalenderIcon from './icons/CalenderIcon'


const News = () => {
    return (
        <div className="mb-[100px]">
            <Container>
                <HeadingWithPara className={"mb-[50px]"} classH={"text-center"} classP={"text-center m-auto"} hText={"Our Letest News"} pText={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."} />
                <Flex className={"justify-between"}>
                    <div className={" px-5 pt-[17px] pb-12 border border-borderColor rounded-10"}>
                        <Image className={""} imgSrc={newsImg1} imgAlt={"News Image 1"} />
                        <div className={"mt-5 pl-3.5"}>
                            <Flex className={"mb-4 gap-2.5 items-center"}>
                                <AdminIcon />
                                <h3 className={"pr-5 font-inter font-medium text-[16px] leading-7 text-[#5D5D5D]"}> Admin </h3>
                                <CalenderIcon/>
                                <h3 className={"font-inter font-medium text-[16px] leading-7 text-[#5D5D5D]"}> 07/11/2021 </h3>
                            </Flex>
                            <h3 className={"mb-4 w-[271px] pr-2.5 font-inter font-semibold text-[20px] text-menuColor leading-6"}> Business Plans That Fit Your Best Blog</h3>
                            <p className={"mb-4 w-[300px] font-inter font-medium text-[16px] text-[#5D5D5D] leading-7"}>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                            <h3 className={"font-inter font-semibold text-[16px] text-primary"}>Learn More</h3>

                        </div>
                    </div>
                    <div className={" px-5 pt-[17px] pb-12 border border-borderColor rounded-10"}>
                        <Image className={""} imgSrc={newsImg2} imgAlt={"News Image 2"} />
                        <div className={"mt-5 pl-3.5"}>
                            <Flex className={"mb-4 gap-2.5 items-center"}>
                                <AdminIcon />
                                <h3 className={"pr-5 font-inter font-medium text-[16px] leading-7 text-[#5D5D5D]"}> Admin </h3>
                                <CalenderIcon/>
                                <h3 className={"font-inter font-medium text-[16px] leading-7 text-[#5D5D5D]"}> 07/11/2021 </h3>
                            </Flex>
                            <h3 className={"mb-4 w-[271px] pr-2.5 font-inter font-semibold text-[20px] text-menuColor leading-6"}> Business Plans That Fit Your Best Blog</h3>
                            <p className={"mb-4 w-[300px] font-inter font-medium text-[16px] text-[#5D5D5D] leading-7"}>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                            <h3 className={"font-inter font-semibold text-[16px] text-primary"}>Learn More</h3>

                        </div>
                    </div>
                    <div className={" px-5 pt-[17px] pb-12 border border-borderColor rounded-10"}>
                        <Image className={""} imgSrc={newsImg3} imgAlt={"News Image 3"} />
                        <div className={"mt-5 pl-3.5"}>
                            <Flex className={"mb-4 gap-2.5 items-center"}>
                                <AdminIcon />
                                <h3 className={"pr-5 font-inter font-medium text-[16px] leading-7 text-[#5D5D5D]"}> Admin </h3>
                                <CalenderIcon/>
                                <h3 className={"font-inter font-medium text-[16px] leading-7 text-[#5D5D5D]"}> 07/11/2021 </h3>
                            </Flex>
                            <h3 className={"mb-4 w-[271px] pr-2.5 font-inter font-semibold text-[20px] text-menuColor leading-6"}> Business Plans That Fit Your Best Blog</h3>
                            <p className={"mb-4 w-[300px] font-inter font-medium text-[16px] text-[#5D5D5D] leading-7"}>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                            <h3 className={"font-inter font-semibold text-[16px] text-primary"}>Learn More</h3>

                        </div>
                    </div>
                </Flex>
            </Container>

        </div>
    )
}

export default News