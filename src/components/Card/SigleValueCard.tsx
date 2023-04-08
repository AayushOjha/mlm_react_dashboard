type Props = {
  title: string;
  value: string;
  icon?: string;
};

function SigleValueCard({ title, value, icon }: Props) {
  return (
    <div className="card single-value-card">
      <div className="title">
        <i className={`pi ${icon || ""}`}></i>
        {title}
      </div>
      <div className="heading__lg value primary_colored">{value}</div>
    </div>
  );
}

export { SigleValueCard };
