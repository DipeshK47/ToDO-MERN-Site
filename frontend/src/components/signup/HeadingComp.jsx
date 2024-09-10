import React from 'react'

function HeadingComp({first, second}) {
  return (
    <h1 className='text-center sign-up-heading'>
    {first} <br /> {second}
  </h1>
  )
}

export default HeadingComp