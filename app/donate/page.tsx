'use client'

import { useState } from "react";
import DonateCTA from "@/components/shared/DonateCTA";
import { IoChevronForward } from "react-icons/io5";

const Donate = () => {
    const [type, setType] = useState("one-time");
    const [amount, setAmount] = useState<number | null>(null);

    const presetAmounts = [500, 1000, 1500, 2000];


    const [step, setStep] = useState<"amount" | "details">("amount");

    const [form, setForm] = useState({
        name: "",
        email: "",
        mobile: "",
        pan: "",
        country: "",
        state: "",
        city: "",
        pincode: "",
        address: "",
        message: "",
    });

    const handleDonate = async () => {
        if (!amount || amount < 100) {
            alert("Minimum donation amount is ₹100");
            return;
        }

        // 1. Create order on backend
        const res = await fetch("/api/donation/create-order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                amount,
                type,
                ...form,
            }),
        });

        if (!res.ok) {
            alert("Unable to initiate payment");
            return;
        }

        const data = await res.json();

        // 2. Razorpay options
        const options = {
            key: process.env.NEXT_PUBLIC_RAZORPAY_KEY!,
            amount: data.amount,
            currency: data.currency,
            order_id: data.orderId,

            name: "Saptasindhu Mahila Sanstha",
            description: "Donation",

            prefill: {
                name: form.name,
                email: form.email,
                contact: form.mobile,
            },

            handler: async function (response: any) {
                // 3. Verify payment (UX purpose only)
                await fetch("/api/donation/verify", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(response),
                });

                alert("Thank you! Your donation was successful.");
            },

            modal: {
                ondismiss: function () {
                    console.log("Payment popup closed");
                },
            },

            theme: {
                color: "#facc15",
            },
        };

        const razorpay = new (window as any).Razorpay(options);
        razorpay.open();
    };


    return (
        <main className="w-full bg-[#ffffff]  pb-20">

            <section
                className="relative w-full h-screen bg-cover bg-top "
                style={{ backgroundImage: "url('/assets/images/bg-heros-donate.png')" }}
            >
                <div className="absolute inset-0 bg-black/50" />

                <div className="relative grid grid-cols-8 h-full items-center">
                    <div className="col-span-1" />

                    <div className="col-span-6 mt-20">
                        <h1 className="text-white text-4xl font-bold leading-tight mb-4">
                            Give Hope, Change <br />
                            a child’s Future.
                        </h1>

                        <p className="text-white text-lg max-w-md mb-6">
                            Your donation helps us provide food, shelter,
                            and education.
                        </p>

                        <button
                            onClick={() =>
                                document
                                    .getElementById("donation-form")
                                    ?.scrollIntoView({ behavior: "smooth" })
                            }
                            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-2 rounded-lg"
                        >
                            Donate Us
                        </button>
                    </div>

                    <div className="col-span-1" />
                </div>
            </section>


            <section className="grid grid-cols-8 bg-[#fff7e6] pb-20">
                <div className="col-span-1" />

                <div className="col-span-6 flex justify-center">
                    <div className="bg-white rounded-2xl shadow-lg w-full max-w-3xl p-12 mt-20">

                        {/* ================= STEP 1 : AMOUNT ================= */}
                        {step === "amount" && (
                            <>
                                <h1 className="text-3xl font-bold mb-8 text-center">
                                    Make a Donation
                                </h1>

                                <div className="flex justify-center gap-6 mb-8">
                                    <button
                                        onClick={() => setType("one-time")}
                                        className={`px-8 py-3 rounded-lg font-medium border ${type === "one-time"
                                            ? "bg-yellow-400 text-white border-yellow-400"
                                            : "border-gray-300 text-gray-600"
                                            }`}
                                    >
                                        One Time
                                    </button>

                                    <button
                                        onClick={() => setType("monthly")}
                                        className={`px-8 py-3 rounded-lg font-medium border ${type === "monthly"
                                            ? "bg-yellow-400 text-white border-yellow-400"
                                            : "border-gray-300 text-gray-600"
                                            }`}
                                    >
                                        Monthly
                                    </button>
                                </div>

                                <div className="grid grid-cols-4 gap-4 mb-6">
                                    {presetAmounts.map((amt) => (
                                        <button
                                            key={amt}
                                            onClick={() => setAmount(amt)}
                                            className={`border rounded-lg py-3 font-medium ${amount === amt
                                                ? "border-yellow-400 bg-yellow-50"
                                                : "border-gray-300"
                                                }`}
                                        >
                                            ₹ {amt}
                                        </button>
                                    ))}
                                </div>

                                <input
                                    type="number"
                                    placeholder="Other Amount"
                                    value={amount ?? ""}
                                    onChange={(e) => setAmount(Number(e.target.value))}
                                    className="w-full border rounded-lg px-4 py-3 mb-2"
                                />

                                <p className="text-xs text-red-500 text-right mb-6">
                                    Minimum amount is 100
                                </p>

                                <div className="text-center">
                                    <button
                                        onClick={() => {
                                            if (!amount || amount < 100) return;
                                            setStep("details");
                                        }}
                                        className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-10 py-4 rounded-xl mb-6"
                                    >
                                        Proceed To Donate
                                    </button>
                                </div>

                                <div className="flex justify-center gap-10 text-gray-600 text-sm">
                                    <span>Secure</span>
                                    <span>80G Tax Benefits</span>
                                    <span>Transparent</span>
                                </div>
                            </>
                        )}

                        {/* ================= STEP 2 : PERSONAL DETAILS ================= */}
                        {step === "details" && (
                            <>
                                {/* HEADER */}
                                <div className="grid grid-cols-8 gap-4 mb-6">
                                    <button
                                        onClick={() => setStep("amount")}
                                        className="text-xl col-span-1"
                                    >
                                        <IoChevronForward className=" text-xl font-bold rotate-180" />
                                    </button>
                                    <h2 className="text-3xl font-bold col-span-6 text-center">Personal Details</h2>
                                    <div className="col-span-1" />
                                    <div className="col-span-1" />

                                    <p className="text-xs text-red-500 mb-6 text-center col-span-6">
                                        Please provide your PAN and Tax Exemption (80G) is applicable.
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        ["name", "Name*"],
                                        ["email", "Email*"],
                                        ["mobile", "Mobile*"],
                                        ["pan", "PAN*"],
                                        ["country", "Country*"],
                                        ["state", "State*"],
                                        ["city", "City*"],
                                        ["pincode", "PIN Code*"],
                                    ].map(([key, label]) => (
                                        <input
                                            key={key}
                                            placeholder={label}
                                            value={(form as any)[key]}
                                            onChange={(e) =>
                                                setForm({ ...form, [key]: e.target.value })
                                            }
                                            className="border rounded-lg px-4 py-3"
                                        />
                                    ))}
                                </div>

                                <textarea
                                    placeholder="Address*"
                                    rows={3}
                                    className="border rounded-lg px-4 py-3 w-full mt-4"
                                    value={form.address}
                                    onChange={(e) =>
                                        setForm({ ...form, address: e.target.value })
                                    }
                                />

                                <textarea
                                    placeholder="Message"
                                    rows={3}
                                    className="border rounded-lg px-4 py-3 w-full mt-4"
                                    value={form.message}
                                    onChange={(e) =>
                                        setForm({ ...form, message: e.target.value })
                                    }
                                />

                                <div className="text-center mt-6">
                                    <button
                                        onClick={handleDonate}
                                        className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-10 py-4 rounded-xl"
                                    >
                                        Proceed To Donate
                                    </button>

                                </div>
                            </>
                        )}
                    </div>

                </div>

                <div className="col-span-1" />
            </section>

            <section className="bg-white py-15 grid grid-cols-8 mb-0">
                <div className="col-span-1 flex items-center justify-end px-4 mb-4">
                    <span className="w-20 h-[2px] bg-black" />
                </div>
                <h4 className="text-sm font-semibold tracking-wide flex items-center gap-4 mb-4 col-span-7">
                    OTHER WAYS TO DONATE
                </h4>

                <div className="col-span-1" />
                <div className="col-span-6">

                    <h2 className="text-3xl font-bold mb-6">
                        Donate via NEFT or UPI
                    </h2>

                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        <div className="text-gray-700 leading-relaxed">
                            <p className="mb-4">
                                We would prefer if you make donations using the above form,
                                but if you are facing difficulties then please use the
                                following QR Code or Bank Account details.
                            </p>

                            <p className="mb-6">
                                To help us generate the donation receipt, please share the
                                transaction details on:
                            </p>

                            <p className="text-sm text-gray-600">
                                +91 93265 35224 &nbsp;&nbsp;
                                +91 93710 74256 &nbsp;&nbsp;
                                +91 97308 31701
                            </p>

                            <h3 className="text-2xl font-bold mt-10 mb-4">Bank Details</h3>

                            <p><strong>Bank:</strong> State Bank of India, Hadapsar Branch, Pune</p>
                            <p><strong>IFSC:</strong> SBIN0006319</p>
                            <p><strong>Name:</strong> Saptasindhu Mahila Adhar, Balsangopan and Shikshan Sanstha</p>
                            <p><strong>Account No:</strong> 00000042543704360</p>
                        </div>

                        <div className="text-center">
                            <p className="font-semibold mb-4">
                                UPI ID : saptasindhumahila132@sbi
                            </p>
                            <img
                                src="/assets/images/qr-code.png"
                                alt="UPI QR Code"
                                className="mx-auto w-72"
                            />
                        </div>
                    </div>
                </div>

                <div className="col-span-1" />
            </section>

            <DonateCTA />
        </main>
    );
};

export default Donate;
