import DonateCTA from "@/components/shared/DonateCTA";

const Savitribai = () => {
  return (
    <main className="bg-white mt-20">

      {/* ================= HERO / TITLE ================= */}
      <section className="grid grid-cols-8 pt-24">
        {/* LEFT LINE */}
        <div className="col-span-1 flex items-start justify-end px-4">
          <span className="w-20 h-[2px] bg-black mt-2" />
        </div>

        {/* TITLE */}
        <div className="col-span-7">
          <p className="font-bold tracking-wide">
            SAVITRIBAI PHULE MULINCHE VASATIGRUH – CHIKHALDARA
          </p>
        </div>
      </section>

      {/* ================= CONTENT + IMAGES ================= */}
      <section className="grid grid-cols-8 pb-12 pt-4 mt-6">
        {/* LEFT GUTTER */}
        <div className="col-span-1" />

        {/* TEXT CONTENT */}
        <div className="col-span-4">
          <h1 className="text-3xl font-bold leading-snug pb-6">
            Established in 1992 at Chikhaldara, Amravati <br />
            CEO : Mr. Arun Sapkal, Maai’s elder son <br />
            Current Beneficiaries : 50
          </h1>

          <ul className="list-disc pl-5 text-xs text-gray-600 space-y-3">
            <li>
              The organisation is working for a refuge to needy, destitute,
              Tribal girls.
            </li>
            <li>
              The organization is doing some exemplary work in the remote
              areas.
            </li>
            <li>
              Provide the basic necessities of food, shelter, cloth and
              medical care.
            </li>
            <li>
              Motivates and supports needy and tribal girls to get educated.
            </li>
          </ul>
        </div>

        {/* RIGHT IMAGES GRID */}
        <div className="col-span-2 grid grid-cols-2 gap-4 ">
          <img
            src="/assets/images/savitribai-1.png"
            alt="Savitribai Work"
            className="rounded-2xl shadow-md"
          />
          <img
            src="/assets/images/savitribai-2.png"
            alt="Savitribai Children"
            className="rounded-2xl shadow-md"
          />
          <img
            src="/assets/images/savitribai-3.png"
            alt="Savitribai Outreach"
            className="rounded-2xl shadow-md"
          />
          <img
            src="/assets/images/savitribai-4.png"
            alt="Savitribai Education"
            className="rounded-2xl shadow-md"
          />
        </div>

        {/* RIGHT GUTTER */}
        <div className="col-span-1" />
      </section>

      {/* ================= CTA ================= */}
      <section className=" py-12">
        <DonateCTA />
      </section>

    </main>
  );
};

export default Savitribai;
