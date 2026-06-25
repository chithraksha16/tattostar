import React from "react"
interface ButtonProps{
  children:React.ReactNode,
  className?:string
}
const Button = ({children,className}:ButtonProps) => {
  return (
    <div className={`${className} px-5 py-1.5 bg-blue-600 text-white text-base font-medium border-none rounded`}>
      {children}
    </div>
  )
}

export default Button
