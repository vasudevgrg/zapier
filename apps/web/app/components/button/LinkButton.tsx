import React from 'react'

const LinkButton = ({text, onClick}: {text: string, onClick: ()=> void}) => {
  return (
    <button className='px-4 py-4 hover:bg-grey hover:cursor'>{text}</button>
  )
}

export default LinkButton