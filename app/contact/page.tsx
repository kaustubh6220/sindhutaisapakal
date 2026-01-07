'use client'

import { useState } from "react";
import toast from "react-hot-toast";
import { MdLocationOn, MdPhone, MdMail } from "react-icons/md";

const Contact = () => {

  const [formData, setFormData] = useState({
    fullName: "",
    number: "",
    email: "",
    state: "",
    opinion: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    // Indian phone number validation
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.number)) {
      toast.error("Please enter a valid 10-digit mobile number");
      return;
    }

    try {
      const res = await fetch("/api/contactUs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(
          "Form submitted successfully. We will contact you."
        );

        setFormData({
          fullName: "",
          number: "",
          email: "",
          state: "",
          opinion: "",
        });
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
    }
  };

  return (
    <main className="w-full mt-20 mb-10">

      {/* ================= CONTACT HEADER ================= */}
      <section className="pt-28 pb-16 bg-white grid grid-cols-8">
        <div className="col-span-1 flex justify-end items-center">
          <span className="w-16 h-[2px] bg-black" />
        </div>

        <p className="col-span-6 text-sm font-semibold tracking-widest flex items-center pl-6 uppercase">
          GET IN TOUCH
        </p>

        <div className="col-span-1" />

        {/* Quote */}
        <div className="col-span-1" />
        <h1 className="col-span-6 text-2xl font-bold leading-snug mt-8">
          "देवा, आम्हाला हसायला शिकव… पण आम्ही कधी रडलो होतो, <br />
          याचा विसर पडू देऊ नकोस..!"
        </h1>
        <div className="col-span-1" />
      </section>

      {/* ================= CONTACT FORM + INFO ================= */}
      <section className="py-10 grid grid-cols-8 bg-white">
        <div className="col-span-1" />

        {/* FORM CARD */}
        <div className="col-span-4">
          <div
            className="relative rounded-2xl overflow-hidden p-10 border-4 border-black shadow-2xl"
            style={{
              backgroundImage: "url('/assets/images/bg-contact.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/5" />

            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Get In Touch
              </h2>

              <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
                <input
                  required
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="col-span-1 rounded-lg px-5 py-3 text-sm outline-none bg-white/90 backdrop-blur-sm border border-gray-200 hover:border-gray-300 focus:border-black transition"
                />
                <input
                  required
                  type="tel"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  placeholder="Contact Number"
                  className="col-span-1 rounded-lg px-5 py-3 text-sm outline-none bg-white/90 backdrop-blur-sm border border-gray-200 hover:border-gray-300 focus:border-black transition"
                />
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="col-span-1 rounded-lg px-5 py-3 text-sm outline-none bg-white/90 backdrop-blur-sm border border-gray-200 hover:border-gray-300 focus:border-black transition"
                />
                <input
                  required
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="State"
                  className="col-span-1 rounded-lg px-5 py-3 text-sm outline-none bg-white/90 backdrop-blur-sm border border-gray-200 hover:border-gray-300 focus:border-black transition"
                />

                <textarea
                  name="opinion"
                  value={formData.opinion}
                  onChange={handleChange}
                  placeholder="Your opinion"
                  className="col-span-2 rounded-lg px-5 py-4 text-sm outline-none resize-none h-28 bg-white/90 backdrop-blur-sm border border-gray-200 hover:border-gray-300 focus:border-black transition"
                />

                <div className="col-span-2 flex justify-center mt-4">
                  <button type="submit" className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-all transform hover:scale-105 shadow-lg">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* CONTACT DETAILS - MATCHING SCREENSHOT */}
        <div className="col-span-2 pl-12">
          <h2 className="text-3xl font-bold mb-8">Contact Us</h2>

          {/* Location */}
          <div className="flex items-start gap-3 mb-6 p-4  rounded-xl ">
            <MdLocationOn className="text-2xl text-yellow-500 mt-1 flex-shrink-0" />
            <p className="text-sm leading-relaxed">
              Belhekar Vasti, Near Vasantdada Sugar Institute, <br />
              Manjari (Bk), Tal. Haveli, Dist. Pune – 412 307
            </p>
          </div>

          {/* Phone numbers */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 p-3  rounded-lg  transition">
              <MdPhone className="text-xl text-yellow-500 flex-shrink-0" />
              <span className="text-sm font-medium">+91 93265 35224</span>
            </div>
            <div className="flex items-center gap-3 p-3  rounded-lg  transition">
              <MdPhone className="text-xl text-yellow-500 flex-shrink-0" />
              <span className="text-sm font-medium">+91 93710 74256</span>
            </div>
            <div className="flex items-center gap-3 p-3  rounded-lg  transition">
              <MdPhone className="text-xl text-yellow-500 flex-shrink-0" />
              <span className="text-sm font-medium">+91 97308 31701</span>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 p-3  rounded-lg  transition">
            <MdMail className="text-xl text-yellow-500 flex-shrink-0" />
            <span className="text-sm font-medium">saptasindhu99@gmail.com</span>
          </div>
        </div>

        <div className="col-span-1" />
      </section>
    </main>
  );
};

export default Contact;
