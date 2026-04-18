import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import HowItWorksSection from "./components/HowItWorksSection";
import SocialProofSection from "./components/SocialProofSection";
import FAQSection from "./components/FAQSection";
import FinalCTASection from "./components/FinalCTASection";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#F2F8FD] via-[#F8FBFF] to-[#EDF4FB] text-slate-900">
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute -left-24 top-16 h-80 w-80 rounded-full bg-cyan/20 blur-3xl" />
                <div className="absolute right-0 top-72 h-96 w-96 rounded-full bg-sunrise/20 blur-3xl" />
                <div className="noise-overlay absolute inset-0 opacity-40" />
            </div>

            <Navbar />

            <main className="relative z-10">
                <HeroSection />
                <FeaturesSection />
                <HowItWorksSection />
                {/* <SocialProofSection /> */}
                <FAQSection />
                <FinalCTASection />
            </main>

            <Footer />
        </div>
    );
}

export default App;
