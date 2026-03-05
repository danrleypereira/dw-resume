import React from "react";
import { useCubeNav } from "@/hooks/useCubeNavigation";

interface CubeLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export function CubeLink({ href, children, onClick, ...props }: CubeLinkProps) {
  const { navigateTo } = useCubeNav();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClick?.(e);
    navigateTo(href);
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
