import React from 'react';

const features = [
  { title: 'Real-Time Tracking', description: 'Monitor shipments in real-time.' },
  { title: 'Secure Payments', description: 'Ensure fraud prevention with secure payments.' },
  { title: 'Analytics Dashboard', description: 'Analyze performance with comprehensive insights.' }
];

const Features = () => {
  return (
    <section id="features" className="py-16 bg-secondary text-primary text-center">
      <h2 className="text-3xl font-bold mb-8">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="p-6 bg-primary text-secondary rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
