import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

const footerLinks = [
  { label: "Emergency Plumbing (Mattoon)", href: "/emergency-plumbing-mattoon-il" },
  { label: "Emergency Plumbing (Charleston)", href: "/emergency-plumbing-charleston-il" },
  { label: "Drain Cleaning (Mattoon)", href: "/drain-cleaning-mattoon-il" },
  { label: "Drain Cleaning (Charleston)", href: "/drain-cleaning-charleston-il" },
  { label: "Water Heater Repair (Mattoon)", href: "/water-heater-repair-mattoon-il" },
  { label: "Water Heater Repair (Charleston)", href: "/water-heater-repair-charleston-il" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-24">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid sm:grid-cols-2 gap-2 text-sm">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="mt-8 pt-6 border-t border-slate-800 text-sm flex flex-col sm:flex-row justify-between gap-4">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <p>
            Serving Mattoon, IL and Charleston, IL &middot;{" "}
            <a href="/privacy-policy" className="hover:text-white underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
