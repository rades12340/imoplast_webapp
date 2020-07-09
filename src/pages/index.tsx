import SwipperGallery from "../components/SwipperGallery";
import FourKeyParts from "../components/FourKeyParts";
import OurNumbers from "../components/OurNumbers";
import Quotes from "../components/Quotes";
import Finance from "../components/Finance";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <pre>{JSON.stringify(process.env, null, 4)}</pre>
      <SwipperGallery />
      <FourKeyParts />
      <OurNumbers />
      <Quotes />
      <Finance />
    </div>
  );
};

export default Home;
