import { cn } from "@/shared/utils";
import { Link, LinkProps } from "./link";
import { LucideProps, PenTool } from "lucide-react";

type LogoLinkProps = {
  asLink: true;
  className?: string;
} & LinkProps;

type LogoSVGProps = {
  asLink: false;
  className?: string;
} & LucideProps;

type LogoProps = LogoLinkProps | LogoSVGProps;

export const Logo = (props: LogoProps) => {
  const { className, asLink, ...rest } = props;

  if (asLink) {
    return (
      <Link className={cn("", className)} {...(rest as LogoLinkProps)}>
        <PenTool className={cn("", className)} />
      </Link>
    );
  }

  return <PenTool className={cn("", className)} {...(rest as LogoSVGProps)} />;
};
