import { Category } from "@/types"


const getCategory = async (categoryId: string): Promise<Category> => {

  const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories/${categoryId}`

  const res = await fetch(URL)

  return res.json()
}

export default getCategory

