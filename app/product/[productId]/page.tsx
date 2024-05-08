import getProduct from '@/actions/get-product'
import getProducts from '@/actions/get-products'
import Gallery from '@/app/components/gallery';
import Info from '@/app/components/info';
import ProductList from '@/app/components/product-list';
import Container from '@/app/components/ui/container';
import React from 'react'


const ProductPage = async ({ params }: { params: { productId: string }}) => {

  const product = await getProduct( { productId: params.productId });

  if (!product) {
    return (
      <div>
        this product does not exist...
      </div>
    )
  }

  const suggestedProducts = await getProducts({ categoryId: product.category.id, isFeatured: true })


  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product.images}/>
            <Info data={product}/>
          </div>
          <hr className='my-10 '/>
          <ProductList title='Suggested Products for you' items={suggestedProducts}/>
        </div>
      </Container>
    </div>
  )
}

export default ProductPage