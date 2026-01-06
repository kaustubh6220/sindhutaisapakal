import DonateCTA from "@/components/shared/DonateCTA";
import LegacySection from "@/components/shared/LegacySection";
import NgoFocus from "@/components/shared/NgoFocus";
import OrgSlider from "@/components/shared/OrgSlider";
import StatsSection from "@/components/shared/StatsSection";
import SupportersSlider from "@/components/shared/SupportersSlider";

const Home = () => {
  return (
    <>
      <section
        className="relative w-full h-screen bg-cover bg-top grayscale"
        style={{ backgroundImage: "url('/assets/images/bg-heros.png')" , color: "gray"}}
      >
        <div className="absolute inset-0 bg-black/40" />
        
      </section>


      <section className="bg-white py-20 grid grid-cols-8">
        <div className=" col-span-1">

        </div>
        <div className=" col-span-6">
            <div className=" grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gray-500 mb-2">Maai</p>

                <h2 className="text-3xl font-bold leading-tight">
                  Padma Shri Dr. Sou. Sindhutai Sapakal <br />
                  Mother of orphans
                </h2>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  A soul out of life’s hardship was born as Mother to over a thousand
                  children and devoted her entire life to social service. After 70
                  years of lifespan (Born: 1948 – Died: 2022), she raised a grand
                  family of 220 sons-in-laws, 50 daughters-in-laws.
                </p>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  She adopted more than 1200 orphaned children and provided them
                  food, shelter, and education. She was honored with Padmashri in
                  2021.
                </p>

                <button className="mt-5 text-sm font-semibold text-gray-700 hover:underline">
                  Read More
                </button>
              </div>

              <div className="flex justify-end">
                <img
                  src="/assets/images/1.png"
                  alt="Sindhutai Sapkal"
                  className="rounded-3xl max-w-md w-full object-cover"
                />
              </div>
            </div>
          </div>
        <div className=" col-span-1">

        </div>
      </section>

      <section className="bg-white py-20 grid grid-cols-8">
        <div className=" col-span-1">

        </div>
        <div className=" col-span-6">
          <div className=" grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/assets/images/2.png"
              alt="Children with Mai"
              className="rounded-3xl max-w-md w-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold leading-tight">
              ‘Saptasindhu’ Mahila Adhar Balsangopan And Shikshan Sanstha
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Founded in 1998 by Padmashri Dr. Sou. Sindhutai Sapakal (Maai),
              the organization supports orphaned and underprivileged children.
            </p>

            <p className="mt-3 text-gray-600 leading-relaxed">
              Over the years, it has expanded its reach across Maharashtra,
              providing shelter, education, and emotional support.
            </p>

            <div className="mt-4 flex gap-6 text-sm font-semibold text-gray-600">
              <span className="cursor-pointer hover:underline">Read More</span>
              <span className="cursor-pointer hover:underline">
                Saptasindhu
              </span>
            </div>
          </div>
        </div>
        </div>
        <div className="col-span-1">

        </div>
      </section>

      <StatsSection/>
      <OrgSlider />
      <NgoFocus />
      <LegacySection />
      <SupportersSlider />
      <DonateCTA />
    </>
  );
};

export default Home;
