'use client'

import  { useState } from "react";


const galleryData = {
    facilities: [
        "/assets/gallery/sanmati/f1.png",
        "/assets/gallery/sanmati/f2.png",
        "/assets/gallery/sanmati/f3.png",
        "/assets/gallery/sanmati/f4.png",
        "/assets/gallery/sanmati/f5.png",
        "/assets/gallery/sanmati/f6.png",
        "/assets/gallery/sanmati/f7.png",
        "/assets/gallery/sanmati/f8.png",
        "/assets/gallery/sanmati/f9.png",
        "/assets/gallery/sanmati/f10.png",
        "/assets/gallery/sanmati/f11.png",
        "/assets/gallery/sanmati/f12.png",
        "/assets/gallery/sanmati/f13.png",
        "/assets/gallery/sanmati/f14.png",
        "/assets/gallery/sanmati/f15.png",
        "/assets/gallery/sanmati/f16.png",

    ],

    activity: [
        "/assets/gallery/sanmati/a1.png",
        "/assets/gallery/sanmati/a2.png",
        "/assets/gallery/sanmati/a3.png",
        "/assets/gallery/sanmati/a4.png",
        "/assets/gallery/sanmati/a5.png",
        "/assets/gallery/sanmati/a6.png",
        "/assets/gallery/sanmati/a7.png",
        "/assets/gallery/sanmati/a8.png",
        "/assets/gallery/sanmati/a9.png",
        "/assets/gallery/sanmati/a10.png",
        "/assets/gallery/sanmati/a11.png",
        "/assets/gallery/sanmati/a12.png",
        "/assets/gallery/sanmati/a13.png",
        "/assets/gallery/sanmati/a14.png",
        "/assets/gallery/sanmati/a15.png",
        "/assets/gallery/sanmati/a16.png",


    ],

    program: [
        "/assets/gallery/sanmati/p1.png",
        "/assets/gallery/sanmati/p2.png",
        "/assets/gallery/sanmati/p3.png",
        "/assets/gallery/sanmati/p4.png",
        "/assets/gallery/sanmati/p5.png",
        "/assets/gallery/sanmati/p6.png",
        "/assets/gallery/sanmati/p7.png",
        "/assets/gallery/sanmati/p8.png",

    ],

    festival: [
        "/assets/gallery/sanmati/fe1.png",
        "/assets/gallery/sanmati/fe2.png",
        "/assets/gallery/sanmati/fe3.png",
        "/assets/gallery/sanmati/fe4.png",
        "/assets/gallery/sanmati/fe5.png",
        "/assets/gallery/sanmati/fe6.png",
        "/assets/gallery/sanmati/fe7.png",

    ],

    trip: [
        "/assets/gallery/sanmati/t1.png",
        "/assets/gallery/sanmati/t2.png",
        "/assets/gallery/sanmati/t3.png",
        "/assets/gallery/sanmati/t4.png",
        "/assets/gallery/sanmati/t5.png",
        "/assets/gallery/sanmati/t6.png",
        "/assets/gallery/sanmati/t7.png",
        "/assets/gallery/sanmati/t8.png",

    ],

    successStories: [
        {
            image: "/assets/gallery/sanmati/s1.png",
            name: "Madhav Narayan Mohite",
            subtitle: "Pursuing Diploma in Electrical Engineering",
            extra: "Second Year, JSPM College",
        },
        {
            image: "/assets/gallery/sanmati/s2.png",
            name: "Noor Aslam Shaikh",
            subtitle: "Pursuing Diploma in Computer",
            extra: "Second Year, JSPM College",
        },
        {
            image: "/assets/gallery/sanmati/s3.png",
            name: "Rupesh Namdev Shinde",
            subtitle: "Pursuing Diploma in Mechanical Engineering",
            extra: "Third Year, Wadia College",
        },
        {
            image: "/assets/gallery/sanmati/s4.png",
            name: "Shubham Kundan Gaikwad",
            subtitle: "Pursuing Hotel Management",
            extra: "Second Year, Bharati Vidyapith",
        },
    ],

};


const SanmatiBalNiketan = () => {

    const [activeTab, setActiveTab] = useState<keyof typeof galleryData>("facilities");

    return (
        <main className="bg-white mt-20">

            <section className="grid grid-cols-8 py-24">
                <div className="col-span-1 flex items-center justify-end px-4 mb-4">
                    <span className="w-20 h-[2px] bg-black" />
                </div>
                <p className=" col-span-7  font-bold tracking-wide mb-4 flex items-center gap-2">
                    SANMATI BAL NIKETAN
                </p>
                <div className="col-span-1 " />

                <div className=" col-span-7">

                    <h1 className="text-3xl font-bold mb-4">
                        Orphanage for Boys
                    </h1>

                    <p className="text-xs text-gray-600 mb-6">
                        Year of Establishment 2001 In charge of the Organization : <br />
                        Mamata Sindhutai Sapakal, biological daughter of Maai.
                    </p>
                </div>

                <div className="col-span-1 " />

                <div className="col-span-6 grid grid-cols-6  items-start gap-12">

                    <div className=" col-span-4">

                        <div className="text-gray-700 text-xs text-justify">
                            <p>
                                Sanmati Bal Niketan, located in Manjari, dist. Pune, is an
                                organization dedicated to providing essential support and care
                                to underprivileged children. The organization’s primary focus is
                                to fulfill the basic needs of children, including food, shelter,
                                clothing, education, rehabilitation and giving them a secure
                                atmosphere for self-development.
                            </p>

                            <p>
                                One of the key initiatives of sanmati bal niketan is to ensure
                                that school-going children receive an education. They facilitate
                                the admission of these children into schools and colleges.
                                Additionally, the organization maai maintains a strong
                                supervisory role over the children to ensure their well-being
                                and development.
                            </p>

                            <p>
                                The organization, apart from addressing the basic needs of the
                                children but also strives to nurture their moral and social
                                health. Various activities are organized to promote their
                                holistic development. This includes cultural programs that
                                coincide with festivals such as diwali, ganesh festival, shiv
                                jayanti, and dahi-handi, which not only contribute to the
                                children’s social development but also help them participate in
                                and enjoy the cultural celebrations.
                            </p>

                            <p className=" mt-4">
                                Sanmati Bal Niketan plays a significant role in building the
                                confidence and competence of these children. By providing them
                                with the necessary care, education, and support, the organization
                                aims to integrate them into mainstream society. Their work
                                revolves around lifting the weakest sections of society and
                                giving them the opportunities they deserve.
                            </p>

                            <p>
                                The admission process for residential children at sanmati bal
                                niketan is conducted strictly through the child welfare committee
                                (cwc) of the family and child welfare department of maharashtra
                                state. This ensures that children in need are admitted based on
                                a fair and regulated process. The organization accepts children
                                aged 6 years and above, and it’s worth noting that there are no
                                formal admission fees or restrictions based on religion, caste,
                                or creed.
                            </p>

                            <p>
                                Overall, sanmati bal niketan is making a significant impact by
                                providing a safe and nurturing environment for underprivileged
                                children, giving them the chance to grow, learn, and thrive
                                despite their challenging circumstances.
                            </p>
                        </div>
                    </div>

                    {/* ===== RIGHT IMAGES ===== */}
                    <div className="col-span-2 relative flex justify-start">
                        {/* Top image */}
                        <img
                            src="/assets/images/sanmati-heros-1.png"
                            alt="Sanmati Bal Niketan"
                            className="w-50 rounded-2xl shadow-lg relative z-10"
                        />

                        {/* Bottom image */}
                        <img
                            src="/assets/images/sanmati-heros-2.png"
                            alt="Sanmati Building"
                            className="w-55 rounded-2xl shadow-xl absolute top-30 -right-6"
                        />
                    </div>

                </div>

                {/* RIGHT GUTTER */}
                <div className="col-span-1" />
            </section>

            {/* ================= TABS SECTION ================= */}
            <section className="grid grid-cols-8 pb-32">
                {/* LEFT GUTTER */}
                <div className="col-span-1" />

                {/* MAIN CONTENT */}
                <div className="col-span-6">

                    <div className="flex justify-center gap-16 mb-14 text-sm font-semibold">
                        {[
                            { key: "facilities", label: "Facilities" },
                            { key: "activity", label: "Activity" },
                            { key: "program", label: "Program" },
                            { key: "festival", label: "Festival" },
                            { key: "trip", label: "Trip" },
                            { key: "successStories", label: "Success Stories" },
                        ].map((tab) => (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key as keyof typeof galleryData)}
                                className={`relative ${activeTab === tab.key ? "text-black" : "text-gray-400"
                                    }`}
                            >
                                {tab.label}

                                {activeTab === tab.key && (
                                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-[3px] bg-yellow-400 rounded-full" />
                                )}
                            </button>
                        ))}
                    </div>

                    {activeTab !== "successStories" ? (
                        /* ===== NORMAL MASONRY GRID ===== */
                        <div className="columns-1 sm:columns-2 md:columns-4 gap-6 space-y-6">
                            {(galleryData[activeTab] as string[]).map((img, i) => (
                                <div key={i} className="break-inside-avoid rounded-2xl overflow-hidden">
                                    <img
                                        src={img}
                                        alt=""
                                        className="w-full object-cover rounded-2xl"
                                    />
                                </div>
                            ))}
                        </div>
                    ) : (
                        /* ===== SUCCESS STORIES CAROUSEL ===== */
                        <div className="relative">

                            {/* CARDS */}
                            <div className="flex justify-center gap-8 items-start">
                                {(galleryData.successStories as any[]).map((story, i) => {

                                    return (
                                        <div
                                            key={i}
                                            className={`w-64 text-center transition-all duration-300`}
                                        >
                                            <img
                                                src={story.image}
                                                alt={story.name}
                                                className="w-full h-64 object-cover rounded-2xl mb-4"
                                            />

                                            <h4 className="font-semibold text-sm">{story.name}</h4>
                                            <p className="text-xs text-gray-600">{story.subtitle}</p>
                                            <p className="text-xs text-gray-500">{story.extra}</p>
                                        </div>
                                    );
                                })}
                            </div>




                        </div>
                    )}



                </div>

                {/* RIGHT GUTTER */}
                <div className="col-span-1" />
            </section>

        </main>
    );
};

export default SanmatiBalNiketan;
