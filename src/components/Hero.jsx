import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 bg-white text-gray-900">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        Your Projects Deserve Better <br />
        <span className="text-black">Reliable Design & Dev Starts Here</span>
      </h1>

      <p className="text-gray-600 text-lg max-w-2xl mt-6">
        Frustrated with slow or unreliable results? We offer fast, high-quality design and
        development services tailored to your needs.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-8">
        <button className="bg-black text-white px-6 py-3 rounded-full font-semibold">
          Book A Free Call
        </button>
        <button className="border border-gray-400 text-black px-6 py-3 rounded-full font-semibold">
          View Recent Work
        </button>
      </div>

      {/* As Seen On */}
      <div className="mt-12">
        <p className="text-sm text-gray-500 mb-4">As seen on</p>
        <div className="flex flex-wrap justify-center items-center gap-6 opacity-70">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Land-book_logo.svg/512px-Land-book_logo.svg.png" alt="Land-book" className="h-6" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Product_Hunt_Logo.svg/512px-Product_Hunt_Logo.svg.png" alt="Product Hunt" className="h-6" />
          <img src="https://assets.website-files.com/6047a9e35e5dc06f539d45a3/63a30dba3e6e4a0c850d3d93_zest%20logo.png" alt="Zest" className="h-6" />
          <img src="https://designmunk.com/wp-content/uploads/2023/05/Designmunk.png" alt="Designmunk" className="h-6" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
