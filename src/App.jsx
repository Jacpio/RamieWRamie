import "./main.css";
import Navbar from "./Elements/Navbar";
import Banner from './Elements/Banner.jsx'
import MainSection from "./Elements/MainSection.jsx";
import Footer from "./Elements/Footer.jsx";
function App() {
  return (
    <div className="bg-white h-screen">
        <Navbar />
        <Banner />
        <MainSection />
    </div>
  )
}

export default App
