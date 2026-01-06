import DonateCTA from "@/components/shared/DonateCTA";

const Shree = () => {
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
            SHREE MANSHANTI CHATRALAY, SHIRUR
          </p>
        </div>
      </section>

      {/* ================= TEXT CONTENT ================= */}
      <section className="grid grid-cols-8 pt-10">
        <div className="col-span-1" />

        <div className="col-span-6">
          <h1 className="text-3xl font-bold leading-snug mb-8">
            Its home to destitute and needy children <br />
            Established in 2017 at Shirur (Ghodnadi), Pune,
            CEO: Mr. Vinay Sapkal, adopted son of Mai,
            Current Beneficiaries : 80
          </h1>

          <ul className="list-disc pl-5 text-xs text-gray-600 space-y-3 max-w-4xl">
            <li>
              To provide the basic necessities of food, shelter, cloth and
              medical care and education to children.
            </li>
            <li>
              The organisation motivates and supports its children to get
              educated and learn vocational skills.
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
            "/assets/images/shree-1.png",
            "/assets/images/shree-2.png",
            "/assets/images/shree-3.png",
            "/assets/images/shree-4.png",
          ].map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Shree Manshanti Chatralay"
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

export default Shree;
