import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import RoleDiscussionPage from "./pages/RoleDiscussionPage";

function App() {
    const location = useLocation();
    const navigate = useNavigate();

    const onGetInTouch = () => {
        if (location.pathname !== "/") {
            navigate("/#register");
            return;
        }

        document.querySelector("#register")?.scrollIntoView({
            behavior: "smooth",
            block: "center",
        });
    };

    return (
        <div className="relative min-h-screen text-slate-50">
            <div className="pointer-events-none fixed inset-0 -z-20">
                <img
                    src="/photoHimly.jpg"
                    alt=""
                    className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,10,20,0.5)_0%,rgba(3,10,20,0.72)_40%,rgba(3,10,20,0.9)_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(255,255,255,0.22),transparent_34%),radial-gradient(circle_at_84%_76%,rgba(251,146,60,0.2),transparent_38%)]" />
            </div>
            <div className="pointer-events-none fixed inset-0 -z-10 noise-overlay opacity-30" />

            <Navbar />

            <main className="relative z-10">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/roles/:roleSlug" element={<RoleDiscussionPage />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </main>

            <button
                type="button"
                onClick={onGetInTouch}
                className="fixed bottom-5 right-4 z-40 rounded-full border border-white/30 bg-[#071220]/85 px-5 py-3 text-sm font-semibold tracking-[0.04em] text-white shadow-[0_14px_28px_rgba(3,8,18,0.45)] backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-[#0b1b2f] sm:bottom-6 sm:right-6"
            >
                Get In Touch
            </button>

            <Footer />
        </div>
    );
}

export default App;
