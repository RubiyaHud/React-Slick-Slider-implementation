import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import Logo from "../../assets/logo.png"
import FbLogo from "../../assets/FbLogo.png"
import twitterLogo from "../../assets/twitterLogo.png"

const Footer = () => {
  return (
    <div className="bg-primary/10 py-[100px]">
      <Container>
        <Flex className={"gap-[93px]"}>
          <div className="">
            <Image imgSrc={Logo} imgAlt={"Logo"} />
            <p className="py-[15px] w-[300px] font-inter font-medium text-[15px] leading-7 text-[#5D5D5D]">There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
            <Flex className={"gap-3.5"}>
            <Image imgSrc={FbLogo} imgAlt={"Facebook Logo"} />
            <Image imgSrc={twitterLogo} imgAlt={"Twitter Logo"} />
            </Flex>

          </div>
          <div className="w-[95px]">
            <h3 className="font-inter font-semibold text-[20px] text-menuColor">Company</h3>
            <ul className="">
              <li className="font-inter font-medium text-[15px] leading-9 text-[#5D5D5D] "> About Us </li>
              <li className="font-inter font-medium text-[15px] leading-9 text-[#5D5D5D] "> Work </li>
              <li className="font-inter font-medium text-[15px] leading-9 text-[#5D5D5D] "> Latest News </li>
              <li className="font-inter font-medium text-[15px] leading-9 text-[#5D5D5D] "> Careers </li>
            </ul>
          </div>
          <div className="w-[112px]">
            <h3 className="font-inter font-semibold text-[20px] text-menuColor">Product</h3>
            <ul className="">
              <li className="font-inter font-medium text-[15px] leading-9 text-[#5D5D5D] "> Prototype </li>
              <li className="font-inter font-medium text-[15px] leading-9 text-[#5D5D5D] "> Plans & Pricing </li>
              <li className="font-inter font-medium text-[15px] leading-9 text-[#5D5D5D] "> Customers </li>
              <li className="font-inter font-medium text-[15px] leading-9 text-[#5D5D5D] "> Integrations </li>
            </ul>
          </div>
          <div className="w-[136px]">
            <h3 className="font-inter font-semibold text-[20px] text-menuColor">Support</h3>
            <ul className="">
              <li className="font-inter font-medium text-[15px] leading-9 text-[#5D5D5D] "> Help Desk </li>
              <li className="font-inter font-medium text-[15px] leading-9 text-[#5D5D5D] "> Sales </li>
              <li className="font-inter font-medium text-[15px] leading-9 text-[#5D5D5D] "> Become a Partner </li>
              <li className="font-inter font-medium text-[15px] leading-9 text-[#5D5D5D] "> Developers </li>
            </ul>
          </div>
          <div className="w-[157px]">
            <h3 className="font-inter font-semibold text-[20px] text-menuColor">Contact</h3>
            <p className="font-inter font-medium text-[15px] leading-[27px] text-[#5D5D5D] "> 524 Broadway , NYC
            +1 777 - 978 - 5570</p>
            {/* <ul className="">
              <li className="font-inter font-medium text-[16px] leading-9 text-[#5D5D5D] "> Help Desk </li>
              <li className="font-inter font-medium text-[16px] leading-9 text-[#5D5D5D] "> Sales </li>
              <li className="font-inter font-medium text-[16px] leading-9 text-[#5D5D5D] "> Become a Partner </li>
              <li className="font-inter font-medium text-[16px] leading-9 text-[#5D5D5D] "> Developers </li>
            </ul> */}
          </div>
        </Flex>
      </Container>

    </div>
  )
}

export default Footer










