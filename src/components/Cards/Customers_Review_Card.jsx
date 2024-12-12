import { useState } from "react";
import Doctor1 from "../../Imgs/feature_img/fea5.jpg";
import Doctor2 from "../../Imgs/feature_img/fea6.jpg";
import { FaCircleArrowLeft, FaCircleArrowRight, FaStar } from "react-icons/fa6"; // Import FaStar for ratings

const reviews = [
  {
    id: 1,
    name: "John Doe",
    review: "Great platform, very efficient and works really well on both phone and web. I think this is the most easiest way of booking appointments in Pakistan as it has made the whole process much more efficient.",
    img: Doctor1,
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    review: "A very helpful app for booking appointments and searching for the required doctors. Has made my life a lot easy. I would strongly recommend this to all",
    img: Doctor1,
    rating: 4,
  },
  {
    id: 3,
    name: "Sam Wilson",
    review: "Literally the best website to book the appointments online for Doctors. The service is great, helpline guys are very cooperative and understanding. And I don't have to hassle through different hospitals anymore now.",
    img: Doctor1,
    rating: 5,
  },
  {
    id: 4,
    name: "Emily Johnson",
    review: "The only good healthcare website in Pakistan. The suggested doctors are good and the doctors on the forum ate very responsive too",
    img: Doctor1,
    rating: 4,
  },
  {
    id: 5,
    name: "Michael Brown",
    review: "Very helpful staff. Helped me book appointment with my gastroenterologist. I do all my scheduling through oladoc now. Thanks a bunch.",
    img: Doctor2,
    rating: 5,
  },
  {
    id: 6,
    name: "Sophia Davis",
    review: "The only good healthcare website in Pakistan. The suggested doctors are good and the doctors on the forum ate very responsive too",
    img: Doctor1,
    rating: 4,
  },
];

const CustomersReviewCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 3 + reviews.length) % reviews.length
    );
  };

  const visibleReviews = [
    reviews[currentIndex],
    reviews[(currentIndex + 1) % reviews.length],
    reviews[(currentIndex + 2) % reviews.length],
  ];

  // Function to render the stars for rating
  const renderStars = (rating) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={`inline-block ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
        />
      );
    }
    return stars;
  };

  return (
    <section className="w-full py-8">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-medium text-center">
        Our Customers love us
        </h2>
        <p className="text-center">Check out the reviews from our satisfied customers</p>
        {/* Navigation Buttons */}
        <div className="flex justify-end gap-2 my-4">
          <button
            onClick={prevSlide}
            className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-00 transition"
          >
            <FaCircleArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-00 transition"
          >
            <FaCircleArrowRight />
          </button>
        </div>

        <div className="relative">
          {/* Cards Container */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {visibleReviews.map((review) => (
              <div
                key={review.id}
                className="bg-white shadow-lg p-4 rounded-lg text-center"
              >
                <div className="flex justify-center mb-2">
                  {/* Display stars based on rating */}
                  {renderStars(review.rating)}
                </div>
                <p className="text-gray-600 my-2">{review.review}</p>
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-16 h-16 mx-auto mb-2 rounded-full object-cover"
                />
                <h3 className="text-lg font-medium">{review.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomersReviewCards;
