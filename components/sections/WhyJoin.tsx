import Image from "next/image";

const ICON1 = (
  <svg width="56" height="50" viewBox="0 0 78 69" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M36.2113 68.4441C27.6525 66.7903 20.075 61.5118 15.3244 53.4233C14.7457 52.4384 15.0774 51.1715 16.0643 50.594C17.0513 50.0154 18.3207 50.3475 18.8993 51.3313C26.2894 63.9165 38.7902 66.2356 48.026 64.2098C59.4907 61.6944 67.6263 52.6404 68.7516 41.1417C68.8626 40.005 69.8758 39.1741 71.0148 39.2848C72.1504 39.4012 72.9864 40.4067 72.8744 41.5434C71.5706 54.8591 62.1667 65.342 48.9146 68.2477C44.5928 69.1962 40.2894 69.2316 36.2113 68.4429V68.4441Z" fill="#BBE90D"/>
    <path d="M31.5991 19.9457C19.6095 23.3 18.1857 25.0839 17.5853 37.4967C14.2242 25.5301 12.4368 24.1092 0 23.51C11.9896 20.1557 13.4134 18.3718 14.0138 5.95898C17.3749 17.9244 19.1623 19.3454 31.6003 19.9446L31.5991 19.9457Z" fill="#CFEF55"/>
    <path d="M78 13.9856C66.0104 17.3399 64.5866 19.1237 63.9862 31.5366C60.6251 19.5711 58.8376 18.1502 46.3997 17.551C58.3893 14.1967 59.8131 12.4129 60.4135 0C63.7746 11.9655 65.5621 13.3864 78 13.9856Z" fill="#CFEF55"/>
  </svg>
);

const ICON2 = (
  <svg width="36" height="64" viewBox="0 0 41 73" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M18.39 43.1298C14.44 47.5898 11.46 52.5598 12.17 59.4498C12.43 62.0098 13.67 65.1998 15.5 67.7498C17.06 69.9398 19.06 71.6598 21.25 72.1198C13.51 71.4098 6.46998 67.0498 2.75998 60.5798C-0.950016 54.0898 -1.33002 45.4998 4.25998 36.3698C5.53998 34.2798 7.27998 32.4098 9.17998 30.6398C13.85 26.2598 19.51 22.4498 22 17.1198C25.25 10.6198 22.5 2.11981 15.25 0.11981C22.25 -0.88019 31.11 4.69981 33.08 11.6198C34.92 18.0398 33.92 24.5398 30.42 29.7898C27.29 34.6798 22.36 38.6398 18.4 43.1198L18.39 43.1298Z" fill="#BBE90D"/>
    <path d="M28.94 61.4301C28.44 65.9301 30.46 68.4101 33.5 71.1201C32.19 71.3201 30.98 71.3601 29.86 71.2801H29.84C29.64 71.2701 29.44 71.2601 29.24 71.2301C28.7 71.1601 28.18 71.0701 27.69 70.9601C27.44 70.9001 27.2 70.8301 26.97 70.7601C26.8 70.7201 26.64 70.6601 26.47 70.6001C20.42 68.5301 18.03 62.5101 17.75 60.3701C17.16 55.8701 18.36 53.0401 20 50.3701C24.69 42.7401 35.58 37.7901 36 27.6201C39.83 30.7901 43.5 40.7001 36 48.7001C32.5 52.7001 29.69 55.6801 28.94 61.4301Z" fill="#BBE90D"/>
  </svg>
);

const ICON3 = (
  <svg width="48" height="56" viewBox="0 0 55 63" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M22.8464 14.2369C29.6551 12.271 36.6801 12.7056 43.0479 16.4222C48.3177 19.7002 51.8322 24.5054 53.8079 30.188C55.5631 35.8706 55.3468 41.7684 53.367 47.2317C51.1709 54.0069 46.5583 60.3435 39.5333 62.9634C38.4353 63.1828 38.2149 62.3094 38.4353 61.4321C40.1905 57.2808 43.7051 51.8176 39.9742 47.8857C39.0966 47.0123 37.7781 47.447 36.6801 47.447C36.0229 47.6663 35.3616 47.8857 34.7044 48.1009C28.557 50.0669 22.1892 50.7249 16.0377 48.5396C10.9884 46.5737 6.81663 43.2957 3.95927 38.7058C3.51842 37.8325 2.86123 36.7398 2.42038 35.8665C-3.50659 23.1975 1.76319 6.36902 14.7193 0.25181C15.3764 0.0324675 16.0377 -0.186875 16.6949 0.25181C16.9153 0.471152 16.6949 0.905775 16.6949 1.34446C15.156 5.06109 12.9599 8.77367 13.6212 12.9249C13.8416 14.2369 14.7193 15.1102 15.8173 15.3296C18.2338 15.7683 20.6503 15.3296 22.8464 14.2369Z" fill="#BBE90D"/>
    <path d="M43.2985 29.7156C31.3089 33.0699 29.8851 34.8537 29.2847 47.2666C25.9236 35.3011 24.1362 33.8802 11.6982 33.281C23.6879 29.9267 25.1117 28.1428 25.7121 15.73C29.0731 27.6954 30.8606 29.1164 43.2985 29.7156Z" fill="#F15822"/>
  </svg>
);

const REASONS = [
  { title: "Built-In Squad",         body: "Kids, moms, and dads, everyone trains and plays together in one place.",                        icon: ICON1 },
  { title: "Turn Play into Ritual",  body: "Through our member events, sports become a family routine everyone looks forward to.",          icon: ICON2 },
  { title: "Stay Active & Connected",body: "The court becomes a space for families to talk, grow, and cheer each other on.",                icon: ICON3 },
];

function ArrowChip() {
  return (
    <span
      className="mx-2 inline-flex items-center justify-center bg-[var(--color-brand-tertiary)] text-white align-middle"
      style={{
        borderRadius: "var(--radius-full)",
        padding: "0.4rem 0.7rem",
        verticalAlign: "middle",
      }}
      aria-hidden="true"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="5 12 19 12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    </span>
  );
}

export function WhyJoin() {
  return (
    <section
      className="relative overflow-hidden bg-[var(--color-brand-secondary)]"
      style={{ paddingLeft: "var(--space-l)", paddingRight: "var(--space-l)" }}
    >
      <Image
        src="/uploads/why-side.png"
        alt=""
        width={1536}
        height={1529}
        sizes="(max-width: 1024px) 0px, 448px"
        className="pointer-events-none absolute -bottom-[35%] -left-[10%] hidden w-[448px] lg:block"
        aria-hidden="true"
      />

      <div
        className="mx-auto flex w-full max-w-[var(--max-w)] flex-col gap-[var(--space-xl)] lg:w-[80%] lg:flex-row lg:items-center"
        style={{ paddingTop: "var(--space-2xl)", paddingBottom: "var(--space-2xl)" }}
      >
        <div className="lg:flex-1">
          <h2
            className="font-display text-white"
            style={{ fontSize: "var(--text-3xl)", fontWeight: 700, lineHeight: 1.05 }}
          >
            Why Join<br />
            the <ArrowChip /> CSport <br />
            Squad?
          </h2>
        </div>

        <ul className="m-0 flex w-full list-none flex-col gap-[var(--space-m)] p-0 lg:flex-1 lg:items-end">
          {REASONS.map((r) => (
            <li
              key={r.title}
              className="flex w-full max-w-[560px] flex-row flex-nowrap items-center gap-[var(--space-m)] bg-[var(--color-brand-primary)]"
              style={{
                padding: "var(--space-s)",
                borderRadius: "var(--radius-m)",
              }}
            >
              <div
                className="flex shrink-0 items-center justify-center self-center bg-[var(--color-brand-tertiary)]"
                style={{
                  padding: "16px 20px",
                  borderRadius: "var(--radius-s)",
                }}
              >
                {r.icon}
              </div>
              <div className="flex flex-1 flex-col gap-[var(--space-2xs)]">
                <h3
                  className="font-display text-[var(--color-brand-dark)]"
                  style={{ fontSize: "var(--text-l)", fontWeight: 700, lineHeight: 1.2 }}
                >
                  {r.title}
                </h3>
                <p
                  className="text-[var(--color-brand-dark)]"
                  style={{ fontSize: "var(--text-xs)", fontWeight: 300, lineHeight: 1.5 }}
                >
                  {r.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
