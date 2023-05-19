

const Section2 = () => {
    return (
        <section className="bg-blue-900 py-20  mt-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Our Key Features
            </h2>
            <p className="mt-4 text-lg text-blue-300">
              Explore the amazing features that set us apart.
            </p>
          </div>
          <div className="mt-16">
            <div className="flex flex-wrap justify-center">
              {/* Feature cards */}
              <div className="bg-white w-64 p-6 m-4 rounded-lg shadow-lg text-center">
                <svg
                  className="w-12 h-12 mx-auto mb-4 text-blue-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <h3 className="text-xl font-semibold text-blue-900">Easy to Use</h3>
                <p className="mt-2 text-gray-600">
                  Intuitive and user-friendly interface for seamless navigation.
                </p>
              </div>
              <div className="bg-white w-64 p-6 m-4 rounded-lg shadow-lg text-center">
                <svg
                  className="w-12 h-12 mx-auto mb-4 text-blue-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <h3 className="text-xl font-semibold text-blue-900">Secure &amp; Reliable</h3>
                <p className="mt-2 text-gray-600">
                  Robust security measures to protect your data and privacy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Section2;