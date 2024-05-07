export interface Billboard {
  id: string
  label: string
  imageUrl: string
}

export interface Category {
  id: string
  name: string
  billboard: Billboard
}

export interface Size {
  id: string
  name: string
  value: string
}

export interface Color {
  id: string
  name: string
  value: string
}

export interface Product {
  id: string
  category: Category
  size: Size
  color: Color
  name: string
  price: string
  amount: number
  isFetured: boolean
  isArchived: boolean
  images: string[]
}