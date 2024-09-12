import { cn } from "../utils";

type PageProps = {
  className?: string;
  children?: React.ReactNode;
};

export const Page = (props: PageProps) => {
  const { className, children } = props;
  return (
    <div
      className={cn(
        "flex flex-col gap-4 px-6 py-8 w-full max-w-content",
        className
      )}
    >
      {children}
    </div>
  );
};
