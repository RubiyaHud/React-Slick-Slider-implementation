import React from 'react'
import Container from './Container'
import Flex from './Flex'
import Heading from './Heading'
import Button from './Button'
import Image from './Image'
import bannerImage from '../assets/bannerImg.png'
import HeadingHash from './HeadingHash'

const Banner = () => {
    return (
        <div className="bg-primary pt-[180px] pb-[240px]">
            <Container>
                <Flex className={"justify-between items-center"}>
                    <div className="w-[542px]">
                        <HeadingHash text={"We Are Digital #Product# Design #Agency#"} as="h1" className={"font-bold font-inter text-white leading-20 text-[65px]"}/>
                        {/* <Heading text={"We Are Digital #Product# Design Agency"} as="h1" className={"font-bold font-inter text-white leading-20 text-[65px]"} /> */}
                        <p className="font-inter text-[16px] text-white leading-7 py-10">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        <Button className={"bg-white text-primary"} btnText={"Get Started"} />
                    </div>
                    <div className="">
                        <Image imgSrc={bannerImage} imgAlt={"Banner Image"} />
                    </div>
                </Flex>
            </Container>

        </div>
    )
}

export default Banner