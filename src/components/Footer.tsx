import { Link } from "react-router-dom";
import { PawPrint, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="border-t bg-card">
    <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3">
      {/* Brand */}
      <div>
        <Link to="/" className="mb-3 flex items-center gap-2 text-lg font-bold">
          <PawPrint className="h-6 w-6 text-primary" />
          <span className="font-serif">PawsElite</span>
        </Link>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Premium pet breeding with love, care and over 15 years of experience bringing joy to families.
        </p>
      </div>

      {/* Links */}
      <div>
        <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Quick Links</h4>
        <ul className="space-y-2 text-sm">
          {[
            { to: "/", label: "Home" },
            { to: "/breeds", label: "Our Breeds" },
            { to: "/gallery", label: "Gallery" },
            { to: "/contact", label: "Contact Us" },
          ].map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="text-foreground/70 transition-colors hover:text-primary">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Social */}
      <div>
        <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">Follow Us</h4>
        <div className="flex gap-3">
          {[
            { icon: Facebook, label: "Facebook" },
            { icon: Instagram, label: "Instagram" },
            { icon: Twitter, label: "Twitter" },
          ].map(({ icon: Icon, label }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-foreground/70 transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </div>

    <div className="border-t py-4 text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} PawsElite. All rights reserved.
    </div>
  </footer>
);

export default Footer;
