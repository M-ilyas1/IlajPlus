import Header from "./components/Header/Header"
import HeroSection from "./components/Hero_Section/Hero_Section"
import FeatureSection from "./components/Cards/Feature_Cards"
import Consult_Doctors_Cards from "./components/Cards/Consult_Doctors_Cards"
import Customers_Review_Card from "./components/Cards/Customers_Review_Card"
export default function App() {
  return (
    <>
      <Header />
      <HeroSection/>
      <FeatureSection/>
      <Consult_Doctors_Cards/>
      <Customers_Review_Card/>
    </>
  )
}