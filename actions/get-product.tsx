import qs from "query-string"
import { Product } from "@/types"

interface Query {
  productId: string
}

const getProduct = async (query: Query): Promise<Product> => {


  const URL = `${process.env.NEXT_PUBLIC_API_URL}/products/${query.productId}`


  const res = await fetch(URL)

  return res.json()
}

export default getProduct

