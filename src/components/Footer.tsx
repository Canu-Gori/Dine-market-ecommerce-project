import React from "react";
import Image from "next/image";
function Footer() {
  return (
    <footer>
      <div className="flex justify-between items-between ">

        <div className="w-2/5">
            <Image src="/Logo.png" alt="logo-image" width={160} height={80} />
            <p className="mt-10">Small, artisan label that offers a thoughtfully <br /> curated collection ofhigh quality everyday <br /> essentials made.</p>
        </div>

        <div className="w-1/5 ">
            <p className="font-bold text-xl text-gray-600">Company</p>
            <div><button className="mt-4 text-gray-500">About</button></div>
            <div><button className="mt-4 text-gray-500">Terms of Use</button></div>
            <div><button className="mt-4 text-gray-500">Privacy Policy</button></div> 
            <div><button className="mt-4 text-gray-500">How it Works</button></div> 
            <div><button className="mt-4 text-gray-500">Contact Us</button></div>        
        </div>

        <div className="w-1/5">
            <p className="font-bold text-xl text-gray-600">Support</p>
            <div><button className="mt-4 text-gray-500">Support Carrer</button></div>
            <div><button className="mt-4 text-gray-500">24h Service</button></div>
            <div><button className="mt-4 text-gray-500">Quick Chat</button></div>
        </div>

        <div className="w-1/5">
            <p className="font-bold text-xl text-gray-600">Contact</p>
            <div><button className="mt-4 text-gray-500">Whatsapp</button></div>
            <div><button className="mt-4 text-gray-500">Support 24h</button></div>
        </div>
      </div>
      <div className="flex justify-between items-center p-6 mt-24 border-t border-black ">
        <p>Copyright © 2022 Dine Market</p>
        <p>Design by.<b>Weird Design Studio</b></p>
        <p>Design by.<b>Weird Design Studio</b></p>
      </div>
    </footer>
  );
}

export default Footer;