import React from 'react'
import Container from './Container'
import Heading from './Heading'
import Flex from './Flex'
import ServiceContent from './ServiceContent'
import UiUxIcon from './icons/UIUXIcon'
import WebDevIcon from './icons/WebDevIcon'
import DigMarIcon from './icons/DigMarIcon'
import GDIcon from './icons/GDIcon'
import WebDesignIcon from './icons/WebDesignIcon'
import MotionDesignIcon from './icons/MotionDesignIcon'
import HeadingWithPara from './HeadingWithPara'



const Service = () => {

    return (
        <>
            <div className="my-[100px]">
                <Container>
                    <HeadingWithPara className={""} classH={"text-center"} classP={"text-center m-auto"} hText={"Our Services"} pText={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."} />
                    <Flex className={"pt-14 flex-wrap"}>
                        <ServiceContent Component={UiUxIcon} className={"mr-[30px] mb-[30px]"} headingText={"UI/UX Design"} bodyText={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."} />
                        <ServiceContent Component={WebDevIcon} className={"mr-[30px] mb-[30px]"} headingText={"Web Development"} bodyText={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."} />
                        <ServiceContent Component={DigMarIcon} className={"mb-[30px]"} headingText={"Digital Marketing"} bodyText={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."} />
                        <ServiceContent Component={GDIcon} className={"mr-[30px]"} headingText={"Graphic Design"} bodyText={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."} />
                        <ServiceContent Component={WebDesignIcon} className={"mr-[30px]"} headingText={"Web Design"} bodyText={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."} />
                        <ServiceContent Component={MotionDesignIcon} className={""} headingText={"Motion Design"} bodyText={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."} />
                    </Flex>
                </Container>
            </div>
        </>
    )
}

export default Service