import { Product } from '@/types'
import React from 'react'
import NoResult from '@/app/components/ui/no-results'

interface ProductListProps {
  title: string
  items: Product[]
}

const ProductList: React.FC<ProductListProps> = ({ items, title }) => {
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      {items.length === 0 && <NoResult />}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {items.map((item) => (
          <div key={item.id}>
            {item.name}
          </div>
        ))}

      </div>
    </div>
  )
}

export default ProductList