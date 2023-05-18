

const SignUp = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className="bg-white rounded-lg shadow p-8 sm:p-10 md:p-12 lg:p-16 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        <div>
          <label htmlFor="name" className="block font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="password" className="block font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-blue-500"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="photoUrl" className="block font-medium mb-1">
            Photo URL
          </label>
          <input
            type="text"
            id="photoUrl"
            className="border border-gray-300 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-blue-500"
          />
        </div>
        <div className="sm:col-span-2">
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-lg px-6 py-3 w-full font-medium focus:outline-none hover:bg-blue-600"
          >
            Register
          </button>
        </div>
      </form>
    </div>
    );
};

export default SignUp;