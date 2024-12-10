import { MenuItem } from "@/components/layout/MobileMenu/MobileMenuLink";
import {
  CiDiscount1,
  CiShoppingBasket,
  CiShoppingCart,
  CiUser,
} from "react-icons/ci";

export const HEADER_LINKS: MenuItem[] = [
  {
    text: "Каталог",
    href: "/catalog",
    icon: CiShoppingBasket,
  },
  {
    text: "Скидки",
    href: "/sales",
    icon: CiDiscount1,
  },
  {
    text: "Корзина",
    href: "/cart",
    icon: CiShoppingCart,
  },
  {
    text: "Профиль",
    href: "/profile",
    icon: CiUser,
  },
];
