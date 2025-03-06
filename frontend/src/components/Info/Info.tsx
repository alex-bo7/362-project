import Card from "../Card/Card";

import "./info.css";

export default function Info() {
  interface CardInfo {
    id: number;
    title: string;
    description: Array<string>;
  }

  let cardInfo: CardInfo[] = [
    {
      id: 1,
      title: "How It Works",
      description: [
        "Dispose of trash at designated trash cans",
        "Earn points for every piece of trash you dispose",
        "Use your points to redeem gift cards",
      ],
    },
    {
      id: 2,
      title: "Why Participate?",
      description: [
        "Every piece of trash you pick up helps reduce pollution and protect the environment",
        "Earn points for your efforts and redeem them for gift cards",
        "Join a growing community, working together to make the world a better place",
      ],
    },
    {
      id: 3,
      title: "Our Mission",
      description: [
        "Reduce pollution and landfill waste",
        "Promote recycling and sustainable practices",
        "Empower individuals to take action and be rewarded for their efforts",
      ],
    },
  ];

  return (
    <section className="info" id="info">
      {cardInfo.map((card) => (
        <Card key={card.id} title={card.title} description={card.description} />
      ))}
    </section>
  );
}
