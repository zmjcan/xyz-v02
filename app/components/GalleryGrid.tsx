import { galleryItems } from "../data/site";

export function GalleryGrid() {
  const categories = ["All", "Official", "Daily", "Mission", "Training", "Private"];
  return (
    <section className="gallery-section" aria-labelledby="gallery-grid-title">
      <div className="category-row" aria-label="Gallery categories">
        {categories.map((category) => (
          <button className={category === "All" ? "selected" : ""} key={category}>{category}</button>
        ))}
      </div>
      <h2 id="gallery-grid-title" className="sr-only">Xia Yizhou gallery</h2>
      <div className="gallery-grid">
        {galleryItems.map((item) => (
          <article className="gallery-card" key={item.title}>
            <div className={`gallery-art art-${item.index}`} role="img" aria-label={`${item.title} portrait concept`} />
            <div>
              <span>{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.caption}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
