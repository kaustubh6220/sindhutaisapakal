import React from "react";
import AchievementVisual from "./AchievementVisual";

const Achievements: React.FC = () => {
    return (
        <section className="bg-[#fff7e6] py-12 grid grid-cols-8">
            <div className="col-span-1 flex items-center justify-end px-4 mb-4">
                <span className="w-20 h-[2px] bg-black" />
            </div>
            <p className=" col-span-7 text-lg font-bold tracking-wide mb-4 flex items-center gap-2">
                ACHIEVEMENTS
            </p>

            <div className="col-span-1" />

            <div className="relative col-span-6">

                {/* ===== TIMELINE CONNECTORS ===== */}
                <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    viewBox="0 0 1400 900"
                    preserveAspectRatio="none"
                >
                    {/* First → right */}
                    <line x1="205" y1="122" x2="1230" y2="122" stroke="#FACC15" strokeWidth="1" />
                    <line x1="1230" y1="122" x2="1230" y2="130" stroke="#FACC15" strokeWidth="2" />

                    {/* Second → left */}
                    <line x1="1230" y1="230" x2="205" y2="230" stroke="#FACC15" strokeWidth="1" />
                    <line x1="205" y1="230" x2="205" y2="237" stroke="#FACC15" strokeWidth="2" />

                    <line x1="205" y1="335" x2="1230" y2="335" stroke="#FACC15" strokeWidth="1" />
                    <line x1="1230" y1="335" x2="1230" y2="342" stroke="#FACC15" strokeWidth="2" />

                    {/* Second → left */}
                    <line x1="1230" y1="442" x2="205" y2="442" stroke="#FACC15" strokeWidth="1" />
                    <line x1="205" y1="442" x2="205" y2="449" stroke="#FACC15" strokeWidth="2" />

                    <line x1="205" y1="547" x2="1230" y2="547" stroke="#FACC15" strokeWidth="1" />
                    <line x1="1230" y1="547" x2="1230" y2="554" stroke="#FACC15" strokeWidth="2" />

                    {/* Second → left */}
                    <line x1="1230" y1="653" x2="205" y2="653" stroke="#FACC15" strokeWidth="1" />
                    <line x1="205" y1="653" x2="205" y2="660" stroke="#FACC15" strokeWidth="2" />

                    <line x1="205" y1="759" x2="1230" y2="759" stroke="#FACC15" strokeWidth="1" />
                    <line x1="1230" y1="759" x2="1230" y2="766" stroke="#FACC15" strokeWidth="2" />
                </svg>



                {/* ===== HEADING ===== */}


                {/* ===== FIRST ACHIEVEMENT ===== */}
                <div className=" w-full flex flex-row justify-start items-start pt-36 ml-42">
                    <AchievementVisual imageSrc="/assets/images/maii1.jpg" position="center top" />

                    <div className="w-xl ">
                        <h3 className="text-xl font-bold mb-4">
                            Padma Shri Award 2021 in Social Work Category
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-xs text-justify">
                            Sindhutai Sapkal, the “Mother of Orphans,” received the Padma Shri in 2021 for her lifelong service to orphaned and abandoned children. Overcoming personal hardships, she raised over 1,500 children and rehabilitated marginalized communities. Her award honors her compassion, resilience, and dedication to transforming countless lives through care, education, and advocacy.                        </p>
                    </div>
                </div>

                {/* ===== SECOND ACHIEVEMENT ===== */}
                <div className=" w-full flex flex-row justify-end items-start ">

                    <div className="w-xl mr-36">
                        <h3 className="text-xl font-bold mb-4 text-right">
                            The National Award for Iconic Mother <br/>
                            from the President of India – 2013
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-xs text-justify">
                            Sindhutai Sapkal received the National Award for Iconic Mother from the President of India in 2013 for raising over 1,500 orphaned and abandoned children as her own. The award recognized her unmatched maternal care, resilience, and dedication in providing love, shelter, and guidance to countless lives otherwise left destitute.                         </p>
                    </div>

                    <AchievementVisual imageSrc="/assets/images/maii2.jpg" position="center top" />

                </div>


                <div className=" w-full flex flex-row justify-start items-start  ml-42">
                    <AchievementVisual imageSrc="/assets/images/maii3.jpg" position="10% -80%" />

                    <div className="w-xl ">
                        <h3 className="text-xl font-bold mb-4">
                            Nari Shakti Award from President of India – 2017
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-xs text-justify">
                            Sindhutai Sapkal was honored with the Nari Shakti Award by the President of India in 2017 for her extraordinary contribution to women empowerment and child welfare. The award celebrated her tireless efforts in nurturing over 1,500 orphaned children, advocating for the marginalized, and inspiring society through her courage, compassion, and selfless service.                        </p>
                    </div>
                </div>

                {/* ===== SECOND ACHIEVEMENT ===== */}
                <div className=" w-full flex flex-row justify-end items-start  ">

                    <div className="w-xl mr-36">
                        <h3 className="text-xl font-bold mb-4 text-right">
                            Doctor of Literature: D. Y. Patil University, <br/> Navi Mumbai-2016
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-xs text-justify">
                            In 2016, Sindhutai Sapkal was conferred the Doctor of Literature (D.Litt.) by D. Y. Patil University, Navi Mumbai, honoring her lifelong dedication to social work. The recognition celebrated her remarkable journey of raising over 1,500 orphaned children, empowering marginalized communities,and inspiring generations through compassion, resilience, and transformative service.                         </p>
                    </div>

                    <AchievementVisual imageSrc="/assets/images/maii4.jpg" position="center top" />

                </div>

                <div className=" w-full flex flex-row justify-start items-start  ml-42">
                    <AchievementVisual imageSrc="/assets/images/maii5.jpg" position="center top" />

                    <div className="w-xl ">
                        <h3 className="text-xl font-bold mb-4">
                            Doctor of Literature: D. Y. Patil University,<br/>
                            Wardha 2021
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-xs text-justify">
                            In 2021, Sindhutai Sapkal was awarded the Doctor of Literature (D.Litt.) by D. Y. Patil University, Wardha, in recognition of her exceptional service to society. The honor celebrated her decades of nurturing over 1,500 orphaned children, empowering the underprivileged, and inspiring countless lives through her compassion, perseverance, and selfless dedication.                        </p>
                    </div>
                </div>

                {/* ===== SECOND ACHIEVEMENT ===== */}
                <div className=" w-full flex flex-row justify-end items-start ">

                    <div className="w-xl mr-36">
                        <h3 className="text-xl font-bold mb-4 text-right">
                            International: The Ahmadiyya Muslim Peace Prize <br/>
                            London-2015
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-xs text-justify">
                            In 2015, Sindhutai Sapkal received the Ahmadiyya Muslim Peace Prize in London for her outstanding contribution to humanity. The award honored her lifelong mission of sheltering over 1,500 orphaned children, promoting peace through compassion, and uplifting marginalized communities with unwavering dedication, love, and a commitment to social harmony.                        </p>
                    </div>

                    <AchievementVisual imageSrc="/assets/images/maii6.jpg" position="center top" />

                </div>

                <div className=" w-full flex flex-row justify-start items-start  ml-42">
                    <AchievementVisual imageSrc="/assets/images/maii7.jpg" position="center top" />

                    <div className="w-xl ">
                        <h3 className="text-xl font-bold mb-4">
                            The One Rotary Award- Hong Kong Global Love of <br/> Lives Award- Taiwan
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-xs text-justify">
                            Sindhutai Sapkal was honored with The One Rotary Award in Hong Kong and the Global Love of Lives Award in Taiwan for her remarkable humanitarian work. These international recognitions celebrated her lifelong dedication to caring for over 1,500 orphaned children, spreading compassion, and inspiring the world through her resilience and selfless service.                        </p>
                    </div>
                </div>

                {/* ===== SECOND ACHIEVEMENT ===== */}
                <div className=" w-full flex flex-row justify-end items-start ">

                    <div className="w-xl mr-36">

                        <p className="text-gray-700 leading-relaxed text-xs text-justify">
                            A Marathi film ‘Mee Sindhutai Sapkal’ released in 2010, is a biopic inspired by the true story of Padma Shri Dr. Sau. Sindhutai Sapkal. The film was selected for world premiere at the 54th London Film Festival “Mee Vanvasi”– Autobiography published in 1986 in Thane. Documentary On Life – “ANATHANCHI YASHODA”-2013.                        </p>
                    </div>

                    <AchievementVisual imageSrc="/assets/images/maii8.png" position="center top" />

                </div>






            </div>
        </section>
    );
};

export default Achievements;
