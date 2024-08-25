import Timeline from "../../sections/Timeline/Timeline";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import AboutCollege from "../../sections/AboutCollege/AboutCollege";
import Domains from "../../sections/Domains/Domains";
import HeroSection from "../../sections/HeroSection/HeroSection";


const Home = () => {
  return(
    // <motion.div
    //   initial={{scale: 1.1, opacity: 1}}
    //   animate={{scale: 1, opacity: 1}}
    //   exit={{scale: 0, opacity: 0}}
    //   transition={{duration: 1, ease: 'easeInOut'}}
    // >
      <div className="text-white barba-container min-h-screen bg-black">
        <Navbar/>
        <HeroSection />
        <AboutCollege />
        <Domains />
        <Timeline />
        {/* <Footer /> */}
      </div>
    // {/* </motion.div> */}
  )
}

export default Home;