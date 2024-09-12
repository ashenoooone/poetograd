import { cn } from "@/shared/utils";
import { LinkProps as NextLinkProps } from "next/link";
import NextLink from "next/link";
import { ReactNode } from "react";

export type LinkProps = {
  className?: string;
  children?: ReactNode;
} & NextLinkProps;

export const Link = (props: LinkProps) => {
  const { className, ...rest } = props;
  return (
    <NextLink
      className={cn("hover:opacity-80 transition-all", className)}
      {...rest}
    />
  );
};
