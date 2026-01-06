type StatItem = {
  icon: string;
  value: string;
  label: string;
};

const stats: StatItem[] = [
  {
    icon: "/assets/icons/nurtured.png",
    value: "1200+",
    label: "Orphans Nurtured",
  },
  {
    icon: "/assets/icons/care.png",
    value: "260+",
    label: "Orphans in Care",
  },
  {
    icon: "/assets/icons/organisations.png",
    value: "6",
    label: "Organisations",
  },
  {
    icon: "/assets/icons/cow.png",
    value: "250+",
    label: "Cows under care",
  },
];

const StatsSection = () => {
  return (
    <section className=" py-16 w-full grid grid-cols-8">
      <div className="col-span-1">

      </div>
      <div className="col-span-6">
        <div className="flex flex-row gap-4 justify-between items-center rounded-3xl bg-gray-50 py-12 px-12 shadow-sm">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              <img
                src={item.icon}
                alt={item.label}
                className="h-25 w-25 object-contain mb-4"
              />

              <p className="text-4xl font-bold text-amber-300">
                {item.value}
              </p>

              <p className=" text-xl font-semibold mt-2 text-gray-600">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className=" col-span-1">

      </div>
    </section>
  );
};

export default StatsSection;
