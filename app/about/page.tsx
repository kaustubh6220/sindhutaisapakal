import DonateCTA from "@/components/shared/DonateCTA";

const About = () => {
    return (
        <main className="w-full">

            {/* ================= ABOUT HEADER ================= */}
            <section className="py-20 bg-white grid grid-cols-8 mt-20">
                <div className="col-span-1 flex items-center justify-end px-4 mb-4">
                    <span className="w-20 h-[2px] bg-black" />
                </div>

                <p className=" col-span-7 text-sm font-semibold tracking-wide mb-4 flex items-center gap-2">
                    ABOUT US
                </p>
                <div className="col-span-1">
                </div>

                <div className="col-span-6 mt-4">

                    <div className="grid md:grid-cols-2 gap-16">
                        {/* LEFT */}
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                            <p className="text-gray-700 leading-relaxed">
                                We are committed to work tirelessly & selﬂessly for the holistic welfare and upliftment of the orphans, the poor, the needy, the neglected and the underprivileged elements of the society, irrespective of their cast, religion, creed or gender, through their empowerment and rehabilitation, so as to welcome them as contributing members of the mainstream society.
                            </p>
                        </div>

                        {/* RIGHT */}
                        <div>
                            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                            <p className="text-gray-700 leading-relaxed">
                                We see every sheltered child as a future responsible citizen and strive to provide them every opportunity for self-reliance. As representatives of Mai and her institutions, we commit to reaching and helping every weak, neglected, and needy individual, not only in our society or country, but across the entire world.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1" />
            </section>

            {/* ================= VALUES SECTION ================= */}
            <section className="bg-[#fff7e6] py-20 grid grid-cols-8">
                <div className="col-span-1" />

                <div className="col-span-6">
                    <h2 className="text-3xl font-bold mb-10">OUR <br/>VALUES</h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* LEFT VALUES */}
                        <ul className="space-y-6 text-gray-600 list-disc list-inside marker:text-gray-600">
                            <li>
                                <strong>Love</strong>
                                <p className="ml-6">
                                    Love is the global bond that brings human beings together and creates a society that aspires to touch the skies with its feet ﬁrmly grounded. That love, is the very foundation of Mai’s life-work.
                                </p>
                            </li>

                            <li>
                                <strong>Acceptance</strong>
                                <p className="ml-6">
                                    As we walk the path of service, this teaching of Mai’s perpetually enlightens our way: “There is no bigger agony than that of being rejected, so fully accept the pain that comes your way ﬁrst, and then strive towards overcoming it”
                                </p>
                            </li>

                            <li>
                                <strong>Awareness</strong>
                                <p className="ml-6">
                                    “Teach us to laugh, dear God, but never let us forget the tears that we shed in the past” Walking with the present, with a ﬁrm awareness of our past prepares us for the future.
                                </p>
                            </li>
                        </ul>

                        {/* RIGHT VALUES */}
                        <ul className="space-y-6 text-gray-600 list-disc list-inside marker:text-gray-600">
                            <li>
                                <strong>Trust</strong>
                                <p className=" ml-6">
                                    Mai’s struggle and her work inspires us to trust ourselves always, to win the trust of others and to never lose it.
                                </p>
                            </li>

                            <li>
                                <strong>Simplicity</strong>
                                <p className=" ml-6">
                                    Simplicity is synonymous with Mai’s life and work, and it is our duty to maintain its sanctity at all costs.
                                </p>
                            </li>

                            <li>
                                <strong>Forgiveness</strong>
                                <p className=" ml-6">
                                    “Forgiveness will always guide you on your way forward” This belief of Mai’s always guides us in the right direction.
                                </p>
                            </li>

                            <li>
                                <strong>Gratitude</strong>
                                <p className=" ml-6">
                                    We are, and will forever be grateful to the countless helping hands that we have been blessed with.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="col-span-1" />
            </section>

            <DonateCTA />

        </main>
    );
};

export default About;
