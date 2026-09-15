import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02Icon, WhatsappIcon } from "@hugeicons/core-free-icons";
import {MarketingCtaLink} from "@/components/marketing";

const HeroSection = () => {
  return (
    <section id="hero" className="flex min-h-screen w-full flex-col items-center justify-center border-b-4 border-black bg-white px-4 py-20 sm:px-6">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center gap-6 text-center">
        <span className="inline-flex items-center gap-2 border-2 border-black bg-lime-300 px-3 py-1 text-sm font-bold uppercase tracking-tight text-black">
          <HugeiconsIcon icon={WhatsappIcon} size={16} strokeWidth={2.5} />
          Yeni: WhatsApp Business Cloud API entegrasyonu
        </span>

        <h1 className="text-4xl font-bold uppercase leading-none tracking-tight text-black sm:text-6xl">
          WhatsApp Mesajını,
          <br />
          Siparişe Çevir.
        </h1>

        <p className="max-w-2xl text-base font-medium text-black/70 sm:text-lg">
          Siparişat; WhatsApp&apos;tan gelen müşteri mesajlarını yapay zekayla okuyup
          yapılandırılmış siparişlere çevirir. El yapımı ürün satıcıları için kaçırılan
          siparişlere, yanlış adreslere ve çift satışa son.
        </p>

        <div className="flex w-full flex-col items-center justify-center gap-4 pt-2 sm:flex-row">
          <MarketingCtaLink href="#pricing">
            Hemen Başla
            <HugeiconsIcon icon={ArrowRight02Icon} size={18} strokeWidth={2.5} />
          </MarketingCtaLink>
          <MarketingCtaLink href="#how-it-works" variant="outline">
            Nasıl Çalışır?
          </MarketingCtaLink>
        </div>
      </div>
    </section>
  );
};


export default HeroSection;
