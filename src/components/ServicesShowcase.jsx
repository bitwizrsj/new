import React from 'react';

const ServiceCard = ({ title, description, children, className }) => (
  <div className={`bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between gap-4 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl ${className}`}>
    <div>
        <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    
    </div>
    <div className="mt-2 flex justify-center items-center gap-3 flex-wrap">{children}</div>
    <button className="bg-black text-white px-5 py-2 rounded-md text-sm mt-4 self-start hover:bg-gray-800">Learn more</button>
  </div>
);

const AppScreens = () => {
  const screenLayouts = [
    // Screen 1 - List view
    <div className="flex-1 bg-white rounded-lg border border-gray-100 mb-3 p-2 flex flex-col gap-1">
      <div className="h-2 bg-gray-100 rounded w-full"></div>
      <div className="h-2 bg-gray-100 rounded w-3/4"></div>
      <div className="h-2 bg-gray-100 rounded w-full"></div>
      <div className="h-2 bg-gray-100 rounded w-2/3"></div>
    </div>,
    
    // Screen 2 - Grid view
    <div className="flex-1 bg-white rounded-lg border border-gray-100 mb-3 p-2">
      <div className="grid grid-cols-2 gap-1 h-full">
        <div className="bg-gray-100 rounded"></div>
        <div className="bg-gray-100 rounded"></div>
        <div className="bg-gray-100 rounded"></div>
        <div className="bg-gray-100 rounded"></div>
      </div>
    </div>,
    
    // Screen 3 - Featured/Hero view (highlighted with border)
    <div className="flex-1 bg-white rounded-lg border-2 border-gray-400 mb-3 p-2 flex flex-col gap-1">
      <div className="h-8 bg-gray-100 rounded w-full mb-1"></div>
      <div className="h-1 bg-gray-100 rounded w-full"></div>
      <div className="h-1 bg-gray-100 rounded w-2/3"></div>
    </div>,
    
    // Screen 4 - Dashboard view
    <div className="flex-1 bg-white rounded-lg border border-gray-100 mb-3 p-2 flex flex-col gap-1">
      <div className="h-3 bg-gray-100 rounded w-full"></div>
      <div className="flex gap-1">
        <div className="h-6 bg-gray-100 rounded flex-1"></div>
        <div className="h-6 bg-gray-100 rounded flex-1"></div>
      </div>
      <div className="h-2 bg-gray-100 rounded w-1/2"></div>
    </div>
  ];

  return (
    <div className="flex flex-row items-center justify-center gap-3 relative">
        {screenLayouts.map((layout, i) => (
        <div key={i} className="w-20 h-36 bg-gray-50 rounded-xl border border-gray-200 shadow-sm flex flex-col p-2 relative">
          {/* Status bar */}
          <div className="h-1 mb-2"></div>
          
          {/* Dynamic content area */}
          {layout}
          
          {/* Bottom navigation dots */}
          <div className="flex justify-center items-center gap-1 mb-2">
            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
          </div>
          
          {/* Bottom button */}
          <div className="h-5 bg-black text-white text-[9px] flex justify-center items-center rounded-md font-medium">
            Let's talk
          </div>
        </div>
      ))}
      
      {/* Arrow pointing to the third phone */}
      <div className="absolute -bottom-8 left-1/2 transform translate-x-2">
        <div className="w-0 h-0 border-l-4 border-r-4 border-t-6 border-transparent border-t-black"></div>
      </div>
    </div>
  );
};

const WebsiteHero = () => (
  <div className="w-full border border-gray-200 rounded-xl p-4 bg-gray-50 flex flex-col gap-2">
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
    <div className="grid grid-cols-3 gap-2">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="h-12 bg-gray-200 rounded-md" />
      ))}
    </div>
    <div className="flex gap-2 mt-3">
      <div className="bg-black text-white text-xs px-3 py-1 rounded">Metrics</div>
      <div className="bg-black text-white text-xs px-3 py-1 rounded">Insights</div>
    </div>
  </div>
);

const LogoIcons = () => (
  <div className="grid grid-cols-5 gap-2">
    {[...Array(15)].map((_, i) => (
      <div key={i} className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white text-[8px]">L{i+1}</div>
    ))}
  </div>
);

const EcommerceMock = () => (
  <div className="flex items-center gap-4 w-full">
    <div className="flex flex-col items-center">
      <div className="w-20 h-28 bg-black rounded-md" />
      <p className="mt-1 text-xs">$49</p>
    </div>
    <div className="flex flex-col items-start gap-1">
      <button className="bg-black text-white px-4 py-1 text-xs rounded-md">Buy now</button>
      <p className="text-xs text-gray-500">Bid to own</p>
    </div>
  </div>
);

const ServicesShowcase = () => {
  return (
    <div className="p-6 flex  flex-wrap justify-center gap-6 bg-gray-100 min-h-screen">
        <div className='p-6 flex flex-col justify-center items-center gap-4'>
            <h1 className='text-3xl font-bold'>Our Digital Agency Services</h1>
        <p className='text-gray-700 max-w-2xl text-center'>We provide a variety of digital solutions that include responsive web design, app development, digital marketing strategies and more. </p>
      
        </div>
        <div className='flex max-w-7xl  justify-center gap-6 w-full'>
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
      
        <div className='flex max-w-7xl  justify-center gap-6 w-full'>

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