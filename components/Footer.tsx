import Link from "next/link";

import PokiLogo from "@/assets/images/poki-logo.svg";

const LINKS = [
  { href: "https://about.poki.com", label: "About" },
  { href: "https://developers.poki.com", label: "Poki for Developers" },
  { href: "https://jobs.poki.com", label: "Jobs" },
  { href: "https://kids.poki.com", label: "Poki Kids" },
  { href: "/en/c/global-privacy-statement", label: "Privacy Statement" },
  { href: "/en/c/global-cookie-statement", label: "Cookie Statement" },
  { href: "/en/c/global-terms-of-use", label: "Terms of Use" },
  { href: "/en/c/faq", label: "FAQ" },
  { href: "/en/c/contact", label: "Contact" },
];

export const Footer = () => {
  return (
    <footer className="footer-wave mt-28 bg-white px-8">
      <div className="flex gap-8 py-6">
        <div className="flex gap-4">
          <PokiLogo className="h-6" />
          <span className="font-bold text-blue-denim">Let the world play</span>
        </div>

        <div className="flex grow justify-end">
          <ul className="flex gap-5">
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>EN</div>
      </div>
    </footer>
  );
};