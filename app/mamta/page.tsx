import DonateCTA from "@/components/shared/DonateCTA";

const Mamta = () => {
  return (
    <main className="bg-white mt-20">

      {/* ================= SECTION HEADER ================= */}
      <section className="grid grid-cols-8 pt-24">
        {/* LEFT LINE */}
        <div className="col-span-1 flex items-start justify-end px-4">
          <span className="w-20 h-[2px] bg-black mt-2" />
        </div>

        {/* TITLE */}
        <div className="col-span-7">
          <p className="font-bold tracking-wide">
            MAMATA BAL SADAN – SASWAD, ORPHANAGE FOR GIRLS
          </p>
        </div>
      </section>

      {/* ================= TEXT CONTENT ================= */}
      <section className="grid grid-cols-8 pt-10">
        <div className="col-span-1" />

        <div className="col-span-6">
          <h1 className="text-3xl font-bold leading-snug mb-8">
            Established in 1994 at Kumbharvalan (Saswad), Purandar, Dist. Pune
            HOD – Mr. Deepak Gaikwad who is Maai’s first ever adopted son,
            Current Beneficiaries : 75
          </h1>

          <ul className="list-disc pl-5 text-xs text-gray-600 space-y-3 max-w-xl">
            <li>
              Provide the basic necessities of food, shelter, cloth and medical care.
            </li>
            <li>
              Motivates and supports orphan girls to get educated, learn vocational
              skills & helping them for their professional career.
            </li>
            <li>
              To shape personal life by finding proper alliances and arranging
              marriages. The institute sees that its children are properly settled
              in their life and leading a stable life.
            </li>
          </ul>
        </div>

        <div className="col-span-1" />
      </section>

      {/* ================= IMAGE ROW (BELOW TEXT) ================= */}
      <section className=" py-14 grid grid-cols-8">
        <div className="col-span-1" />

        <div className="col-span-6 grid grid-cols-4 gap-8">
          {[
            "/assets/images/mamta-1.png",
            "/assets/images/mamta-2.png",
            "/assets/images/mamta-3.png",
            "/assets/images/mamta-4.png",
          ].map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Mamta Bal Sadan"
              className="rounded-2xl shadow-md"
            />
          ))}
        </div>

        <div className="col-span-1" />
      </section>

      {/* ================= CTA ================= */}
      <section className=" py-12">
        <DonateCTA />
      </section>

    </main>
  );
};

export default Mamta;
