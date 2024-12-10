import { useState } from "react";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoIosMenu,
  IoIosClose,
} from "react-icons/io";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [nestedDropdownOpen, setNestedDropdownOpen] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
    setNestedDropdownOpen(null); // Close any nested dropdown when toggling the parent
  };

  const toggleNestedDropdown = (index) => {
    setNestedDropdownOpen(nestedDropdownOpen === index ? null : index);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Data for the menu
  const dropdownData = {
    0: {
      label: "Doctors",
      items: [
        {
          label: "Find doctor by speciality",
          Items: [],
        },
        {
          label: "Dermatologist",
          subItems: [
            "Dermatologist in Lahore",
            "Dermatologist in Islamabad",
            "Dermatologist in Karachi",
          ],
        },
        {
          label: "Gynecologist",
          subItems: [
            "Gynecologist in Lahore",
            "Gynecologist in Islamabad",
            "Gynecologist in Karachi",
          ],
        },
        {
          label: "Urologist",
          subItems: [
            "Urologist in Lahore",
            "Urologist in Islamabad",
            "Urologist in Karachi",
          ],
        },
        {
          label: "Gastroenterologist",
          subItems: [
            "Gastroenterologist in Lahore",
            "Gastroenterologist in Islamabad",
            "Gastroenterologist in Karachi",
          ],
        },
        {
          label: "Neurologist",
          subItems: [
            "Neurologist in Lahore",
            "Neurologist in Islamabad",
            "Neurologist in Karachi",
          ],
        },
      ],
    },
    1: {
      label: "Hospitals",
      items: [
        {
          label: "Lahore Hospitals",
          subItems: [
            "Lahore Hospitals",
            "Doctors Hospital",
            "Hameed Latif Hospital",
            "Evercare Hospital",
            "Fatima Memorial Hospital",
            "Ittefaq Hospital",
          ],
        },
        {
          label: "Karachi Hospitals",
          subItems: [
            "South City Hospital",
            "Darul Sehat Hospital",
            "Patel Hospital",
            "Saifee Hospital",
            "Mamji Hospital",
            "All Hospitals in Karachi",
          ],
        },
        {
          label: "Islamabad Hospitals",
          subItems: [
            "Shifa International Hospital",
            "Quaid-e-Azam International Hospital",
            "Maroof International Hospital",
            "Ali Medical Centre",
            "Islamabad Specialists Clinic",
            "All Hospitals in Islamabad",
          ],
        },
      ],
    },
    2: {
      label: "Labs and Diagnostics",
      items: [
        {
          label: "Lahore Labs",
          subItems: [
            "Chughtai Lab",
            "Al Razi Healthcare Lab",
            "Alnoor Diagnostic Centre",
            "Dr. Essa Lab",
            "Islamabad Diagnostic Center (IDC)",
          ],
        },
        {
          label: "Islamabad Labs",
          subItems: [
            "Islamabad Diagnostic Center (IDC)",
            "Advanced Diagnostic Center",
            "Metropole Lab",
            "Chughtai Lab",
            "Ali Medical Centre",
          ],
        },
        {
          label: "Karachi Labs",
          subItems: [
            "Chughtai Lab",
            "Islamabad Diagnostic Centre",
            "Darul Sehat Hospital Lab",
            "Hashmanis Hospital Laboratory",
            "One Health Lab",
          ],
        },
        {
          label: "Lab Tests",
          subItems: [
            "Lab Tests",
            "CBC",
            "Lipid Profile",
            "LFT",
            "Semen Analysis",
            "Thyroid Function Test",
            "All Lab Tests",
          ],
        },
      ],
    },
    3: { label: "Surgeries", items: [] },
    4: { label: "Health Blog", items: [] },
  };

  return (
    <nav className="bg-gray-0 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left side */}
        <div className="flex items-center space-x-8">
          <div className="text-3xl font-extrabold text-orange-400 cursor-pointer">
            Ilaj<span className="text-blue-800">Plus</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {Object.keys(dropdownData).map((key) => (
              <div key={key} className="relative">
                <button
                  onClick={() => toggleDropdown(Number(key))}
                  className="flex items-center text-gray-700 hover:text-blue-500 transition"
                >
                  {dropdownData[key].label}
                  {dropdownData[key].items.length > 0 && (
                    <span className="ml-2 text-xs">
                      {dropdownOpen === Number(key) ? (
                        <IoIosArrowUp />
                      ) : (
                        <IoIosArrowDown />
                      )}
                    </span>
                  )}
                </button>
                {dropdownOpen === Number(key) && (
                  <div className="absolute mt-2 w-56 bg-white shadow-lg rounded-md z-10">
                    <ul>
                      {dropdownData[key].items.map((item, idx) => (
                        <li key={idx} className="relative group">
                          <button
                            onClick={() =>
                              item.subItems && toggleNestedDropdown(idx)
                            }
                            className={`block px-4 py-2 text-left text-gray-700 hover:bg-gray-100 ${
                              item.subItems ? "cursor-pointer" : ""
                            }`}
                          >
                            <span className="flex items-center justify-between">
                              {item.label}
                              {item.subItems && (
                                <span className="ml-2 text-xs">
                                  {nestedDropdownOpen === idx ? (
                                    <IoIosArrowUp />
                                  ) : (
                                    <IoIosArrowDown />
                                  )}
                                </span>
                              )}
                            </span>
                          </button>
                          {nestedDropdownOpen === idx && item.subItems && (
                            <div className="absolute top-0 left-full mt-0 ml-1 w-48 bg-white shadow-lg rounded-md">
                              <ul>
                                {item.subItems.map((subItem, subIdx) => (
                                  <li
                                    key={subIdx}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                  >
                                    {subItem}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Buttons */}
        <div className="hidden md:flex space-x-4">
          <button className="px-4 py-2 text-blue-800 border border-blue-800 rounded-md hover:bg-blue-800 hover:text-white transition">
            LogIn/SignUp
          </button>
          <button className="px-4 py-2 text-orange-500 border border-orange-500 rounded-md hover:bg-orange-500 hover:text-white transition">
            Join as Doctor
          </button>
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition">
            Contact No
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-2xl">
            {mobileMenuOpen ? <IoIosClose /> : <IoIosMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col space-y-4 py-4 px-6">
            {Object.keys(dropdownData).map((key) => (
              <div key={key}>
                <button
                  onClick={() => toggleDropdown(Number(key))}
                  className="flex items-center text-gray-700 hover:text-blue-500 w-full text-left"
                >
                  {dropdownData[key].label}
                  {dropdownData[key].items.length > 0 && (
                    <span className="ml-2 text-xs">
                      {dropdownOpen === Number(key) ? (
                        <IoIosArrowUp />
                      ) : (
                        <IoIosArrowDown />
                      )}
                    </span>
                  )}
                </button>
                {dropdownOpen === Number(key) && (
                  <div className="mt-2 space-y-2 pl-4">
                    {dropdownData[key].items.map((item, idx) => (
                      <div key={idx}>
                        <button
                          onClick={() =>
                            item.subItems && toggleNestedDropdown(idx)
                          }
                          className="block text-left text-gray-700"
                        >
                          {item.label}
                          {item.subItems && (
                            <span className="ml-2 text-xs">
                              {nestedDropdownOpen === idx ? (
                                <IoIosArrowUp />
                              ) : (
                                <IoIosArrowDown />
                              )}
                            </span>
                          )}
                        </button>
                        {nestedDropdownOpen === idx && item.subItems && (
                          <div className="mt-2 pl-4 space-y-2">
                            {item.subItems.map((subItem, subIdx) => (
                              <div key={subIdx} className="text-gray-700">
                                {subItem}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex flex-col space-y-4">
              <button className="px-4 py-2 text-blue-800 border border-blue-800 rounded-md hover:bg-blue-800 hover:text-white transition">
                LogIn/SignUp
              </button>
              <button className="px-4 py-2 text-orange-500 border border-orange-500 rounded-md hover:bg-orange-500 hover:text-white transition">
                Join as Doctor
              </button>
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition">
                Contact No
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
