import React from 'react';

const Section1 = () => {
    return (
        <div>
              <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Check out some testimonials from our satisfied customers.
          </p>
        </div>
        <div className="mt-10">
          <div className="max-w-3xl mx-auto space-y-8">
            {/* Testimonial cards */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center">
                <img
                  className="w-12 h-12 rounded-full mr-4"
                  src="customer1.jpg"
                  alt="Customer 1"
                />
                <div>
                  <p className="text-lg font-semibold text-gray-900">John Doe</p>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center">
                <img
                  className="w-12 h-12 rounded-full mr-4"
                  src="customer2.jpg"
                  alt="Customer 2"
                />
                <div>
                  <p className="text-lg font-semibold text-gray-900">Jane Smith</p>
                  <p className="text-gray-600">Nulla ac ligula nec est gravida vestibulum.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        </div>
    );
};

export default Section1;