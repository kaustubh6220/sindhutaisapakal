'use client'

import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const LegacySection = () => {

  const router = useRouter();

  return (
    <section
      className="relative w-full bg-cover bg-center h-[460px]"
      style={{
        backgroundImage: "url('/assets/images/bg-legacy.png')",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* content */}
      <div className="relative grid grid-cols-8 gap-12 items-center">
        <div className="col-span-1" />

        <div className="col-span-6 py-16 mx-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            The Legacy and <br /> The Responsibility
          </h2>

          <p className="text-black leading-relaxed max-w-2xl text-sm">
            Sindhutai gave away her own daughter “Mamata” to the Shrimant Dagdu
            Sheth Halwai trust of Pune, to eliminate the feeling of partiality
            between her own child and the adopted children. Years later and
            after completing her education, Mamata-tai – as she is lovingly
            called by the children, started assisting “Maai”. After the sad
            demise of Sindhutai in Jan 2022, Mamata Sindhutai Sapakal undertook
            the responsibility of children
          </p>

          <div className="flex gap-4 mt-8">
            <Button onClick={() => router.push("/mamtatai")} className="bg-yellow-400 text-black px-6 py-3 font-semibold rounded hover:bg-yellow-500 transition">
              About Mamtatai
            </Button>

            <Button onClick={() => router.push("/donate")} className="bg-yellow-400 text-black px-6 py-3 font-semibold rounded hover:bg-yellow-500 transition">
              Appeal for Donation
            </Button>
          </div>
        </div>

        <div className="col-span-1" />
      </div>
    </section>
  );
};

export default LegacySection;
