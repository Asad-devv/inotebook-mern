import React from 'react'

const Loading = () => {
  return (
    <div className='container d-flex justify-content-center h-75 align-items-center'>
      <div className="container  spinner-border" role="status">
        <span className="visually-hidden ">Loading...</span>
      </div>
    </div>
  )
}

export default Loading