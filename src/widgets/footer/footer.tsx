import { routerConfig } from "@/shared/configs/router-config";
import { Link } from "@/shared/ui/link";
import { Typography } from "@/shared/ui/typography";
import { cn } from "@/shared/utils";

type FooterProps = {
  className?: string;
};

export const Footer = (props: FooterProps) => {
  const { className } = props;
  return (
    <footer className={cn("w-full bg-primary ", className)}>
      <div className="max-w-content grid mx-auto grid-cols-2 gap-2 p-4 text-secondary">
        <div>{/* TODO logotype and other info */}</div>
        <div>
          <nav className="flex gap-4 font-bold">
            <Link href={routerConfig.main}>Главная</Link>
            <Link href={routerConfig["about-us"]}>О нас</Link>
            <Link href={routerConfig.authors}>Авторы</Link>
            <Link href={routerConfig.works}>Произведения</Link>
          </nav>
          <Typography className="text-secondary/50">
            На {process.env.SITE_NAME} мы объединяем поэтов и любителей поэзии в
            уникальном сообществе. Здесь вы можете делиться своими стихами,
            оценивать работы других и получать творческую поддержку от
            нейросети. Мы стремимся создать пространство, где каждый может найти
            вдохновение и развить свои поэтические способности. Присоединяйтесь
            к нам и откройте новые горизонты в мире поэзии!
          </Typography>
        </div>
      </div>
    </footer>
  );
};
