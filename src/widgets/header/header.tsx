import { routerConfig } from "@/shared/configs/router-config";
import { Link } from "@/shared/ui/link";
import { Logo } from "@/shared/ui/logo";
import { cn } from "@/shared/utils";

type HeaderProps = {
  className?: string;
};

export const Header = (props: HeaderProps) => {
  const { className } = props;
  return (
    <header className={cn("p-2", className)}>
      <div className="bg-primary rounded-xl p-4 text-secondary flex items-center gap-10">
        <Logo asLink href={routerConfig.main} />
        <nav className="flex gap-4 font-bold">
          <Link href={routerConfig.main}>Главная</Link>
          <Link href={routerConfig.main}>О нас</Link>
          <Link href={routerConfig.main}>Авторы</Link>
          <Link href={routerConfig.main}>Произведения</Link>
        </nav>
      </div>
    </header>
  );
};
