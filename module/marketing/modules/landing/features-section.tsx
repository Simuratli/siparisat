import { HugeiconsIcon } from "@hugeicons/react";
import {
  AiMagicIcon,
  AlertCircleIcon,
  Location01Icon,
  KanbanIcon,
} from "@hugeicons/core-free-icons";

const features = [
  {
    icon: AiMagicIcon,
    title: "AI ile Otomatik Sipariş Çıkarma",
    description:
      "Claude API, WhatsApp mesajını okur; ürün, adet ve teslimat adresini otomatik çıkarır.",
  },
  {
    icon: AlertCircleIcon,
    title: "Çift Satış ve Stok Çakışmasını Önle",
    description: "Aynı ürünü iki kere satmanı engelleyen uyarılarla stok karmaşasına son.",
  },
  {
    icon: Location01Icon,
    title: "Eksik Bilgi Uyarısı",
    description: "Adres ya da ürün bilgisi eksikse Siparişat seni anında uyarır.",
  },
  {
    icon: KanbanIcon,
    title: "Kanban Sipariş Panosu",
    description:
      "Siparişlerini Yeni, Onay Bekliyor, Onaylandı, Kargoda ve Tamamlandı kolonlarında takip et.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="flex min-h-screen w-full flex-col justify-center border-b-4 border-black bg-white px-4 py-20 sm:px-6">
      <div className="mx-auto w-full max-w-5xl">
        <h2 className="text-center text-3xl font-bold uppercase tracking-tight text-black sm:text-4xl">
          Özellikler
        </h2>
        <p className="mt-3 text-center text-base font-medium text-black/70">
          El yapımı ürün satıcıları için WhatsApp siparişlerini kaostan kontrole çevirir.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex gap-4 border-4 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
            >
              <div className="flex size-12 shrink-0 items-center justify-center border-2 border-black bg-lime-300">
                <HugeiconsIcon icon={feature.icon} size={24} strokeWidth={2.5} />
              </div>
              <div>
                <h3 className="text-lg font-bold uppercase tracking-tight text-black">
                  {feature.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-black/70">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
