import React from 'react'
import Container from './Container'
import HeadingWithPara from './HeadingWithPara'
import teamMember1 from '../assets/TeamMember1.png'
import teamMember2 from '../assets/TeamMember2.png'
import teamMember3 from '../assets/TeamMember3.png'
import Image from './Image'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import PrevArrow from './PrevArrow'
import NextArrow from './NextArrow'


const Teams = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,

        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>
    };

    return (
        <div className={"mb-[140px]"}>
            <Container>
                <HeadingWithPara className={""} classH={"text-center pb-[15px]"} classP={"text-center m-auto"} hText={"Our Expert Team Member"} pText={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."} />

                <Slider {...settings}>
                    <div>
                        <Image className={""} imgSrc={teamMember1} imgAlt={"Team Member Image1"} />
                    </div>
                    <div>
                        <Image className={""} imgSrc={teamMember2} imgAlt={"Team Member Image2"} />
                    </div>
                    <div>
                        <Image className={""} imgSrc={teamMember3} imgAlt={"Team Member Image3"} />
                    </div>
                </Slider>

            </Container>
        </div>
    )
}
export default Teams