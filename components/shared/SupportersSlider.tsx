const supporters = [
  { name: "Nobel Hospital", img: "/assets/images/nobel.png" },
  { name: "Villo Poonawala Foundation", img: "/assets/images/villo.png" },
  { name: "Kalyani Technoforge Limited", img: "/assets/images/kalyani.png" },
];

const SupportersSlider = () => {
  return (
    <section className="py-20 bg-white grid grid-cols-8">
      {/* left spacer */}
      <div className="col-span-1" />

      <div className="col-span-6">
        {/* heading */}
        <h1 className="text-md font-semibold tracking-wide mb-6 flex items-center gap-2">
          <span className="w-14 h-[2px] bg-black" />
          OUR SUPPORTERS
        </h1>

        <h2 className="text-xl font-semibold mb-10 ml-16">
            We are advancing forward, thanks to the countless helping hands that have reached us !
            <br/> Some noble souls came through to us in our tough times, and we think of them as Maai’s blessings.
        </h2>

        {/* cards */}
        <div className="grid md:grid-cols-3 gap-8 mx-16">
          {supporters.map((s, i) => (
             <div
                key={i}
                className="bg-gray-100 p-4 rounded-xl text-center"
                >
                <img
                    src={s.img}
                    className="rounded-lg mb-4 "
                    alt={s.name}
                />
                <p className="font-medium text-xl py-2 px-6">{s.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* right spacer */}
      <div className="col-span-1" />
    </section>
  );
};

export default SupportersSlider;
