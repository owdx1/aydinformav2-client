"use client"
import React, { useEffect, useState } from 'react'

const formatter = new Intl.NumberFormat("tr-TR", {
  style: "currency",
  currency: "TRY"
})



interface CurrencyProps {
  value?: string | number
}


const Currency: React.FC<CurrencyProps> = ({ value }) => {

  const [mounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if(!mounted) {
    return null
  }
 
  return (
    <div>
      {formatter.format(Number(value))}
    </div>
  )
}

export default Currency