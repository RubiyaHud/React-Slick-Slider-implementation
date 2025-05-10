import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import Logo from "../../assets/logo.png"
import Button from '../Button'
import UiverseBtn from '../UiverseBtn'

const Header = () => {
    return (
        <>
            {/* Header Part Start  */}
            <div className="py-4">
                <Container>
                    <Flex className={"items-center justify-between"}>
                        <div className="">
                            <Image imgSrc={Logo} imgAlt={"Logo"} />
                        </div>
                        <div>
                            <ul>
                                <li className="inline-block px-4 font-medium text-lg font-inter text-menuColor hover:text-primary"> Home </li>
                                <li className="inline-block px-4 font-medium text-lg font-inter text-menuColor hover:text-primary"> About </li>
                                <li className="inline-block px-4 font-medium text-lg font-inter text-menuColor hover:text-primary"> Service </li>
                                <li className="inline-block px-4 font-medium text-lg font-inter text-menuColor hover:text-primary"> Blog </li>
                                <li className="inline-block px-4 font-medium text-lg font-inter text-menuColor hover:text-primary"> Contact </li>
                            </ul>
                        </div>
                        <div className="">
                            <Button className={" bg-[#5956E8] text-white "} btnText={"Contact Us"} />
                        </div>
                    </Flex>
                </Container>
            </div>
            {/* Header Part End  */}
        </>
    )
}

export default Header