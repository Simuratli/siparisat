import { HugeiconsIcon } from "@hugeicons/react";
import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";
import { cn } from "@/lib/utils";
import CtaLink from "../../../../components/marketing/cta-link";

const plans = [
  {
    name: "Starter",
    price: "$19",
    period: "/ay",
    color: "bg-white",
    features: ["Aylık 50 siparişe kadar", "WhatsApp webhook entegrasyonu", "Manuel onay akışı"],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "$39",
    period: "/ay",
    color: "bg-yellow-300",
    features: [
      "Aylık 300 siparişe kadar",
      "Öncelikli AI mesaj işleme",
      "Kanban + envanter takibi",
      "Öncelikli destek",
    ],
    highlighted: true,
  },
  {
    name: "Otomasyon Eklentisi",
    price: "$0.02",
    period: "/mesaj",
    color: "bg-white",
    features: ["Kullanım bazlı ücretlendirme", "Sınırsız mesaj işleme", "Tüm planlara eklenebilir"],
    highlighted: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="flex min-h-screen w-full flex-col justify-center border-b-4 border-black bg-pink-100 px-4 py-20 sm:px-6">
      <div className="mx-auto w-full max-w-5xl">
        <h2 className="text-center text-3xl font-bold uppercase tracking-tight text-black sm:text-4xl">
          Fiyatlandırma
        </h2>
        <p className="mt-3 text-center text-base font-medium text-black/70">
          MVP yalnızca WhatsApp üzerinden çalışır; Instagram ve Etsy yol haritamızda.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "flex flex-col border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]",
                plan.color
              )}
            >
              {plan.highlighted && (
                <span className="mb-3 inline-block w-fit border-2 border-black bg-black px-2 py-0.5 text-xs font-bold uppercase text-white">
                  En Popüler
                </span>
              )}
              <h3 className="text-xl font-bold uppercase tracking-tight text-black">
                {plan.name}
              </h3>
              <div className="mt-2 flex items-end gap-1">
                <span className="text-4xl font-bold text-black">{plan.price}</span>
                <span className="pb-1 text-sm font-medium text-black/70">{plan.period}</span>
              </div>

              <ul className="mt-6 flex flex-1 flex-col gap-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm font-medium text-black">
                    <HugeiconsIcon icon={CheckmarkCircle02Icon} size={18} strokeWidth={2.5} />
                    {feature}
                  </li>
                ))}
              </ul>

              <CtaLink href="#hero" variant="outline" className="mt-8">
                Seç
              </CtaLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
