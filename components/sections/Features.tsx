import Image from "next/image";

const ICON_STAR = (
  <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M33.5234 14.449C33.5234 14.449 25.3481 16.8309 22.0577 17.8865C24.9666 16.2477 32.3963 11.7817 32.3963 11.7817C34.1189 10.0371 34.0993 7.19994 32.3544 5.47995C30.6096 3.75749 27.7721 3.77718 26.0519 5.52178C26.0519 5.52178 21.9568 12.9874 20.3744 16.0583C21.2727 12.8422 23.367 4.43171 23.367 4.43171C23.3497 1.97598 21.3318 -0.0146823 18.8806 8.15954e-05C16.4295 0.0173061 14.4361 2.03504 14.4533 4.48585C14.4533 4.48585 16.8356 12.6601 17.8913 15.95C16.2523 13.0415 11.7857 5.61282 11.7857 5.61282C10.0408 3.89037 7.20334 3.91005 5.48312 5.65465C3.76044 7.39925 3.78013 10.2364 5.52496 11.9564C5.52496 11.9564 12.9915 16.0509 16.0628 17.6331C12.8463 16.735 4.43475 14.6409 4.43475 14.6409C1.97624 14.6557 -0.0146842 16.6759 8.16059e-05 19.1267C0.0173084 21.5775 2.0353 23.5706 4.48643 23.5534C4.48643 23.5534 12.6618 21.1715 15.9521 20.1159C13.0432 21.7547 5.61355 26.2208 5.61355 26.2208C3.89087 27.9654 3.91056 30.8025 5.65539 32.5225C7.40021 34.2449 10.2377 34.2253 11.9579 32.4807C11.9579 32.4807 16.053 25.015 17.6329 21.9466C16.7347 25.1627 14.6404 33.5732 14.6404 33.5732C14.6576 36.024 16.6756 38.0171 19.1267 37.9999C21.5778 37.9827 23.5712 35.9649 23.554 33.5141C23.554 33.5141 21.1718 25.3398 20.116 22.05C21.755 24.9584 26.2217 32.3871 26.2217 32.3871C27.9665 34.1096 30.804 34.0899 32.5242 32.3453C34.2469 30.6007 34.2272 27.7636 32.4824 26.0436C32.4824 26.0436 25.0158 21.9491 21.9445 20.3669C25.161 21.265 33.5726 23.359 33.5726 23.359C36.0237 23.3418 38.0171 21.3241 37.9999 18.8733C37.9827 16.4225 35.9647 14.4293 33.5135 14.4466L33.5234 14.449ZM20.6574 19.7616L19.6706 20.7606C19.6534 20.7261 19.6411 20.7089 19.6361 20.7089L18.2309 20.7187C18.2432 20.6843 18.2482 20.6622 18.2432 20.6572L17.2441 19.6705C17.2785 19.6533 17.2958 19.641 17.2958 19.6361L17.2859 18.231C17.3204 18.2433 17.3425 18.2483 17.3474 18.2433L18.3343 17.2443C18.3515 17.2788 18.3638 17.296 18.3687 17.296L19.774 17.2861C19.7617 17.3206 19.7567 17.3427 19.7617 17.3477L20.7608 18.3344C20.7264 18.3516 20.7091 18.3639 20.7091 18.3688L20.719 19.7739C20.6845 19.7616 20.6624 19.7566 20.6574 19.7616Z" fill="#F15822"/>
  </svg>
);

const ICON_GRID = (
  <svg width="39" height="38" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M24.5 5.60691V13.4745H16.5814C15.1485 13.4745 13.9745 14.6485 13.9745 16.0814V24H6.10691C4.67403 24 3.5 22.826 3.5 21.3931V5.60691C3.5 4.17403 4.67403 3 6.10691 3H21.8931C23.326 3 24.5 4.17403 24.5 5.60691Z" fill="#F15822"/>
    <path d="M35.5 16.6069V32.3931C35.5 33.826 34.326 35 32.8931 35H17.1069C15.674 35 14.5 33.826 14.5 32.3931V24.5255H22.4186C23.8515 24.5255 25.0255 23.3515 25.0255 21.9186V14H32.8931C34.326 14 35.5 15.174 35.5 16.6069Z" fill="#F15822"/>
  </svg>
);

const ICON_WAVE = (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M18.4248 9.68665C12.1961 13.5267 8.40562 19.2355 8.49913 23.9027C9.67631 20.916 12.4862 17.7243 16.3893 15.3168C23.0256 11.2241 30.3045 10.9524 32.6493 14.709C34.9916 18.4656 31.5104 24.8276 24.8741 28.9203C23.4692 29.7856 22.0355 30.4792 20.6257 31.0012C23.5099 30.5316 26.6075 29.3851 29.5709 27.5592C37.557 22.6346 41.5344 14.6423 38.456 9.7081C35.3776 4.77395 26.4085 4.76441 18.4224 9.68665H18.4248Z" fill="#F15822"/>
    <path d="M29.8975 37.1295C35.7405 32.6983 38.9752 26.6301 38.44 21.9663C37.5498 25.0651 35.0518 28.5258 31.3901 31.301C25.1655 36.0223 17.938 36.9786 15.2456 33.4388C12.5557 29.899 15.4208 23.203 21.6453 18.4841C22.9627 17.4847 24.3257 16.6555 25.6814 16.0012C22.8523 16.7418 19.8744 18.1797 17.0957 20.2887C9.60662 25.9686 6.40077 34.3423 9.93536 38.9941C13.47 43.6435 22.4084 42.8095 29.8999 37.1295H29.8975Z" fill="#F15822"/>
  </svg>
);

const ICON_PLAY = (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M10.1725 14.7728H7.81746C6.25865 14.7728 4.995 15.9663 4.995 17.4385V30.1071C4.995 31.5793 6.25865 32.7728 7.81746 32.7728H10.1725C11.7313 32.7728 12.995 31.5793 12.995 30.1071V17.4385C12.995 15.9663 11.7313 14.7728 10.1725 14.7728Z" fill="#F15822"/>
    <path d="M42.6153 22.8715L28.7133 9.163C27.8758 8.33748 26.4224 8.90884 26.4224 10.0638V15.3402H16.6193C15.1763 15.3402 13.995 16.4788 13.995 17.8696V29.8884C13.995 31.2792 15.1763 32.4179 16.6193 32.4179H26.4224V37.4828C26.4224 38.6377 27.8758 39.207 28.7133 38.3836L42.6153 24.673C43.1216 24.1728 43.1216 23.3737 42.6153 22.8735V22.8715Z" fill="#F15822"/>
  </svg>
);

const FEATURES = [
  {
    icon: ICON_STAR,
    title: "Comfortable & Premium Facilities",
    body: "Experience a private and premium sport center environment in South Jakarta. Our facilities are designed for maximum comfort, ensuring a clean and focused space for your Pilates or Yoga sessions.",
  },
  {
    icon: ICON_GRID,
    title: "Family-Friendly Sport Center",
    body: "A dedicated family sport center where parents and children stay active together. From kids' academies to adult wellness programs, we provide a safe and inclusive environment for the whole family.",
  },
  {
    icon: ICON_WAVE,
    title: "Strategic Location in South Jakarta",
    body: "Ideally located in Lebak Bulus. Our strategic location provides easy access for busy parents to enjoy their workout sessions without the long commute.",
  },
  {
    icon: ICON_PLAY,
    title: "Easy Online Booking System",
    body: "Secure your slot instantly through our practical online booking system. Whether you are booking a Pilates class or a Mini Soccer field, our platform makes it easy to manage your schedule anytime.",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="bg-[var(--color-brand-secondary)] scroll-mt-20"
      style={{
        paddingTop: "var(--space-4xl)",
        paddingBottom: "var(--space-4xl)",
        paddingLeft: "var(--space-l)",
        paddingRight: "var(--space-l)",
      }}
    >
      <div className="mx-auto flex max-w-[var(--max-w)] flex-col items-center gap-[var(--space-2xl)] lg:flex-row lg:items-center lg:gap-[var(--space-xl)]">
        <div className="flex w-full max-w-[384px] shrink-0 items-center justify-center">
          <Image
            src="/uploads/feature-side.webp"
            alt="Three basketball players in colorful jerseys"
            width={768}
            height={761}
            sizes="(max-width: 1024px) 80vw, 384px"
            className="h-auto w-full object-contain"
          />
        </div>
        <ul className="m-0 grid w-full list-none grid-cols-1 gap-[var(--space-l)] p-0 sm:grid-cols-2">
          {FEATURES.map((f) => (
            <li key={f.title} className="flex flex-col gap-[var(--space-s)]">
              {f.icon}
              <h3
                className="font-display text-white"
                style={{ fontSize: "var(--text-l)", fontWeight: 600, lineHeight: 1.2 }}
              >
                {f.title}
              </h3>
              <p
                className="text-white/85"
                style={{ fontSize: "var(--text-m)", fontWeight: 300, lineHeight: 1.55 }}
              >
                {f.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
