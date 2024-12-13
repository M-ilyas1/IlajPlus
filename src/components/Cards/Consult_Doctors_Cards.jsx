import { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { blood_specialist, child_specialist, dentist, chest_specialist, cosmetic_surgeon, diabetologist, endocrinologist, ent_specialist, eye_specialist, general_physician, general_surgeon, gynecologist, heart_specialist, kidney_specialist, neurologist, oncologist, orthopedic_surgeon, physiotherapist, skin_specialist, speech_therapist } from '../../assets/Find_Doc/index'

const doctors = [
  { img: blood_specialist, name: "blood specialist", },
  { img: child_specialist, name: "child specialist"},
  { img: dentist, name: "dentist"},
  { img: chest_specialist, name: "chest specialist"},
  { img: cosmetic_surgeon, name: "cosmetic_surgeon"},
  { img: diabetologist, name: "diabetologist"},
  { img: endocrinologist, name: "endocrinologist"},
  { img: ent_specialist, name: "ent specialist"},
  { img: eye_specialist, name: "eye specialist"},
  { img: general_physician, name: "general physician"},
  { img: general_surgeon, name: "general surgeon"},
  { img: gynecologist, name: "gynecologist" }
];

const FeatureSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <section className="w-full py-8 bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row justify-between items-center py-2 space-y-4 sm:space-y-0">
          <h2 className="text-base sm:text-2xl font-bold text-center sm:text-left">
            Consult Best Doctors Online
          </h2>
          <button
            onClick={togglePopup}
            className="text-blue-500 text-base pb-4 sm:text-lg rounded-lg hover:text-blue-600 transition-transform transform hover:scale-105"
          >
            See All
          </button>
        </div>

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
            </div>
          ))}
        </div>
      </div>

      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg md:p-6 p-2 w-[90%] sm:w-[80%] lg:w-[60%] h-[70%] max-w-4xl overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <input
                type="text"
                placeholder="Find a doctor online..."
                className="border rounded-lg px-4 py-2 flex-grow mr-4"
              />
              <button
                onClick={togglePopup}
                className=" text-blue-700 md:text-3xl text-2xl outline-none rounded-lg transition"
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
