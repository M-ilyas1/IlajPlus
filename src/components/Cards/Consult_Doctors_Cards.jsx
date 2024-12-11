import React, { useState } from "react";
import FeatureImg1 from "../../Imgs/feature_img/fea2.png";

const doctors = Array.from({ length: 40 }, (_, i) => ({
  img: FeatureImg1,
  heading: `Doctor ${i + 1}`,
}));

const FeatureSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <section className="w-full py-8 bg-gray-100">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center py-2">
          <h2 className="text-3xl font-bold">
            Consult Best Doctors Online
          </h2>
          <button
            onClick={togglePopup}
            className="text-blue-500 px-6 py-2 rounded-lg hover:text-blue-600 transition"
          >
            See All
          </button>
        </div>
        <div className="parent-container">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4  ">
            {doctors.slice(0, 6).map((doctor, index) => (
              <div
                key={index}
                className="bg-white shadow-lg p-4 flex flex-col items-center text-center"
              >
                <img
                  src={doctor.img}
                  alt={doctor.heading}
                  className="w-20 h-20 mb-2 object-cover rounded-full"
                />
                <h3 className="text-sm font-medium">{doctor.heading}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-[50%] h-[70%] max-w-4xl overflow-y-auto flex flex-col items-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-1 overflow-auto">
              {doctors.map((doctor, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg p-4 flex flex-col items-center text-center"
                >
                  <img
                    src={doctor.img}
                    alt={doctor.heading}
                    className="w-20 h-20 mb-2 object-cover rounded-full"
                  />
                  <h3 className="text-sm font-medium">{doctor.heading}</h3>
                </div>
              ))}
            </div>
            <div className="text-center mt-4">
              <button
                onClick={togglePopup}
                className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeatureSection;
