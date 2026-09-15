import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";

const DashboardPage = async () => {
  await auth.protect();

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-6 bg-white px-4 text-center">
      <UserButton />
      <h1 className="text-3xl font-bold uppercase tracking-tight text-black sm:text-4xl">
        Dashboard
      </h1>
      <p className="max-w-md text-base font-medium text-black/70">
        Siparişlerin ve WhatsApp entegrasyonun burada yönetilecek.
      </p>
    </div>
  );
};

export default DashboardPage;
