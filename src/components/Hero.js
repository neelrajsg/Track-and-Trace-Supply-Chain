import React from 'react';

const Hero = () => {
  return (
    <section className="bg-primary text-secondary min-h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl font-bold">Real-Time Visibility into Your Supply Chain</h1>
      <p className="mt-4 text-lg">Track every product from the point of origin to the customer.</p>
      <div className="mt-6">
        <button className="bg-secondary text-primary px-6 py-2 rounded-full mr-4">Learn More</button>
        <button className="border border-secondary text-secondary px-6 py-2 rounded-full">Get Started</button>
      </div>
    </section>
  );
};

export default Hero;
