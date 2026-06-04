export function CompassMark({ className = "" }: { className?: string }) {
  return (
    <span className={`compass ${className}`} aria-hidden="true">
      <span />
    </span>
  );
}
