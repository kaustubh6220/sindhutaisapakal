import DonateCTA from "@/components/shared/DonateCTA";

const gallerySections = [
  {
    title: "MAI WITH CHILDREN",
    images: [
      "/assets/gallery/1.png",
      "/assets/gallery/3.png",
      "/assets/gallery/2.png",
      "/assets/gallery/4.png",
      "/assets/gallery/5.png",
      "/assets/gallery/6.png",
      "/assets/gallery/7.png",
      "/assets/gallery/8.png",
      "/assets/gallery/9.png",
      "/assets/gallery/10.png",
      "/assets/gallery/11.png",
      "/assets/gallery/12.png",
      "/assets/gallery/13.png",
      "/assets/gallery/14.png",
      "/assets/gallery/15.png",
      "/assets/gallery/16.png",
    ],
  },
  {
    title: "MAI AT VARIOUS FACILITATION CEREMONIES",
    images: [

      "/assets/gallery/17.png",
      "/assets/gallery/18.png",
      "/assets/gallery/19.png",
      "/assets/gallery/20.png",
      "/assets/gallery/21.png",
      "/assets/gallery/22.png",
      "/assets/gallery/23.png",
      "/assets/gallery/24.png",
      "/assets/gallery/25.png",
      "/assets/gallery/26.png",
      "/assets/gallery/27.png",
      "/assets/gallery/28.png",
      "/assets/gallery/29.png",
      "/assets/gallery/30.png",
      "/assets/gallery/31.png",
      "/assets/gallery/32.png",
      "/assets/gallery/33.png",
      "/assets/gallery/34.png",

    ],
  },
  {
    title: "MAI AT VARIOUS FACILITATION CEREMONIES",
    images: [
      "/assets/gallery/35.png",
      "/assets/gallery/36.png",
      "/assets/gallery/37.png",
      "/assets/gallery/38.png",
      "/assets/gallery/39.png",
      "/assets/gallery/40.png",
      "/assets/gallery/41.png",
      "/assets/gallery/42.png",
      "/assets/gallery/43.png",
      "/assets/gallery/44.png",
      "/assets/gallery/45.png",
      "/assets/gallery/46.png",
    ],
  },
];

const Gallery = () => {
  return (
    <main className="w-full bg-white mt-20">

      {gallerySections.map((section, idx) => (
        <section key={idx} className="py-20 grid grid-cols-8">

                   <div className="col-span-1 flex items-center justify-end px-4 mb-4">
                    <span className="w-20 h-[2px] bg-black" />
                </div>

                <p className=" col-span-7 text-sm font-semibold tracking-wide mb-4 flex items-center gap-2">
                {section.title}
                </p>
                <div className="col-span-1">
                </div>

          <div className="col-span-6">
            <div className="flex items-center gap-4 mb-10">

            </div>

            <div className="columns-1 sm:columns-2 md:columns-4 gap-6 space-y-6">
              {section.images.map((img, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-2xl break-inside-avoid"
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full object-cover rounded-2xl hover:scale-[1.02] transition duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-1" />
        </section>
      ))}

      <DonateCTA/>
    </main>
  );
};

export default Gallery;
