import DonateCTA from "@/components/shared/DonateCTA";

const Mamtatai = () => {
    return (
        <main className="w-full mt-20 bg-white">

            <section className="pt-28 bg-white grid grid-cols-8">
                <div className="col-span-1 flex items-center justify-end px-4 mb-4">
                    <span className="w-20 h-[2px] bg-black" />
                </div>

                <p className=" col-span-7 text-lg font-bold tracking-wide mb-4 flex items-center gap-2">
                    MAMTA SINDHUTAI SAPAKAL
                </p>
                <div className="col-span-1" />


                <div className="col-span-6">
                    <div className="flex items-center gap-4 mb-8">
                    </div>

                    {/* Image overlaps */}
                    <div className="relative z-10">
                        <img
                            src="/assets/images/bg-mamtatai.png"
                            alt="Maai"
                            className="w-full h-full object-cover grayscale rounded-3xl -mb-32"
                        />

                        <div className="absolute inset-0 flex items-center pl-12">
                            <h1 className="text-white text-4xl font-bold max-w-md ">
                                The Legacy and <br /> The Responsibility
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="col-span-1" />
            </section>


            {/* ================= CONTENT ================= */}
            <section className="bg-[#fff7e6] pt-40 pb-20 grid grid-cols-8">
                <div className="col-span-1" />

                <div className="col-span-6">
                    <h2 className="text-4xl font-bold mb-2">
                        MAMATA SINDHUTAI SAPAKAL{" "}
                        <span className="text-lg font-normal">
                            THE MOTHER’S DAUGHTER
                        </span>
                    </h2>

                    <p className="text-sm text-gray-700 leading-relaxed text-justify">
                        After the sad demise of Sindhutai Sapakal in Jan 2022, Mamata Tai –
                        her biological child was entrusted the responsibility of being the
                        mother of Sindhutai’s 260 children. Going back to the early days,
                        Sindhutai had given away her daughter “Mamata” to the Shrimant Dagdu
                        Sheth Halwai trust of Pune, to eliminate the feeling of partiality
                        between her own child and the adopted children.
                        Years later and after completing education, Mamata-tai – as she is
                        lovingly called by the children, returned to help and assist
                        “Maai”. Mamata Tai and her team are determined to move ahead with
                        the spirit and devotion. Carrying on Sindhutai’s legacy of
                        dedication, devotion, affection, trust and love is not an easy
                        task.
                        During Maai’s lifetime, she has set up a banyan tree to help the
                        orphans, the poor and the needy, and Mamata-tai has taken this
                        responsibility to fulfil “Maai’s” vision and nourish this tree in
                        best of her capacity.
                    </p>
                </div>

                <div className="col-span-1" />
            </section>

            {/* ================= MEMORIES ================= */}
            <section className="pt-14 bg-white grid grid-cols-8">
                <div className="col-span-1 flex items-center justify-end px-4 mb-4">
                    <span className="w-20 h-[2px] bg-black" />
                </div>

                <p className=" col-span-7 text-lg font-bold tracking-wide mb-4 flex items-center gap-2">
                    MEMORIES
                </p>
                <div className="col-span-1" />
                <div className="col-span-6 grid grid-cols-4 gap-8">
                    {["mamtatai1.png", "mamtatai2.png", "mamtatai3.png", "mamtatai4.png"].map((img, i) => (
                        <img
                            key={i}
                            src={`/assets/images/${img}`}
                            alt=""
                            className="rounded-2xl object-cover"
                        />
                    ))}
                </div>
                <div className="col-span-1" />
            </section>

            <section className="bg-[#fff7e6] pt-14 mt-12  grid grid-cols-8">
                <div className="col-span-1 flex items-center justify-end px-4 mb-4">
                    <span className="w-20 h-[2px] bg-black" />
                </div>

                <p className=" col-span-7 text-lg font-bold tracking-wide mb-4 flex items-center gap-2">
                    ALBUM
                </p>
                <div className="col-span-1" />

                <div className="col-span-6 grid grid-cols-2 gap-10">
                    {["mamtatai5.png", "mamtatai6.png", "mamtatai7.png", "mamtatai8.png"].map((img, i) => (
                        <img
                            key={i}
                            src={`/assets/images/${img}`}
                            alt=""
                            className="rounded-3xl object-cover"
                        />
                    ))}
                </div>
                <div className="col-span-1" />
            </section>

            <section className=" pt-14 mt-12  grid grid-cols-8">
                <div className="col-span-1 flex items-center justify-end px-4 mb-4">
                    <span className="w-20 h-[2px] bg-black" />
                </div>

                <p className=" col-span-7 text-lg font-bold tracking-wide mb-4 flex items-center gap-2">
                    VIDEOS
                </p>
                <div className="col-span-1" />
                <div className="col-span-6 grid grid-cols-2">
                    <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/VIDEO_ID"
                            title="Mamata Sindhutai Sapakal"
                            allowFullScreen
                        />
                    </div>
                </div>
                <div className="col-span-1" />
            </section>

            <DonateCTA />
        </main>
    );
};

export default Mamtatai;
