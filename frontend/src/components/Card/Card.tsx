import "./card.css";

interface CardProps {
  title: string;
  description: Array<string>;
}

export default function Card(props: CardProps) {
  return (
    <div className="page-component-padding card">
      <h2 className="card-title">{props.title}</h2>
      <ul className="card-list">
        {props.description.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}
