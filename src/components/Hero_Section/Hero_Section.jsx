import Doc_Img from "../../Imgs/doctor.png";

const HeroSection = () => {
  return (
    <section className="w-full py-6">
      <div className="max-w-screen-xl bg-gradient-to-r from-blue-800 to-blue-900 md:rounded-xl rounded-none mx-auto md:px-16 px-6 md:py-0 pt-6 flex flex-col lg:flex-row items-center justify-between">
        {/* Left Side (Text and Form) */}
        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Welcome to IlajPlus
          </h1>
          <p className="text-lg text-white mb-6">
            Find the best doctors, hospitals, and labs in your area with ease.
            Your health, our priority!
          </p>

          {/* Search Form */}
          <div className="mb-6 flex justify-center lg:justify-start">
            <input
              type="text"
              placeholder="Search for doctors, hospitals..."
              className="text-black bg-white border border-white px-4 py-2 rounded-l-md w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button className="bg-orange-500 text-white px-6 py-2 rounded-r-md font-semibold hover:bg-orange-600 transition duration-300">
              Search.
            </button>
          </div>
        </div>

        {/* Right Side (Image) */}
        <div className="lg:w-1/2 flex justify-end">
          <img
            src={Doc_Img}
            alt="Health Image"
            className="md:w-[70%] w-auto h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
