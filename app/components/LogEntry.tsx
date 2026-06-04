export function LogEntry({
  date,
  location,
  weather,
  title,
  body,
  index
}: {
  date: string;
  location: string;
  weather: string;
  title: string;
  body: string;
  index: number;
}) {
  return (
    <article className="log-entry">
      <div className="log-stamp">
        <strong>{date}</strong>
        <span>{location} / {weather}</span>
      </div>
      <div className="log-preview" aria-hidden="true">
        <span>{String(index + 1).padStart(2, "0")}</span>
      </div>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </article>
  );
}
