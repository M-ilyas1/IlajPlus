import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Main Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Company</h3>
            <ul className="space-y-3">
              <li><a href="/about" className="hover:text-gray-300">About Us</a></li>
              <li><a href="/privacy" className="hover:text-gray-300">Privacy Policy</a></li>
              <li><a href="/delivery" className="hover:text-gray-300">Delivery Policy</a></li>
              <li><a href="/refund" className="hover:text-gray-300">Refund Policy</a></li>
              <li><a href="/terms" className="hover:text-gray-300">Terms of Use</a></li>
              <li><a href="/contact" className="hover:text-gray-300">Contact Us</a></li>
              <li><a href="/faq" className="hover:text-gray-300">FAQs</a></li>
            </ul>
          </div>

          {/* Major Cities */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Major Cities</h3>
            <ul className="space-y-3">
              <li><a href="/karachi" className="hover:text-gray-300">Karachi</a></li>
              <li><a href="/lahore" className="hover:text-gray-300">Lahore</a></li>
              <li><a href="/islamabad" className="hover:text-gray-300">Islamabad</a></li>
              <li><a href="/peshawar" className="hover:text-gray-300">Peshawar</a></li>
              <li><a href="/quetta" className="hover:text-gray-300">Quetta</a></li>
              <li><a href="/multan" className="hover:text-gray-300">Multan</a></li>
            </ul>
          </div>

          {/* Top Hospitals */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Top Hospitals</h3>
            <ul className="space-y-3">
              <li><a href="/hospital/1" className="hover:text-gray-300">Aga Khan University Hospital</a></li>
              <li><a href="/hospital/2" className="hover:text-gray-300">Shaukat Khanum Memorial Hospital</a></li>
              <li><a href="/hospital/3" className="hover:text-gray-300">Lahore General Hospital</a></li>
              <li><a href="/hospital/4" className="hover:text-gray-300">Jinnah Hospital</a></li>
              <li><a href="/hospital/5" className="hover:text-gray-300">Fatima Memorial Hospital</a></li>
            </ul>
          </div>

          {/* Lab Tests */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Lab Tests</h3>
            <ul className="space-y-3">
              <li><a href="/labtest/1" className="hover:text-gray-300">Blood Sugar Test</a></li>
              <li><a href="/labtest/2" className="hover:text-gray-300">Full Body Checkup</a></li>
              <li><a href="/labtest/3" className="hover:text-gray-300">Liver Function Test</a></li>
              <li><a href="/labtest/4" className="hover:text-gray-300">Cholesterol Test</a></li>
              <li><a href="/labtest/5" className="hover:text-gray-300">Vitamin D Test</a></li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-700 pt-6 flex justify-between items-center">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} HealthCare Co. All Rights Reserved.</p>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <FaFacebookF size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <FaLinkedinIn size={24} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
