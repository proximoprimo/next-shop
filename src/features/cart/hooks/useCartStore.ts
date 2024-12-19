import { CartItem } from '@prisma/client'
import { create } from 'zustand'

interface CartState {
  products: CartItem[]
  addProduct: (product: CartItem) => void
  removeProduct: (product: CartItem) => void
}

const useCartStore = create<CartState>((set) => ({
  products: [],
  addProduct: (product) =>
    set((state) => ({ products: [...state.products, product] })),
  removeProduct: (product) =>
    set((state) => ({
      products: state.products.filter((p) => p.id !== product.id),
    })),
}))

export default useCartStore
