import Link from "next/link";
import { PropsWithChildren } from "react";

interface HeaderLinkProps extends PropsWithChildren {
  href: string;
}

const HeaderLink = ({ href, children }: HeaderLinkProps) => {
  return (
    <Link href={href} className="text-2xl font-bold">
      {children}
    </Link>
  );
};

export default HeaderLink;
