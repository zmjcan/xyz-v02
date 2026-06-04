import { profileFacts } from "../data/site";

export function InfoGrid() {
  return (
    <div className="info-grid">
      {profileFacts.map(([zh, en, value]) => (
        <article className="info-card" key={en}>
          <span>{zh}</span>
          <small>{en}</small>
          <strong>{value}</strong>
        </article>
      ))}
    </div>
  );
}
