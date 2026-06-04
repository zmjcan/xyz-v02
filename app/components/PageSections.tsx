import Link from "next/link";
import { FadeIn } from "./FadeIn";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { SectionRail } from "./SectionRail";
import { galleryItems } from "../data/site";
import { CompassMark } from "./CompassMark";

function Shell({ index, children, tone = "light" }: { index: string; children: React.ReactNode; tone?: "light" | "dark" }) {
  return (
    <div className={`page-shell ${tone}`}>
      <Header />
      <SectionRail index={index} />
      <main>
        <FadeIn>{children}</FadeIn>
      </main>
      <Footer />
    </div>
  );
}

function MockupPage({
  src,
  alt,
  variant,
  children
}: {
  src: string;
  alt: string;
  variant?: "home" | "profile" | "logbook" | "contact";
  children?: React.ReactNode;
}) {
  const nav = [
    ["HOME", "/", "14.5%"],
    ["PROFILE", "/profile", "23.8%"],
    ["LOGBOOK", "/logbook", "33.3%"],
    ["GALLERY", "/gallery", "43.3%"],
    ["CONTACT", "/contact", "53.5%"]
  ] as const;

  return (
    <main className="mockup-main">
      <div className={`mockup-artboard ${variant ?? ""}`}>
        <img src={src} alt={alt} />
        <Link className="mock-logo-link" href="/" aria-label="Home" />
        {nav.map(([label, href, left]) => (
          <Link className="mock-nav-link" href={href} key={href} style={{ left }} aria-label={label} />
        ))}
        <details className="mock-menu">
          <summary aria-label="Open menu"><span /></summary>
          <nav aria-label="Menu navigation">
            {nav.map(([label, href]) => (
              <Link href={href} key={href}>{label}</Link>
            ))}
          </nav>
        </details>
        {children}
      </div>
    </main>
  );
}

export function BirthdayHome() {
  return (
    <MockupPage src="/mockups/01-home-birthday.png" alt="Xia Yizhou birthday home page mockup" variant="home">
      <div className="home-hero-reveal" aria-hidden="true" />
      <Link className="mock-tile-link profile" href="/profile" aria-label="Open Profile" />
      <Link className="mock-tile-link logbook" href="/logbook" aria-label="Open Logbook" />
    </MockupPage>
  );
}

export function ProfilePage() {
  return (
    <MockupPage src="/mockups/02-profile.png" alt="Xia Yizhou profile dossier page mockup" variant="profile">
      <div className="profile-hero-reveal" aria-hidden="true" />
    </MockupPage>
  );
}

export function LogbookPage() {
  return (
    <MockupPage src="/mockups/03-logbook.png" alt="Xia Yizhou logbook page mockup" variant="logbook">
      <div className="logbook-message-loader" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </div>
    </MockupPage>
  );
}

export function GalleryPage() {
  return (
    <main className="mockup-main">
      <div className="gallery-artboard">
        <header className="mock-header">
          <Link href="/" className="mock-brand" aria-label="Home">
            <CompassMark />
          </Link>
          <nav aria-label="Primary navigation">
            <Link href="/">HOME</Link>
            <Link href="/profile">PROFILE</Link>
            <Link href="/logbook">LOGBOOK</Link>
            <Link className="active" href="/gallery">GALLERY</Link>
            <Link href="/contact">CONTACT</Link>
          </nav>
          <details className="mock-menu gallery-menu">
            <summary aria-label="Open menu"><span /></summary>
            <nav aria-label="Menu navigation">
              <Link href="/">HOME</Link>
              <Link href="/profile">PROFILE</Link>
              <Link href="/logbook">LOGBOOK</Link>
              <Link href="/gallery">GALLERY</Link>
              <Link href="/contact">CONTACT</Link>
            </nav>
          </details>
        </header>
        <aside className="mock-gallery-rail" aria-hidden="true">
          <strong>04</strong>
          <i />
          <span>LIGHTSEEKER NAVY</span>
        </aside>
        <div className="mock-gallery-watermark" aria-hidden="true">GALLERY</div>
        <section className="mock-gallery-hero">
          <p>EXECUTIVE CAPTAIN / GRAVITY EVOLER</p>
          <h1>GALLERY</h1>
          <h2>图库</h2>
          <small>NINE PRESERVED VISUAL RECORDS</small>
        </section>
        <section className="mock-gallery-filters" aria-label="Gallery filters">
          {["ALL", "OFFICIAL", "DAILY", "MISSION", "TRAINING", "PRIVATE"].map((item) => (
            <button className={item === "ALL" ? "active" : ""} key={item}>{item}</button>
          ))}
        </section>
        <section className="mock-gallery-grid" aria-label="Xia Yizhou gallery">
          {galleryItems.map((item) => (
            <article key={item.title}>
              <div className={`gallery-art art-${item.index}`} role="img" aria-label={`${item.title} gallery image`} />
              <span>{String(item.index + 1).padStart(2, "0")} / {item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.caption}</p>
            </article>
          ))}
        </section>
        <footer className="mock-gallery-footer">
          <span>© LIGHTSEEKER NAVY</span>
          <i />
          <b>XIA</b>
          <CompassMark />
          <b>YIZHOU</b>
          <i />
          <span>ALL RIGHTS RESERVED.</span>
        </footer>
      </div>
    </main>
  );
}

export function ContactPage() {
  return (
    <MockupPage src="/mockups/04-contact-skyhaven.png" alt="Skyhaven contact page mockup" variant="contact">
      <form className="mock-contact-form" aria-label="Send a message to Xia Yizhou">
        <label>
          <span>Your Name</span>
          <input name="name" autoComplete="name" />
        </label>
        <label>
          <span>Subject</span>
          <input name="subject" />
        </label>
        <label>
          <span>Message</span>
          <textarea name="message" />
        </label>
        <button type="submit" aria-label="Send Message"><span>Send Message</span></button>
      </form>
    </MockupPage>
  );
}
