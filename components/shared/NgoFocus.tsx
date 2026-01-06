const items = [
  {
    title: "Home & Education",
    desc: "We have created a home with multiple facilities and striving to nurture their moral and social education.",
    icon: "/assets/icons/home_and_edu.png",
  },
  {
    title: "Medical Care",
    desc: "Children are attended and provided with primary and required medical care.",
    icon: "/assets/icons/medical.png",
  },
  {
    title: "Education",
    desc: "One of the key focus of Sanmati Bal Niketan is to ensure that every children receive formal education.",
    icon: "/assets/icons/education.png",
  },
  {
    title: "Health & Diet",
    desc: "We follow a strict routine to nurture children health. Our kitchen is well equipped to serve fresh and healthy meals.",
    icon: "/assets/icons/health_and_diet.png",
  },
];

const NgoFocus = () => {
  return (
    <section className="py-16 bg-gray-50 grid grid-cols-8">
      <div className="col-span-1" />

      <div className="col-span-6">
        {/* Section heading */}
        <h1 className="text-md font-semibold tracking-wide mb-6 flex items-center gap-2">
          <span className="w-14 h-[2px] bg-black" />
          THE NGO
        </h1>

        <h2 className="text-3xl font-bold max-w-3xl mb-10 ml-16">
          We are dedicated to uplift, enable and empower <br />
          Orphaned Children and Destitutes
        </h2>

        <div className="grid md:grid-cols-4 gap-8 mx-16">
        {items.map((item, i) => (
            <div
            key={i}
            className="flex flex-col rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition min-h-[300px]"
            >
            <div className="flex flex-col items-center justify-center px-6 py-10">
                <img src={item.icon} className="h-20 mb-4" />

                <h3 className="text-lg font-semibold text-orange-500 text-center">
                {item.title}
                </h3>
            </div>

            <div className="flex-1 bg-gray-100 px-4 py-4 mb-0 text-center flex items-start">
                <p className="text-sm text-gray-700 leading-relaxed line-clamp-4">
                {item.desc}
                </p>
            </div>
            </div>
        ))}
        </div>


      </div>

      <div className="col-span-1" />
    </section>
  );
};

export default NgoFocus;
