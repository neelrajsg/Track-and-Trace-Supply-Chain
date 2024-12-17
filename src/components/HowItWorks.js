import React from 'react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 bg-primary text-secondary text-center">
      <h2 className="text-3xl font-bold mb-8">How It Works</h2>
      <p className="text-lg">Our process ensures you get real-time tracking for every product in your supply chain.</p>
      <div className="mt-8 flex justify-center">
        <div className="w-10/12 md:w-8/12 lg:w-6/12 bg-secondary text-primary p-6 rounded-lg shadow-lg">
          <ol className="list-decimal list-inside">
            <li className="mb-4">Product Scanning</li>
            <li className="mb-4">Tracking Data Collection</li>
            <li className="mb-4">Customer Notification</li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
