'use client'

import { useRouter } from "next/navigation";
import { MdLocationOn, MdPhone, MdMail } from "react-icons/md";

const Footer = () => {
  
  const router = useRouter()

  return (
    <footer className="bg-black text-gray-300 pt-16 grid grid-cols-8">

      <div className="col-span-1"></div>
      <div className="col-span-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        <div>
          <img
            src="/assets/images/logo.png"
            alt="Logo"
            className="w-28 mb-4"
          />
          <p className="text-xs font-semibold leading-relaxed">
            Saptasindhu Mahila Adhar,
            <br />
            Balsangopan And Shikshan Sanstha
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-xs">
            Quick Links
          </h4>
          <ul className="space-y-2 text-xs text-gray-300">
            <li onClick={()=>router.push("/maii")} className="hover:text-white cursor-pointer">Maai</li>
            <li onClick={()=>router.push("/about")} className="hover:text-white cursor-pointer">About us</li>
            <li onClick={()=>router.push("/#")} className="hover:text-white cursor-pointer">Mission</li>
            <li onClick={()=>router.push("/gallery")} className="hover:text-white cursor-pointer">Gallery</li>
            <li onClick={()=>router.push("/policy")} className="hover:text-white cursor-pointer">Policy</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 text-xs">
            Contact Us
          </h4>

          <div className="flex items-start gap-2 mb-3">
            <MdLocationOn className="text-yellow-400 mt-1 flex-shrink-0 text-sm" />
            <p className="text-xs leading-relaxed flex-1">
              Belhekar Vasti, Near Vasantdada Sugar Institute,
              <br />
              Manjari (Bk), Tal. Haveli, Dist. Pune – 412 307
            </p>
          </div>

          <div className="space-y-1 mb-3">
            <div className="flex items-center gap-2">
              <MdPhone className="text-yellow-400 flex-shrink-0 text-sm" />
              <span className="text-xs">+91 93265 35224</span>
            </div>
            <div className="flex items-center gap-2">
              <MdPhone className="text-yellow-400 flex-shrink-0 text-sm" />
              <span className="text-xs">+91 93710 74256</span>
            </div>
            <div className="flex items-center gap-2">
              <MdPhone className="text-yellow-400 flex-shrink-0 text-sm" />
              <span className="text-xs">+91 97308 31701</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <MdMail className="text-yellow-400 flex-shrink-0 text-sm" />
            <span className="text-xs">saptasindhu99@gmail.com</span>
          </div>
        </div>

        <div className="flex flex-col justify-between items-end text-right">
          <div className="text-white text-3xl font-bold leading-snug">
            मी माई झाले,<br />
            तुम्ही गणगोत व्हा !..
          </div>

          <button onClick={()=>router.push("/donate")} className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded font-semibold hover:bg-yellow-500 transition">
            Donate Now
          </button>
        </div>
      </div>

      <div className="col-span-1"></div>

      <div className="border-t border-yellow-200 mt-12 col-span-8 mx-48">
        <div className="max-w-7xl mx-auto  py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-300">
          <div>
            © 2025 sindhutaisapakal.org. All rights reserved.{" "}
            <span className="underline cursor-pointer">Privacy Policy</span>
          </div>

          <div className="mt-3 md:mt-0">
            Supported by Mr Umesh Tharkude.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
