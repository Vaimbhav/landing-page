import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data/landingCopy";

const smoothScrollTo = (href, block = "start") => {
    const section = document.querySelector(href);
    if (!section) {
        return;
    }

    section.scrollIntoView({
        behavior: "smooth",
        block,
    });
};

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const onNavClick = (event, href) => {
        event.preventDefault();
        setIsMenuOpen(false);

        if (href.startsWith("#")) {
            if (location.pathname !== "/") {
                navigate(`/${href}`);
                return;
            }

            smoothScrollTo(href, href === "#register" ? "center" : "start");
            return;
        }

        navigate(href);
    };

    const onLogoClick = (event) => {
        event.preventDefault();

        if (location.pathname !== "/") {
            navigate("/");
            setIsMenuOpen(false);
            return;
        }

        smoothScrollTo("#top", "start");
        setIsMenuOpen(false);
    };

    const onGetInTouch = () => {
        if (location.pathname !== "/") {
            navigate("/#register");
            setIsMenuOpen(false);
            return;
        }

        smoothScrollTo("#register", "center");
        setIsMenuOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 border-b border-white/15 bg-[#071622]/72 backdrop-blur-xl">
            <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <a
                    href="#top"
                    className="inline-flex items-center gap-2 font-display text-lg font-semibold text-white"
                    onClick={onLogoClick}
                >
                    <img
                        src="/logo.jpg"
                        alt="Quiet Summit logo"
                        className="h-9 w-9 rounded-lg border border-white/20 bg-white/90 object-cover"
                    />
                    Quiet Summit
                </a>

                <nav className="hidden items-center gap-8 lg:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(event) => onNavClick(event, link.href)}
                            className="text-sm font-medium text-white/82 transition hover:text-white"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="hidden lg:block">
                    <button
                        type="button"
                        onClick={onGetInTouch}
                        className="rounded-xl border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/18"
                    >
                        Get In Touch
                    </button>
                </div>

                <button
                    type="button"
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white lg:hidden"
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
            </div>

            {isMenuOpen ? (
                <div className="border-t border-white/15 bg-[#091c30]/96 px-4 pb-4 pt-2 lg:hidden">
                    <nav className="flex flex-col gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(event) => onNavClick(event, link.href)}
                                className="rounded-lg px-3 py-2 text-sm font-medium text-white/85 transition hover:bg-white/10 hover:text-white"
                            >
                                {link.label}
                            </a>
                        ))}
                        <button
                            type="button"
                            onClick={onGetInTouch}
                            className="mt-2 rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-left text-sm font-semibold text-white"
                        >
                            Get In Touch
                        </button>
                    </nav>
                </div>
            ) : null}
        </header>
    );
}

export default Navbar;
