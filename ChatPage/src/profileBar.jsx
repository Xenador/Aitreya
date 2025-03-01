import React from 'react'

const profileBar = ({activeUser}) => {
  return (
    <div className='items-center mx-auto font-bold'>
        <h2>{activeUser.name}</h2>
    </div>
  )
}

export default profileBar