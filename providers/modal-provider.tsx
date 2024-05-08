"use client"
import PreviewModal from '@/app/components/ui/preview-modal'
import React, { useEffect, useState } from 'react'

type Props = {}

const ModalProvider = (props: Props) => {

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) {
    return null
  }


  return (
    <>
      <PreviewModal />
    </>
  )
}

export default ModalProvider