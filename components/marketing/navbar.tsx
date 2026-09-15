import CtaLink from "./cta-link";

const navLinks = [
  { href: "#how-it-works", label: "Nasıl Çalışır" },
  { href: "#features", label: "Özellikler" },
  { href: "#pricing", label: "Fiyatlandırma" },
  { href: "#faq", label: "SSS" },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b-4 border-black bg-yellow-300">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <span className="text-2xl font-bold uppercase tracking-tight text-black sm:text-3xl">
          Siparişat
        </span>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-bold uppercase tracking-tight text-black underline-offset-4 hover:underline"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#login"
            className="hidden text-sm font-bold uppercase tracking-tight text-black underline-offset-4 hover:underline sm:inline"
          >
            Giriş Yap
          </a>
          <CtaLink href="#pricing" size="sm" className="px-4 text-sm">
            Ücretsiz Başla
          </CtaLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
