import React from 'react'

const Button = ({className, btnText}) => {
  return (
    <button className={`px-6 py-3 rounded-10 border font-medium text-lg ${className}`}> {btnText} </button>
  )
}

export default Button