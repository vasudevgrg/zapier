import React from 'react'

const PrimaryButton = ({text, size= 'small'}: {text: string, size?:string}) => {
  return (

    <button className = {`${size=='small'? 'text-base p-2 rounded-full': 'text-lg p-4 my-2 mr-3'} bg-orange-600 text-white`}>
        {text}
    </button>

  )
}

export default PrimaryButton