import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link className="cta" href={href}>
      <span>{children}</span>
      <ArrowRight size={16} />
    </Link>
  );
}
