'use client'

import Achievements from "@/components/shared/Achievements";
import DonateCTA from "@/components/shared/DonateCTA";
import { useRouter } from "next/navigation";

const Maai: React.FC = () => {

  const router = useRouter()
  return (
    <main className="w-full mt-20">

      {/* ================= JOURNEY OF LIFE ================= */}
      <section className="pt-28 bg-white grid grid-cols-8">
        <div className="col-span-1 flex items-center justify-end px-4 mb-4">
          <span className="w-20 h-[2px] bg-black" />
        </div>

        <p className=" col-span-7 text-lg font-bold tracking-wide mb-4 flex items-center gap-2">
          JOURNEY OF LIFE
        </p>
        <div className="col-span-1" />


        <div className="col-span-6">
          <div className="flex items-center gap-4 mb-8">
          </div>

          {/* Image overlaps */}
          <div className="relative z-10">
            <img
              src="/assets/images/bg-maii.png"
              alt="Maai"
              className="w-full h-full object-cover grayscale rounded-3xl -mb-32"
            />
          </div>
        </div>

        <div className="col-span-1" />
      </section>

      {/* ================= MAAI CONTENT ================= */}
      <section className="bg-[#fff7e6] pt-40 pb-20 grid grid-cols-8">
        <div className="col-span-1" />

        <div className="col-span-6">
          <h2 className="text-4xl font-bold mb-1">MAAI</h2>
          <p className="text-xs font-bold text-black mb-6">
            14th Nov 1948 – 4th Jan 2022
          </p>

          <div className=" text-black leading-relaxed space-y-4">
            <p>
              <strong>Place of Birth:</strong> Pimpri Meghe village in Wardha
              district Maharashtra.
            </p>

            <p>
              <strong>Education:</strong> 4th Std.
            </p>

            <p>
              <strong>Marriage:</strong> At the tender age of 12, she got married
              to Shrihari Sapkal, a cowherd from Navargaon village in Wardha
              District.
            </p>

            <p className=" text-justify">
              Her marriage did not last long. She fought against the exploitation of local women who collected dried cow dung. due to which her husband abandoned her at the age of 20 yrs. At that time She was pregnant. Sindhu Tai was thrown out of her husband’s house. In that period she gave birth to a baby girl. She cut her umbilical cord with the stone which was lying there. To survive she started begging and singing on the streets and rains in Amravati. With concern for her safety, she took shelter in a cremator. Once she saw a dead body burning. The last rites were over and the relatives of the departed had left. They had left some flour as a part of the last rituals for the departed soul. She took that flour, prepared a bhakari (roti), and baked it on the fire, which was still consuming the dead body. In her journey she saw hungry children begging around her. She took them under her wings. She gave them food and shelter in whatever way she could. This became mission of her life. Lovingly orphans children were call her Aai.In order to eliminate the feeling of partiality between her biological daughter and her adopted children, she intrusted her daughter to Shrimant Dagdushet Halwai Trust, Pune. She devoted her entire life to orphans. She was called “MAAI” She has been a “MOTHER” to many. She was an icon of love & Compassion. She sheltered thousands of orphans and gave them dignity in life. Her orphanage is an orphanage with a difference. Generally orphanages just keep their children up to the age of 18 MAAI keeps her children till they get their jobs or get married and settle in life. She taught the values of living and that’s why her children are living beautiful lives today
            </p>

          </div>
        </div>

        <div className="col-span-1" />
      </section>

      {/* ================= ORGANISATION ================= */}
      <section className="bg-white py-20 grid grid-cols-8">
        <div className="col-span-1 flex items-center justify-end px-4 mb-4">
          <span className="w-20 h-[2px] bg-black" />
        </div>
        <p className=" col-span-7 text-lg font-bold tracking-wide mb-4 flex items-center gap-2">
          ORGANISATION
        </p>
        <div className="col-span-1 " />

        <div className="col-span-6">
          {/* Heading */}
          <div className="flex items-center gap-4 mb-12">
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-10 mx-16">
            {[
              {
                title: "Sanmati Bal Niketan",
                desc: "Dedicated to providing essential support to underprivileged children.",
                img: "/assets/images/sanmati.png",
                route: "/sanmati"
              },
              {
                title: "Tirthrup Shaikshanik Vasatigruh",
                desc: "A transitional child shelter for one and all and not the orphans.",
                img: "/assets/images/tirthrup.png",
                route: "/tirthrup"

              },
              {
                title: "Gopika Gai Rakshan Kendra",
                desc: "Maai’s care for orphans was extended to animals, especially cows.",
                img: "/assets/images/gopika.png",
                route: "/gopika"

              },
              {
                title: "Mamta Bal Sadan, Saswad",
                desc: "Orphanage for Girls",
                img: "/assets/images/mamta.png",
                route: "/mamta"

              },
              {
                title: "Savitribai Phule Mulinche Vasatigruh",
                desc: "Motivates and supports to needy and tribal girls to get educated.",
                img: "/assets/images/savitribai.jpg",
                route: "/savitribai"

              },
              {
                title: "Shree Manshanti Chhatralay, Shirur",
                desc: "Its home to destitute and needy childrenlly cows.",
                img: "/assets/images/shree.png",
                route: "/shree"

              },
            ].map((org, i) => (
              <div
                key={i}
                className="relative h-[360px] rounded-3xl overflow-hidden group"
              >
                {/* Image */}
                <img
                  src={org.img}
                  alt={org.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/45" />

                {/* Content */}
                <div className="relative z-10 h-full p-8 grid grid-rows-3 justify-between text-white">
                  <div className=" row-span-2 h-full grid grid-rows-2">
                    <h3 className=" row-span-1 text-2xl font-bold leading-snug mt-10">
                      {org.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/90 leading-relaxed flex h-full items-center">
                      {org.desc}
                    </p>
                  </div>

                  <button onClick={() => router.push(`${org.route}`)} className=" mt-10 row-span-1 w-fit h-fit bg-white text-black text-sm font-semibold px-6 py-2 rounded-sm hover:bg-gray-100 transition">
                    Learn more
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-1" />
      </section>

      <Achievements />

      <DonateCTA />
    </main>
  );
};

export default Maai;
