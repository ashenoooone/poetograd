import { Typography } from "@/shared/ui/typography";
import { cn } from "@/shared/utils";

type WeOfferProps = {
  className?: string;
};

const cards = [
  {
    title: "Публикацию стихов",
    smile: "🖋",
    content:
      "вы можете выкладывать свои произведения и находить отклик от сообщества",
  },
  {
    title: "Оценку и обсуждение",
    smile: "🤔",
    content:
      "принимайте участие в жизни сообщества, оценивайте стихи других и обменивайтесь мнениями",
  },
  {
    title: "Помощь от нейросети",
    smile: "✨",
    content:
      "используйте возможности искусственного интеллекта для создания новых стихов и поиска вдохновения",
  },
];

export const WeOffer = (props: WeOfferProps) => {
  const { className } = props;
  return (
    <div className={cn("", className)}>
      <Typography className="mt-4 font-bold mb-2" variant="h4">
        Наш сайт предлагает:{" "}
      </Typography>
      <div className="flex flex-col gap-4">
        {cards.map(({ content, smile, title }) => {
          return (
            <div
              key={title}
              className={"flex gap-4 items-center border-2 rounded-xl p-4"}
            >
              <Typography variant="h1">{smile}</Typography>
              <div>
                <Typography variant="h4" className="font-bold">
                  {title}
                </Typography>
                <Typography variant="h5">{content}</Typography>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
