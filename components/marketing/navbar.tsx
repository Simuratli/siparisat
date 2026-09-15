import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
          <Show when="signed-out">
            <SignInButton mode="modal" forceRedirectUrl="/dashboard">
              <button className="hidden text-sm font-bold uppercase tracking-tight text-black underline-offset-4 hover:underline sm:inline">
                Giriş Yap
              </button>
            </SignInButton>
            <SignUpButton mode="modal" forceRedirectUrl="/dashboard">
              <button
                className={cn(
                  buttonVariants({ size: "sm" }),
                  "rounded-none border-2 border-black bg-yellow-300 px-4 text-sm font-bold uppercase text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-yellow-400 hover:translate-x-0 hover:translate-y-0 active:shadow-none active:translate-x-1 active:translate-y-1"
                )}
              >
                Ücretsiz Başla
              </button>
            </SignUpButton>
          </Show>
          <Show when="signed-in">
            <UserButton />
          </Show>
        </div>
      </div>
    </header>
  );
};


export default Navbar;
