

const Footer = () => {
    return (
        <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-8 flex flex-wrap justify-center items-center">
            <div className="flex-shrink-0 w-full sm:w-auto">
              <img className="h-8 w-auto" src="/path/to/logo.png" alt="Logo" />
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-10">
              <p className="text-center sm:text-left text-gray-300">© 2023 Your Website. All rights reserved.</p>
              <p className="text-center sm:text-left text-gray-300">1234 Street Name, City, Country</p>
              <p className="text-center sm:text-left text-gray-300">Phone: 123-456-7890</p>
              <p className="text-center sm:text-left text-gray-300">Email: info@yourwebsite.com</p>
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-auto">
              <div className="flex items-center space-x-4">
                <a href="/privacy" className="text-gray-300 hover:text-gray-400">Privacy Policy</a>
                <span className="text-gray-300">|</span>
                <a href="/terms" className="text-gray-300 hover:text-gray-400">Terms of Service</a>
                <span className="text-gray-300">|</span>
                <a href="/contact" className="text-gray-300 hover:text-gray-400">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;