import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='bg-white border-t'>
      <div className='mx-auto p-10'>
        <p className='text-center text-xs text-black'>
          &copy; Aydın Forma
        </p>
      </div>
    </div>
  )
}

export default Footer