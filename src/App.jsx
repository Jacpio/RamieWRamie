import "./main.css";
import Navbar from "./Elements/Navbar";
import Banner from './Elements/Banner.jsx'
import MainSection from "./Elements/MainSection.jsx";
import Accessibility from "./Elements/Accessibility.jsx";

function App() {
  return (
    <div className="bg-white h-screen">
        <Navbar />
        <Accessibility/>
        <Banner />
        <MainSection />
    </div>
  )
}

export default App
