import type { ReactNode } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CtaLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline";
  size?: "default" | "sm" | "lg";
  className?: string;
};

const CtaLink = ({ href, children, variant = "primary", size = "lg", className }: CtaLinkProps) => {
  return (
    <a
      href={href}
      className={cn(
        buttonVariants({ size, variant: variant === "outline" ? "outline" : "default" }),
        "rounded-none border-2 border-black px-6 text-base font-bold uppercase text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0 hover:translate-y-0 active:shadow-none active:translate-x-1 active:translate-y-1",
        variant === "outline" ? "bg-white hover:bg-white" : "bg-yellow-300 hover:bg-yellow-400",
        className
      )}
    >
      {children}
    </a>
  );
};

export default CtaLink;

