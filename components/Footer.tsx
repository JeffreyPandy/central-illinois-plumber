import { siteConfig } from "@/lib/siteConfig";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 mt-24">
      <div className="max-w-6xl mx-auto px-4 py-10 text-sm flex flex-col sm:flex-row justify-between gap-4">
        <p>
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
          reserved.
        </p>
        <p>Serving Mattoon, IL and Coles County</p>
      </div>
    </footer>
  );
}
