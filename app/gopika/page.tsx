import DonateCTA from "@/components/shared/DonateCTA";

const Gopika = () => {
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
            GOPIKA GAI RAKSHAN KENDRA
          </p>
        </div>
      </section>

      {/* ================= CONTENT + IMAGES ================= */}
      <section className="grid grid-cols-8 pb-24 pt-4">
        {/* LEFT GUTTER */}
        <div className="col-span-1" />

        {/* TEXT CONTENT */}
        <div className="col-span-4 mt-6">
          <h1 className="text-3xl font-bold leading-snug pb-6">
            To care for the unproductive, abandoned cows
          </h1>

          <p className="text-xs text-gray-600 text-justify ">
            <span className="font-semibold text-black">
              Year of Establishment : 2007
            </span>
          </p>

          <p className="text-xs text-gray-600 text-justify ">
            The dedication and compassion shown by Maai towards both cows and
            people in need is truly remarkable. It’s clear that her legacy lives
            on through the work being carried out by the institution she founded.
            The story of Maai’s connection with the cows and her journey of
            overcoming adversity to become a mother to orphans is truly touching.
          </p>

          <p className="text-xs text-gray-600 text-justify ">
            Caring for animals, especially cows, and providing them with shelter,
            medical attention, and respect is a noble cause. It’s heartening to
            see the efforts being made to improve the lives of old, sick, stray,
            and abandoned cows.
          </p>

          <p className="text-xs text-gray-600 text-justify ">
            For anyone who shares a love for animals and believes in the
            importance of compassionate care, supporting institutions like Gopika
            Gai Rakshan Kendra is a wonderful way to contribute. Providing
            financial assistance can indeed make a significant difference in
            ensuring that the mission Maai started continues to thrive.
          </p>

          <p className="text-xs text-gray-600 text-justify">
            Thank you for sharing this message and making people aware of the
            important work being done by the Gopika Gai Rakshan Kendra. Your
            efforts to reach out for support and spread awareness about this cause
            are greatly appreciated. The power of compassion and the impact that
            one person’s actions can have on the lives of animals and the
            community.
          </p>
        </div>

        {/* RIGHT IMAGES */}
        <div className="col-span-2 relative flex justify-start ml-12">
          <img
            src="/assets/images/gopika-heros-1.png"
            alt="Gopika Gai Rakshan"
            className="rounded-2xl shadow-lg w-48 h-48 relative z-10"
          />
          <img
            src="/assets/images/gopika-heros-2.png"
            alt="Cows shelter"
            className="rounded-2xl shadow-xl w-55 absolute top-32 -right-5"
          />
        </div>

        {/* RIGHT GUTTER */}
        <div className="col-span-1" />
      </section>

      {/* ================= IMAGE GRID ================= */}
      <section className="bg-[#fff7e6] py-20 grid grid-cols-8">
        {/* LEFT GUTTER */}
        <div className="col-span-1" />

        {/* TITLE */}
        <div className="col-span-6">
          <p className="text-2xl font-bold">
            Feel free to visit the institution or call us any time <br />
            should you need more information.
          </p>
        </div>

        <div className="col-span-1" />

        {/* IMAGE GRID */}
        <div className="col-span-1" />
        <div className="col-span-6 grid grid-cols-5 gap-8 mt-12">
          {[
            "gopika1.png",
            "gopika2.png",
            "gopika3.png",
            "gopika4.png",
            "gopika5.png",
          ].map((img, i) => (
            <img
              key={i}
              src={`/assets/images/${img}`}
              alt="Gopika Gallery"
              className="rounded-2xl shadow-md"
            />
          ))}
        </div>
        <div className="col-span-1" />
      </section>

      {/* ================= CTA ================= */}
      <DonateCTA />

    </main>
  );
};

export default Gopika;
