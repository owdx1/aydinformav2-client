import { Product } from "@/types"
import { create } from "zustand"

interface PreviewModalStore {
  isOpen: boolean
  onClose: () => void
  onOpen: (data: Product) => void
  data?: Product
}

/*const usePreviewModal = create<PreviewModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data) => set({data: data, isOpen: true}),
  onClose: () => set({isOpen: false})
}))*/

const usePreviewModal = create<PreviewModalStore>((set) => {
  return {
    isOpen: false,
    data: undefined,
    onOpen: (data) => {
      return (
        set({
          data: data,
          isOpen: true
        })
      )
    },
    onClose: () => {
      return (
        set({ isOpen: false })
      )
    }
  }
})

export default usePreviewModal