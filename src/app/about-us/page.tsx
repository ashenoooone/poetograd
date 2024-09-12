import { Separator } from "@/shared/ui/separator";
import { Typography } from "@/shared/ui/typography";
import { WeOffer } from "./_components/we-offer";

export default function AboutUs() {
  return (
    <div>
      <Typography variant="h2" className="font-bold mb-4">
        О нас
      </Typography>
      <Typography variant="h4">
        {/* TODO подумать над выделением слова */}
        <strong>{process.env.SITE_NAME}</strong> – это творческое пространство
        для всех любителей поэзии. Мы создали платформу, где русскоязычные поэты
        и поэтессы могут делиться своими произведениями, оценивать стихи других
        участников и получать вдохновение с помощью передовых технологий.
      </Typography>
      <Separator className="my-4" />

      <WeOffer />
      <Separator className="my-4" />
      <div className="flex gap-4 items-center">
        <Typography variant="h1">😌</Typography>
        <Typography variant="h4" className="mt-4">
          <strong>Мы верим</strong>, что поэзия объединяет людей и раскрывает
          новые грани творчества. Присоединяйтесь к нам, чтобы вдохновляться,
          развиваться и стать частью нашего уникального сообщества.
        </Typography>
      </div>
    </div>
  );
}
