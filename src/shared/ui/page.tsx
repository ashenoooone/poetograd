import { cn } from "../utils";

type PageProps = {
  className?: string;
  children?: React.ReactNode;
};

export const Page = (props: PageProps) => {
  const { className, children } = props;
  return (
    <div className={cn("flex flex-col gap-4 px-6 max-w-[1024px]", className)}>
      {children}
    </div>
  );
};
