export function SectionRail({ index, label = "LIGHTSEEKER NAVY" }: { index: string; label?: string }) {
  return (
    <aside className="section-rail" aria-hidden="true">
      <span>{index}</span>
      <i />
      <b>{label}</b>
    </aside>
  );
}
