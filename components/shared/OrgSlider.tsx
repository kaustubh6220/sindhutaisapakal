'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoChevronForward } from "react-icons/io5";

const orgs = [
  {
    title: "Sanmati Bal Niketan",
    desc: "Dedicated to providing essential support to underprivileged children.",
    img: "/assets/images/sanmati.png",
    route: "/sanmati",
  },
  {
    title: "Tirthrup Shaikshanik Vasatigruh",
    desc: "A transitional shelter for orphaned children.",
    img: "/assets/images/tirthrup.png",
    route: "/tirthrup",

  },
  {
    title: "Gopika Gai Rakshan Kendra",
    desc: "Care and protection for cows.",
    img: "/assets/images/gopika.png",
    route: "/gopika",

  },

  {
    title: "Mamta Bal Sadan, Saswad",
    desc: "Orphanage for Girls",
    img: "/assets/images/mamta.png",
    route: "/mamta",

  },
  {
    title: "Savitribai Phule Mulinche Vasatigruh",
    desc: "Motivates and supports to needy and tribal girls to get educated.",
    img: "/assets/images/savitribai.jpg",
    route: "/savitribai",

  },
  {
    title: "Shree Manshanti Chhatralay, Shirur",
    desc: "Its home to destitute and needy childrenlly cows.",
    img: "/assets/images/shree.png",
    route: "/shree",

  }
];

const CARDS_PER_SLIDE = 3;
const TOTAL_SLIDES = Math.ceil(orgs.length / CARDS_PER_SLIDE); // = 2


const OrgSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % TOTAL_SLIDES);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? TOTAL_SLIDES - 1 : prev - 1
    );
  };

  const startIndex = currentSlide * CARDS_PER_SLIDE;
  const visibleCards = orgs.slice(
    startIndex,
    startIndex + CARDS_PER_SLIDE
  );

  return (
    <section className="py-20 bg-white grid grid-cols-8">
      {/* Backward button in left column */}
      <div className="col-span-1 flex flex-col items-center justify-center mt-14 h-full text-center">
        <button
          onClick={prevSlide}
        >
          <IoChevronForward className=" text-4xl rotate-180" />
        </button>
      </div>

      <div className="col-span-6">
        <h1 className="text-md font-semibold tracking-wide mb-6 flex items-center gap-2">
          <span className="w-14 h-[2px] bg-black" />
          Founder : 'Padmashri' Dr. Sou. Sindhutai Sapakal
        </h1>

        <h2 className="text-3xl font-bold mb-10 ml-16">
          'Saptasindhu' Mahila Adhar Balsangopan <br />
          And Shikshan Sanstha
        </h2>

        {/* FIXED 3-CARD SLIDER (no scroll) */}
        <div className="ml-16 mr-16">
          <div className="grid grid-cols-3 gap-6">
            {visibleCards.map((org, i) => (
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

          <div className="flex justify-center gap-3 mt-6 ">
            {Array.from({ length: TOTAL_SLIDES }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-2.5 w-2.5 rounded-full transition ${i === currentSlide
                  ? "bg-gray-800 scale-125"
                  : "bg-gray-300"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Forward button in right column */}
      <div className="col-span-1 flex flex-col items-center justify-center mt-14 h-full text-center">
        <button
          onClick={nextSlide}
          className=""
        >
          <IoChevronForward className=" text-4xl" />
        </button>
      </div>
    </section>
  );
};

export default OrgSlider;