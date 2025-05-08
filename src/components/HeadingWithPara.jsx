import React from 'react'

const HeadingWithPara = ({hText, pText, className, classH, classP}) => {
  return (
    <div className={`${className}`}>
        <h3 className={`${classH} font-inter text-menuColor font-bold text-[40px]`}> {hText} </h3>
        <p className={`${classP} font-inter text-menuColor text-[16px] leading-7 opacity-70 w-[542px] `}> {pText} </p>
    </div>
  )
}

export default HeadingWithPara