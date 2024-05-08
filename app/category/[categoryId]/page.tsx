import getCategory from '@/actions/get-category'
import getColors from '@/actions/get-colors';
import getProducts from '@/actions/get-products'
import getSizes from '@/actions/get-sizes';
import Billboard from '@/app/components/billboard';
import Container from '@/app/components/ui/container';
import React from 'react'
import Filter from './components/filter';
import NoResult from '@/app/components/ui/no-results';
import ProductCard from '@/app/components/ui/product-card';
import MobileFilters from '@/app/components/mobile-filters';

export const revalidate = 0;

interface CategorySpecificPageParams {
  params: {
    categoryId: string
  },
  searchParams: {
    colorId: string
    sizeId: string
  }
}

const CategorySpecificPage: React.FC<CategorySpecificPageParams> = async ({ params , searchParams }) => {

  const category = await getCategory(params.categoryId)

  if(!category) {
    return (
      <div>
        Category not found
      </div>
    )
  }

  const sizes = await getSizes()
  const colors = await getColors()

  const products = await getProducts({
    categoryId: params.categoryId,
    isFeatured: true,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId
  })



  return (
    <div className="bg-white">
      <Container>
        <div>
          <Billboard data={category.billboard}/>
        </div>
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <MobileFilters sizes={sizes} colors={colors}/>
            <div className="hidden lg:block">
              <Filter valueKey="sizeId" name="Sizes" data={sizes}/>
              <Filter valueKey="colorId" name="Colors" data={colors}/>
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <NoResult />}
              <div className="grid grid-cols-1 sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((item) => (
                  <ProductCard key={item.id} data={item}/>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default CategorySpecificPage