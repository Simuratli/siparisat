import { HugeiconsIcon } from "@hugeicons/react";
import {
  ShoppingCart01Icon,
  SecurityCheckIcon,
  CheckmarkCircle02Icon,
} from "@hugeicons/core-free-icons";

const steps = [
  {
    number: "01",
    icon: ShoppingCart01Icon,
    title: "Siparişini Oluştur",
    description: "Tek tıkla yeni sipariş oluştur, ürünleri ve müşteri bilgilerini ekle.",
    color: "bg-yellow-300",
  },
  {
    number: "02",
    icon: SecurityCheckIcon,
    title: "Otomatik Takip Et",
    description: "Siparişat, durum değişikliklerini anlık olarak senin için izler.",
    color: "bg-pink-300",
  },
  {
    number: "03",
    icon: CheckmarkCircle02Icon,
    title: "Teslim Et, Kapat",
    description: "Sipariş teslim edildiğinde tek tıkla onayla ve süreci tamamla.",
    color: "bg-cyan-300",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="flex min-h-screen w-full flex-col justify-center border-b-4 border-black bg-cyan-100 px-4 py-20 sm:px-6">
      <div className="mx-auto w-full max-w-5xl">
        <h2 className="text-center text-3xl font-bold uppercase tracking-tight text-black sm:text-4xl">
          Nasıl Çalışır?
        </h2>
        <p className="mt-3 text-center text-base font-medium text-black/70">
          WhatsApp mesajından onaylı siparişe üç basit adımda ulaş.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="border-4 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
            >
              <div
                className={`inline-flex size-12 items-center justify-center border-2 border-black ${step.color}`}
              >
                <HugeiconsIcon icon={step.icon} size={24} strokeWidth={2.5} />
              </div>
              <span className="mt-4 block text-sm font-bold text-black/40">{step.number}</span>
              <h3 className="mt-1 text-xl font-bold uppercase tracking-tight text-black">
                {step.title}
              </h3>
              <p className="mt-2 text-sm font-medium text-black/70">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
