import { useState } from "react";
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

    const onNavClick = (event, href) => {
        event.preventDefault();
        smoothScrollTo(href, href === "#waitlist" ? "center" : "start");
        setIsMenuOpen(false);
    };

    return (
        <header className="sticky top-0 z-40 border-b border-white/50 bg-white/80 backdrop-blur-xl">
            <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <a
                    href="#top"
                    className="inline-flex items-center gap-2 font-display text-lg font-semibold text-slate-900"
                    onClick={(event) => onNavClick(event, "body")}
                >
                    <img
                        src="/logo.jpg"
                        alt="Quiet Summit logo"
                        className="h-9 w-9 rounded-lg border border-slate-200 bg-white object-cover"
                    />
                    Quiet Summit
                </a>

                <nav className="hidden items-center gap-8 lg:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(event) => onNavClick(event, link.href)}
                            className="text-sm font-medium text-slate-700 transition hover:text-slate-900"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <div className="hidden lg:block">
                    <button
                        type="button"
                        onClick={() => smoothScrollTo("#waitlist", "center")}
                        className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
                    >
                        Join Waitlist
                    </button>
                </div>

                <button
                    type="button"
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 lg:hidden"
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>
            </div>

            {isMenuOpen ? (
                <div className="border-t border-slate-200 bg-white px-4 pb-4 pt-2 lg:hidden">
                    <nav className="flex flex-col gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(event) => onNavClick(event, link.href)}
                                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
                            >
                                {link.label}
                            </a>
                        ))}
                        <button
                            type="button"
                            onClick={() => {
                                smoothScrollTo("#waitlist", "center");
                                setIsMenuOpen(false);
                            }}
                            className="mt-2 rounded-lg bg-slate-900 px-3 py-2 text-left text-sm font-semibold text-white"
                        >
                            Join Waitlist
                        </button>
                    </nav>
                </div>
            ) : null}
        </header>
    );
}

export default Navbar;
