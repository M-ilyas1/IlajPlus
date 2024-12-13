import { useRef } from "react";
import Slider from "react-slick";
import {
  review1,
  review2,
  review3,
  review4,
  review5,
  review6,
} from "../../assets/Users_Review/index";
import { FaStar, FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    review:
      "Great platform, very efficient and works really well on both phone and web. I think this is the most easiest way of booking appointments in Pakistan.",
    img: review1,
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    review:
      "A very helpful app for booking appointments and searching for the required. Has made my life a lot easy. I would strongly recommend this to all",
    img: review2,
    rating: 4,
  },
  {
    id: 3,
    name: "Sam Wilson",
    review:
      "Literally the best website to book the appointments online for Doctors. The service is great, helpline guys are very cooperative and understanding.",
    img: review3,
    rating: 5,
  },
  {
    id: 4,
    name: "Emily Johnson",
    review:
      "The only good healthcare website in Pakistan. The suggested doctors are good and the doctors on the forum ate very responsive too",
    img: review4,
    rating: 4,
  },
  {
    id: 5,
    name: "Michael Brown",
    review:
      "Very helpful staff. Helped me book appointment with my gastroenterologist. I do all my scheduling through oladoc now. Thanks a bunch.",
    img: review5,
    rating: 5,
  },
  {
    id: 6,
    name: "Sophia Davis",
    review:
      "The only good healthcare website in Pakistan. The suggested doctors are good and the doctors on the forum ate very responsive too",
    img: review6,
    rating: 4,
  },
];

const CustomersReviewCards = () => {
  const sliderRef = useRef(null);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={`inline-block ${
          i < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="w-full py-8 bg-gray-100">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex flex-row justify-between gap-2 my-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-medium">
              Our Customers love us
            </h2>
          </div>
          <div className="text-right mt-2">
            <button
              onClick={() => sliderRef.current.slickPrev()}
              className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              <FaCircleArrowLeft />
            </button>
            <button
              onClick={() => sliderRef.current.slickNext()}
              className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              <FaCircleArrowRight />
            </button>
          </div>
        </div>

        <div className="mt-4">
          <Slider ref={sliderRef} {...settings} className="custom-slider">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="p-2"
                style={{ minHeight: "300px", width: "300px", margin: "10px" }}
              >
                <div className="bg-white rounded-xl text-center p-3">
                  <div className="flex justify-center mb-2">
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
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default CustomersReviewCards;
