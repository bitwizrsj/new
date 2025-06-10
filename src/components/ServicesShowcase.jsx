import React from "react";
import { motion } from "framer-motion";
import {
  FaGoogle,
  FaApple,
  FaHome,
  FaList,
  FaBox,
  FaUser,
  FaSearch,
  FaPhone,
  FaEnvelopeOpen,
  FaLocationArrow,
} from "react-icons/fa";
import maps from "../assets/maps.mp4"; // Adjust the path as necessary
import { FaLocationPin, FaMessage } from "react-icons/fa6";

const ServiceCard = ({ title, description, children, className }) => (
  <div
    className={`bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between gap-4 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl ${className}`}
  >
    <div>
      <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
    <div className="mt-2 flex justify-center items-center gap-3 flex-wrap">
      {children}
    </div>
    <button className="bg-black text-white px-5 py-2 rounded-md text-sm mt-4 self-start hover:bg-gray-800">
      Learn more
    </button>
  </div>
);

const AppScreens = () => {
  const screenLayouts = [
    // Screen 1 - List view

    <div className="flex-1 bg-amber-50 rounded-lg border border-gray-100 mb-3 p-2 flex flex-col gap-1">
      <h1 className="text-[10px] font-semibold mb-1 text-center text-amber-600">
        Login
      </h1>

      <div className="flex flex-col gap-1">
        <input
          className="h-2 bg-amber-200 rounded-xs w-full text-[6px] px-1 outline-none text-amber-700"
          placeholder="Email"
        />
        <input
          className="h-2 bg-amber-200 rounded-xs w-full text-[6px] px-1 outline-none text-amber-700"
          placeholder="Password"
        />
        <button className="h-2 rounded w-full bg-amber-900 text-[6px] text-white hover:bg-amber-800 transition-colors duration-200 mt-1">
          Sign In
        </button>

        <p className="text-[6px] text-center text-amber-600 my-1">
          or continue
        </p>

        <button className="h-2 rounded w-full bg-amber-200 text-[6px] text-amber-700 hover:bg-amber-300 transition-colors duration-200 flex items-center justify-center gap-1 leading-none">
          <FaGoogle className="text-[6px]" />
          Google
        </button>
        <button className="h-2 rounded w-full bg-amber-200 text-[6px] text-amber-700 hover:bg-amber-300 transition-colors duration-200 flex items-center justify-center gap-1 leading-none">
          <FaApple className="text-[6px]" />
          Apple
        </button>
      </div>
    </div>,

    //screen 2
    <div className="flex-1 bg-amber-50 rounded-lg border border-gray-100 mb-3 overflow-hidden flex flex-col gap-1">
      {/* Header */}
      <div className="flex justify-between items-center bg-amber-600 rounded-br-full pl-1">
        <h1 className="text-[10px] font-semibold mb-1 text-left text-white">
          Daily <br /> Grocery
        </h1>
        <div className="text-[10px] text-black">
          <svg
            className="w-[10px] h-[10px]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M10 2a8 8 0 105.293 14.707l4.5 4.5 1.414-1.414-4.5-4.5A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z" />
          </svg>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 overflow-x-hidden mb-0.5">
        <button className="text-[6px] text-white px-1 rounded bg-amber-950 hover:bg-amber-600 transition-colors duration-200">
          Fruits
        </button>
        <button className="text-[6px] text-amber-800 rounded bg-amber-200  hover:bg-amber-300 transition-colors duration-200">
          Vegetables
        </button>
      </div>
      <div className="flex gap-1">
        <div className="h-6 bg-amber-100 rounded flex-1 hover:bg-amber-200"></div>
        <div className="h-6 bg-amber-100 rounded flex-1 hover:bg-amber-200"></div>
      </div>
      <div className="flex gap-1">
        <div className="h-6 bg-amber-100 rounded flex-1 hover:bg-amber-200"></div>
        <div className="h-6 bg-amber-100 rounded flex-1 hover:bg-amber-200"></div>
      </div>
      <div className="w-full h-3 p-1 flex justify-between items-center gap-1 bg-amber-200 rounded">
        <button className="h-2 text-[10px] text-amber-950 hover:text-amber-800 ">
          <FaHome />
        </button>
        <button className="h-2 text-[10px] text-amber-950 hover:text-amber-800 ">
          <FaList />
        </button>
        <button className="h-2 text-[9px] text-amber-950 hover:text-amber-800 ">
          <FaBox />
        </button>
        <button className="h-2 text-[9px] text-amber-950 hover:text-amber-800 ">
          <FaUser />
        </button>
      </div>
    </div>,

    // Screen 3
    <div className="flex-1 bg-amber-50 rounded-lg border border-gray-100 mb-3 overflow-hidden flex flex-col gap-1">
      {/* Header */}
      <div className="h-8 flex justify-between items-center bg-amber-600 opacity-50 rounded-br-full pl-1"></div>

      {/* Input Search Bar */}
      <div className="absolute flex items-center top-5 p-0.5">
        <input
          type="text"
          placeholder="Search..."
          className="text-[8px] w-3/4 rounded bg-amber-100 border border-amber-300 placeholder:text-amber-500 focus:outline-none"
        />
        <button className="px-0.5 text-[8px] text-white bg-amber-700 rounded hover:bg-amber-800">
          <FaSearch className="inline-block" />
        </button>
      </div>
      <p className="text-[6px] text-amber-600">Recent Search</p>
      <div className="flex gap-0.5">
        <div className="h-2 w-full  bg-amber-100 rounded  hover:bg-amber-200"></div>
        <div className="h-2 w-full  bg-amber-100 rounded hover:bg-amber-200"></div>
        <div className="h-2 w-full  bg-amber-100 rounded hover:bg-amber-200"></div>
      </div>
    </div>,

    // Screen 4
    <div className="flex-1 bg-amber-50 rounded-lg border border-gray-100 mb-3 overflow-hidden flex flex-col gap-1">
      <div className="flex justify-between items-center bg-amber-600 rounded-br-full pl-1">
        <h1 className="text-[10px] font-semibold mb-1 text-left text-white">
          Location <br /> Map
        </h1>
      </div>
      <div className="w-full h-10">
        <video
          className="w-full h-full object-cover rounded-t-lg"
          src={maps}
          muted
          autoPlay
          loop
        />
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between items-center bg-amber-200">
          <p className="text-[6px]">Richard Doe </p>
          <div className="flex items-center gap-1 text-[6px] text-amber-600">
            <FaPhone />
            <FaEnvelopeOpen />
          </div>
        </div>
        <hr className="border-t border-amber-300 mb-0.5" />
        <p className="text-[6px] flex gap-0.5 items-center ">
          <FaLocationPin className="text-amber-600 block mt-0.5" />
          Location{" "}
        </p>
        <div className="w-3/4 h-1 bg-amber-200 rounded mb-1.5"></div>
        {/* <div className="w-full h-1 bg-amber-200 rounded mb-0.5"></div> */}

        <button className="w-full h-2 bg-amber-900 text-[6px] text-white hover:bg-amber-800 transition-colors duration-200 rounded">
          Live Tracking
        </button>
      </div>
    </div>,

    // Screen 5
    <div className="flex-1 bg-amber-50 rounded-lg border border-gray-100 mb-3 p-2 flex flex-col gap-1">
      {/* Header */}
      <div className="flex justify-between items-center bg-amber-600 rounded-br-full px-2 py-1">
        <h1 className="text-[10px] font-semibold text-white">Order Placed</h1>
        <span className="text-[7px] text-white">#ORD2345</span>
      </div>

      {/* Minimal Info Grid */}
      <div className="grid grid-cols-2 gap-1 mt-1">
        <div className="bg-amber-100 rounded p-1 text-[6px] text-amber-800 text-center">
          5 Items
        </div>
        <div className="bg-amber-100 rounded p-1 text-[6px] text-amber-800 text-center">
          ₹320.00
        </div>
      </div>

      {/* Order Status */}
      <div className="mt-1 text-[6px] text-amber-700 text-center">
        Status: <span className="font-semibold text-amber-900">Confirmed</span>
      </div>

      {/* Button */}
      <button className="mt-1 w-full h-2 bg-amber-900 text-[6px] text-white hover:bg-amber-800 transition-colors duration-200 rounded">
        View
      </button>
    </div>,
  ];

  return (
    <div className="flex flex-row items-center justify-center gap-3 relative">
      {screenLayouts.map((layout, i) => (
        <div
          key={i}
          className="w-24 h-40 bg-slate-800 rounded-xl border border-gray-200 shadow-sm flex flex-col p-2 relative"
        >
          {layout}

          {/* Bottom navigation dots */}
          <div className="flex justify-center items-center mb-1">
            <div className="w-1 h-1 border-1 border-white rounded-full"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

const WebsiteHero = () => (
  <div className="w-full border border-gray-200 rounded-xl p-4 bg-slate-800 flex flex-col gap-2">
    <div className="mt-2 w-full h-60 overflow-hidden rounded relative">
      <div className="absolute top-0 left-0 transform scale-[0.35] origin-top-left w-[283.33%] h-[333.33%]">
        <iframe
          src="https://hypernextechnologies.com/"
          title="Hypernex Technologies"
          className="w-full h-full border-none"
        />
      </div>
    </div>
  </div>
);

const DashboardDesign = () => (
  <div className="w-full border border-gray-200 rounded-xl p-4 bg-gray-50">
    <div className="w-full h-4 bg-gray-300 rounded mb-2"></div>

    <div className="grid grid-cols-3 gap-2 text-[10px] text-center text-gray-700 font-medium">
      <div className="bg-blue-100 rounded-md p-1 flex flex-col items-center">
        <div className="text-xs font-bold text-blue-900">12</div>
        Clients
        <div className="w-full h-1 mt-1 bg-blue-300 rounded-full">
          <div className="w-[60%] h-full bg-blue-700 rounded-full"></div>
        </div>
      </div>
      <div className="bg-green-100 rounded-md p-1 flex flex-col items-center">
        <div className="text-xs font-bold text-green-900">28</div>
        Projects
        <div className="w-full h-1 mt-1 bg-green-300 rounded-full">
          <div className="w-[80%] h-full bg-green-700 rounded-full"></div>
        </div>
      </div>
      <div className="bg-yellow-100 rounded-md p-1 flex flex-col items-center">
        <div className="text-xs font-bold text-yellow-900">$42k</div>
        Revenue
        <div className="w-full h-1 mt-1 bg-yellow-300 rounded-full">
          <div className="w-[70%] h-full bg-yellow-700 rounded-full"></div>
        </div>
      </div>
      <div className="bg-purple-100 rounded-md p-1 flex flex-col items-center">
        <div className="text-xs font-bold text-purple-900">5</div>
        Ongoing
        <div className="w-full h-1 mt-1 bg-purple-300 rounded-full">
          <div className="w-[40%] h-full bg-purple-700 rounded-full"></div>
        </div>
      </div>
      <div className="bg-red-100 rounded-md p-1 flex flex-col items-center">
        <div className="text-xs font-bold text-red-900">2</div>
        Delayed
        <div className="w-full h-1 mt-1 bg-red-300 rounded-full">
          <div className="w-[20%] h-full bg-red-700 rounded-full"></div>
        </div>
      </div>
      <div className="bg-gray-100 rounded-md p-1 flex flex-col items-center">
        <div className="text-xs font-bold text-gray-800">98%</div>
        Satisfaction
        <div className="w-full h-1 mt-1 bg-gray-300 rounded-full">
          <div className="w-[90%] h-full bg-gray-700 rounded-full"></div>
        </div>
      </div>
    </div>

    <div className="flex gap-2 mt-3">
      <button className="bg-black text-white text-xs px-3 py-1 rounded hover:bg-gray-800 transition-colors duration-200">
        Overview
      </button>
      <button className="bg-black text-white text-xs px-3 py-1 rounded hover:bg-gray-800 transition-colors duration-200">
        Reports
      </button>
    </div>
  </div>
);

const LogoIcons = () => {
  const logoData = [
    {
      id: 1,
      label: "Facebook",
      img: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
    },
    {
      id: 2,
      label: "YouTube",
      img: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
    },
    {
      id: 3,
      label: "Instagram",
      img: "https://cdn-icons-png.flaticon.com/512/1384/1384063.png",
    },
    {
      id: 4,
      label: "WhatsApp",
      img: "https://cdn-icons-png.flaticon.com/512/733/733585.png",
    },
    {
      id: 5,
      label: "LinkedIn",
      img: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    },
    {
      id: 6,
      label: "Twitter",
      img: "https://cdn-icons-png.flaticon.com/512/733/733579.png",
    },
    {
      id: 7,
      label: "GitHub",
      img: "https://cdn-icons-png.flaticon.com/512/2111/2111432.png",
    },
    {
      id: 8,
      label: "Pinterest",
      img: "https://cdn-icons-png.flaticon.com/512/733/733646.png",
    },
    {
      id: 9,
      label: "Reddit",
      img: "https://cdn-icons-png.flaticon.com/512/2111/2111589.png",
    },
    {
      id: 10,
      label: "Telegram",
      img: "https://cdn-icons-png.flaticon.com/512/2111/2111646.png",
    },
    {
      id: 11,
      label: "Skype",
      img: "https://cdn-icons-png.flaticon.com/512/2111/2111703.png",
    },
    {
      id: 12,
      label: "Adobe",
      img: "https://cdn-icons-png.flaticon.com/512/5968/5968520.png",
    },
    {
      id: 13,
      label: "Amazon",
      img: "https://cdn-icons-png.flaticon.com/512/732/732229.png",
    },
    {
      id: 14,
      label: "Google",
      img: "https://cdn-icons-png.flaticon.com/512/300/300221.png",
    },
    {
      id: 15,
      label: "Dribbble",
      img: "https://cdn-icons-png.flaticon.com/512/733/733544.png",
    },
  ];

  return (
    <div className="grid grid-cols-5 gap-2">
      {logoData.map((logo) => (
        <div
          key={logo.id}
          className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center bg-gray-200 "
          title={logo.label}
        >
          <img
            src={logo.img}
            alt={logo.label}
            className="w-full h-full object-contain p-1"
          />
        </div>
      ))}
    </div>
  );
};

const EcommerceMock = () => (
  <div className="flex items-center gap-4 w-full">
    <div className="flex flex-col items-center">
      <div className="w-20 h-28 bg-black rounded-md" />
      <p className="mt-1 text-xs">$49</p>
    </div>
    <div className="flex flex-col items-start gap-1">
      <button className="bg-black text-white px-4 py-1 text-xs rounded-md">
        Buy now
      </button>
      <p className="text-xs text-gray-500">Bid to own</p>
    </div>
  </div>
);

const ServicesShowcase = () => {
  return (
    <div className="p-6 flex  flex-wrap justify-center gap-6 bg-gray-100 min-h-screen">
      <div className="p-6 flex flex-col justify-center items-center gap-4">
        <h1 className="text-3xl font-bold">Our Digital Agency Services</h1>
        <p className="text-gray-700 max-w-2xl text-center">
          We provide a variety of digital solutions that include responsive web
          design, app development, digital marketing strategies and more.{" "}
        </p>
      </div>
      <div className="flex max-w-7xl  justify-center gap-6 w-full">
        <ServiceCard
          title="Mobile App"
          description="We craft intuitive and responsive mobile apps that engage your audience."
          className="w-1/2 "
        >
          <AppScreens />
        </ServiceCard>

        <ServiceCard
          title="Website"
          description="Stunning visual design, intuitive navigation, and optimized performance for your brand."
          className="w-1/2  "
        >
          <WebsiteHero />
        </ServiceCard>
      </div>

      <div className="flex max-w-7xl  justify-center gap-6 w-full">
        <ServiceCard
          title="Dashboard"
          description="Data-rich dashboards that turn insights into action. Clean, functional UI."
          className="w-1/3 "
        >
          <DashboardDesign />
        </ServiceCard>

        <ServiceCard
          title="Logo Design"
          description="Logos that are simple, scalable, and unforgettable — tailored to your vision."
          className="w-1/3 "
        >
          <LogoIcons />
        </ServiceCard>

        <ServiceCard
          title="E-Commerce"
          description="Robust, scalable online stores that deliver seamless user experience and conversions."
          className="w-1/3 "
        >
          <EcommerceMock />
        </ServiceCard>
      </div>
    </div>
  );
};

export default ServicesShowcase;
