"use client";

import { useEffect, useState, type CSSProperties, type ReactNode } from "react";

type BookingTarget = {
  label: string;
  src: string;
};

type Props = {
  title?: string;
  targets: BookingTarget[];
  buttonLabel: ReactNode;
  buttonClassName?: string;
  buttonStyle?: CSSProperties;
};

export function BookingModal({ title, targets, buttonLabel, buttonClassName, buttonStyle }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={buttonClassName}
        style={buttonStyle}
      >
        {buttonLabel}
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className={`relative flex max-h-[92vh] w-full flex-col overflow-hidden bg-white shadow-2xl ${
              targets.length > 1 ? "max-w-6xl" : "max-w-3xl"
            }`}
            style={{ borderRadius: "var(--radius-l)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
              <h3 className="font-display text-xl font-bold" style={{ color: "#1a3e4d" }}>
                {title ?? "Booking"}
              </h3>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full text-gray-700 transition hover:bg-gray-100"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <div
              className={`grid flex-1 gap-4 overflow-y-auto p-4 md:gap-6 md:p-6 ${
                targets.length > 1 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"
              }`}
            >
              {targets.map((t) => (
                <div key={t.src} className="flex flex-col">
                  <div
                    className="mb-2 text-center font-bold"
                    style={{ color: "#1a3e4d" }}
                  >
                    {t.label}
                  </div>
                  <iframe
                    src={t.src}
                    title={t.label}
                    loading="lazy"
                    className="h-[650px] w-full"
                    style={{
                      border: "1px solid #e5e7eb",
                      borderRadius: "8px",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
