import React from "react";

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white text-center py-20">
      <div className="container mx-auto">
        <h1 className="text-5xl font-extrabold leading-tight">
          The Future of Club Management is Here
        </h1>
        <p className="text-xl mt-4 mb-8 text-gray-400">
          Golf Software Agency provides a unified, AI-powered platform designed
          to elevate the member experience and streamline your club's
          operations.
        </p>
        <a
          href="#contact"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300"
        >
          Request a Consultation
        </a>
      </div>
    </section>
  );
};

export default Hero;
