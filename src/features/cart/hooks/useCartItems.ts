import { useQuery } from "@tanstack/react-query";

const useCartItems = () => {
  const {} = useQuery({
    queryKey: ['cartItems'],
    queryFn: () => {
      
    }
  })
}

export default useCartItems;