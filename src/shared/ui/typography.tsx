import { cn } from "@/shared/utils";

export type Variant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";

type TypographyProps = {
  className?: string;
  variant?: Variant;
} & React.ComponentProps<"p">;

export const Typography = (props: TypographyProps) => {
  const { className, variant = "p", ...rest } = props;

  const Tag = variant;

  return (
    <Tag
      className={cn(
        "",
        className,
        {
          h1: "text-5xl",
          h2: "text-4xl",
          h3: "text-3xl",
          h4: "text-2xl",
          h5: "text-xl",
          h6: "text-lg",
          p: "text-base",
        }[variant as string]
      )}
      {...rest}
    />
  );
};
