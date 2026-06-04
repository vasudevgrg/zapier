import React from 'react'

const SignUpGoogle = ({text, onClick}: {text: string, onClick : ()=> void}) => {
  return (
   <button className="font-bold border p-4 w-full" onClick={onClick}>{text}</button>
  )
}

export default SignUpGoogle