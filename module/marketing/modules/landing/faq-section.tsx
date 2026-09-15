const faqs = [
  {
    question: "Siparişat hangi platformlarla çalışıyor?",
    answer:
      "Şu an sadece WhatsApp Business Cloud API ile çalışıyoruz. Instagram DM ve Etsy entegrasyonu yol haritamızda yer alıyor.",
  },
  {
    question: "Sipariş bilgileri nasıl çıkarılıyor?",
    answer:
      "Gelen WhatsApp mesajları Claude API ile analiz edilir; ürün, adet, teslimat adresi ve eksik bilgiler otomatik olarak tespit edilir.",
  },
  {
    question: "Siparişler otomatik mi onaylanıyor?",
    answer:
      "Hayır. AI'nin çıkardığı sipariş kartı Kanban panosuna düşer, sen inceleyip onaylar veya düzenlersin.",
  },
  {
    question: "WhatsApp mesaj ücretleri fiyata dahil mi?",
    answer:
      "Starter ve Growth planları belirli bir sipariş limitini kapsar; WhatsApp otomasyonu kullanım bazlı olarak mesaj başına $0.02 ile ayrıca faturalandırılır.",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="flex min-h-screen w-full flex-col justify-center bg-white px-4 py-20 sm:px-6">
      <div className="mx-auto w-full max-w-3xl">
        <h2 className="text-center text-3xl font-bold uppercase tracking-tight text-black sm:text-4xl">
          Sıkça Sorulan Sorular
        </h2>
        <p className="mt-3 text-center text-base font-medium text-black/70">
          Aklına takılan bir şey mi var? Cevabı burada olabilir.
        </p>

        <div className="mt-10 flex flex-col gap-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group border-4 border-black bg-white p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] open:bg-yellow-50"
            >
              <summary className="cursor-pointer list-none text-base font-bold uppercase tracking-tight text-black marker:hidden">
                <span className="flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="shrink-0 border-2 border-black bg-lime-300 px-2 font-bold group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-sm font-medium text-black/70">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
