import { bookingUrl } from "@/lib/booking";
import type { BookingTarget } from "@/lib/content";

type Props = {
  items: BookingTarget[];
  height?: number;
  gap?: number;
  minWidth?: number;
};

export function BookingIframes({
  items,
  height = 650,
  gap = 16,
  minWidth = 300,
}: Props) {
  if (!items?.length) return null;

  return (
    <div
      className="flex flex-wrap"
      style={{ gap: `${gap}px` }}
    >
      {items.map((item) => (
        <div
          key={item.slug}
          className="flex-1"
          style={{ minWidth: `${minWidth}px` }}
        >
          <div className="text-center mb-2 font-bold text-(--color-brand-ink)">
            Booking dengan {item.name}
          </div>
          <iframe
            src={bookingUrl(item)}
            title={`Booking ${item.name}`}
            loading="lazy"
            className="w-full rounded-lg border border-gray-200"
            style={{ height: `${height}px` }}
          />
        </div>
      ))}
    </div>
  );
}
