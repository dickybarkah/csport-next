import Link from "next/link";
import site from "@/content/site.json";

const NAV = [
  { label: "Facilities", href: "#facilities" },
  { label: "Classes", href: "#classes" },
  { label: "Events", href: "#events" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-display text-xl font-extrabold tracking-tight"
        >
          {site.name}
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-700 transition hover:text-(--color-brand-orange)"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#classes"
          className="hidden rounded-full bg-(--color-brand-orange) px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 md:inline-flex"
        >
          Book Now
        </a>
      </div>
    </header>
  );
}
