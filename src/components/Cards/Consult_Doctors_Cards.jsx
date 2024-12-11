import { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import Doctor1 from "../../Imgs/feature_img/fea2.png";
import Doctor2 from "../../Imgs/feature_img/fea2.png";
import Doctor3 from "../../Imgs/feature_img/fea2.png";
import Doctor4 from "../../Imgs/feature_img/fea2.png";

const doctors = [
  { img: Doctor1, name: "Dr. John Smith", specialization: "Cardiologist" },
  { img: Doctor2, name: "Dr. Jane Doe", specialization: "Neurologist" },
  { img: Doctor3, name: "Dr. Alice Brown", specialization: "Pediatrician" },
  { img: Doctor4, name: "Dr. Mike Johnson", specialization: "Orthopedist" },
  { img: Doctor1, name: "Dr. Emily Clark", specialization: "Dermatologist" },
  { img: Doctor2, name: "Dr. Robert White", specialization: "Psychiatrist" },
  { img: Doctor2, name: "Dr. Robert White", specialization: "Psychiatrist" },
  { img: Doctor2, name: "Dr. Robert White", specialization: "Psychiatrist" },
  { img: Doctor2, name: "Dr. Robert White", specialization: "Psychiatrist" },
  { img: Doctor2, name: "Dr. Robert White", specialization: "Psychiatrist" },
  { img: Doctor2, name: "Dr. Robert White", specialization: "Psychiatrist" },
  { img: Doctor2, name: "Dr. Robert White", specialization: "Psychiatrist" },
  // Add more doctors here...
];

const FeatureSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <section className="w-full py-8 bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center py-2 space-y-4 sm:space-y-0">
          <h2 className="text-2xl sm:text-3xl font-bold text-center sm:text-left">
            Consult Best Doctors Online
          </h2>
          <button
            onClick={togglePopup}
            className="text-blue-500 px-6 py-2 rounded-lg hover:text-blue-600 transition"
          >
            See All
          </button>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {doctors.slice(0, 6).map((doctor, index) => (
            <div
              key={index}
              className="bg-white shadow-lg p-4 flex flex-col items-center text-center rounded-lg"
            >
              <img
                src={doctor.img}
                alt={doctor.name}
                className="w-16 h-16 sm:w-20 sm:h-20 mb-2 object-cover rounded-full"
              />
              <h3 className="text-sm font-medium truncate w-full">
                {doctor.name}
              </h3>
              <p className="text-xs text-gray-500">{doctor.specialization}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-2 w-[90%] sm:w-[80%] lg:w-[60%] h-[70%] max-w-4xl overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <input
                type="text"
                placeholder="Find a doctor online..."
                className="border rounded-lg px-4 py-2 flex-grow mr-4"
              />
              <button
                onClick={togglePopup}
                className=" text-orange-700 md:text-3xl text-2xl outline-none rounded-lg transition"
              >
                <IoCloseCircle/>
              </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {doctors.map((doctor, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg p-4 flex flex-col items-center text-center rounded-lg"
                >
                  <img
                    src={doctor.img}
                    alt={doctor.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 mb-2 object-cover rounded-full"
                  />
                  <h3 className="text-sm font-medium truncate w-full">
                    {doctor.name}
                  </h3>
                  <p className="text-xs text-gray-500">{doctor.specialization}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeatureSection;
