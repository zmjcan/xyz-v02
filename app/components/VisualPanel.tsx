export function VisualPanel({
  variant,
  label,
  portrait = false,
  asset,
  focus = "center"
}: {
  variant: "ice" | "dark" | "sky" | "gallery";
  label: string;
  portrait?: boolean;
  asset?: string;
  focus?: string;
}) {
  return (
    <div className={`visual-panel ${variant}`}>
      {asset ? <div className="asset-bg" style={{ backgroundImage: `url(${asset})`, backgroundPosition: focus }} /> : null}
      <div className="scan-lines" />
      <div className="orbit one" />
      <div className="orbit two" />
      {asset ? null : portrait ? (
        <div className="portrait-silhouette" role="img" aria-label={label}>
          <span className="head" />
          <span className="coat" />
        </div>
      ) : (
        <div className="ship-silhouette" role="img" aria-label={label}>
          <span />
        </div>
      )}
      <p>{label}</p>
    </div>
  );
}
