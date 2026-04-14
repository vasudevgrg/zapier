import React from 'react'

const PrimaryButton = ({text, size= 'small'}: {text: string, size?:string}) => {
  return (

    <button className = {`${size=='small'? 'text-base': 'text-lg'} bg-orange-600 rounded-full text-white ${size=='small'? 'p-4':'px-8'} ${size=='small'? 'py-4':'py-8'}`}>
        {text}
    </button>

  )
}

export default PrimaryButton