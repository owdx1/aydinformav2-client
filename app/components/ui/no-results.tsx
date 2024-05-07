import React from 'react'

type Props = {}

const NoResult = (props: Props) => {
  return (
    <div className="flex items-center justify-center h-full w-full text-neutral-400">
      No result found.
    </div>
  )
}

export default NoResult