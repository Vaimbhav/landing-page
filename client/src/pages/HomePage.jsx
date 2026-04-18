import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import RolePreviewSection from "../components/RolePreviewSection";
import HowItWorksSection from "../components/HowItWorksSection";
import FinalCTASection from "../components/FinalCTASection";

function HomePage() {
    const location = useLocation();

    useEffect(() => {
        if (!location.hash) {
            return;
        }

        const target = document.querySelector(location.hash);
        if (!target) {
            return;
        }

        requestAnimationFrame(() => {
            target.scrollIntoView({
                behavior: "smooth",
                block: location.hash === "#register" ? "center" : "start",
            });
        });
    }, [location.hash]);

    return (
        <>
            <HeroSection />
            <RolePreviewSection />
            <HowItWorksSection />
            <FinalCTASection />
        </>
    );
}

export default HomePage;
