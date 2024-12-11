import FeatureImg1 from "../../Imgs/feature_img/fea2.png";
import FeatureImg2 from "../../Imgs/feature_img/fea1.png";
import FeatureImg4 from "../../Imgs/feature_img/fea3.png";
import FeatureImg5 from "../../Imgs/feature_img/fea5.jpg";
import FeatureImg6 from "../../Imgs/feature_img/fea6.jpg";

const features = [
  {
    img: FeatureImg1,
    heading: "Consult Online",
    para: "Connect with Specialists through Video call.",
    link: "/feature-one",
  },
  {
    img: FeatureImg2,
    heading: "Laboratory Tests",
    para: "Avail Exclusive discounts on lab tests.",
    link: "/feature-two",
  },
  {
    img: FeatureImg4,
    heading: "In-Clinic Appointments",
    para: "Book an In-Person visit to doctor's clinic.",
    link: "/feature-three",
  },
  {
    img: FeatureImg5,
    heading: "Procedures & Surgeries",
    para: "Plan your surgeries at discounted rates.",
    link: "/feature-four",
  },
  {
    img: FeatureImg6,
    heading: "Medicines",
    para: "Know your medicines better.",
    link: "/feature-five",
  },
];

const FeatureSection = () => {
  return (
    <section className="w-full">
      <div className="max-w-screen-xl mx-auto mb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <a
              key={index}
              href={feature.link}
              className="bg-white rounded-lg shadow-lg pb-3 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={feature.img}
                alt={feature.heading}
                className="w-full h-auto mb-4 object-cover"
              />
              <h3 className="text-md font-semibold">{feature.heading}</h3>
              <p className="text-gray-600 text-sm">{feature.para}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
