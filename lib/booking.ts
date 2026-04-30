import siteConfig from "@/content/site.json";
import type { BookingTarget } from "@/lib/content";

export function bookingUrl(target: BookingTarget): string {
  const { slug } = target;
  if (/^https?:\/\//i.test(slug)) return slug;
  const base = siteConfig.booking.base.replace(/\/$/, "");
  return `${base}/${slug.replace(/^\//, "")}`;
}
