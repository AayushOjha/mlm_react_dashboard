type Props = {
  title: string;
  value: string;
  icon?: string;
  cardclass?: string;
};

function SingleValueCard({ title, value, icon, cardclass }: Props) {
  return (
    <div className={`card single-value-card ${cardclass || ""}`}>
      <div className="title">
        <i className={`pi ${icon || ""}`}></i>
        {title}
      </div>
      <div className="heading__lg value primary_colored">{value}</div>
    </div>
  );
}

export { SingleValueCard };
