function Footer() {
    return (
        <footer className="relative z-10 border-t border-white/15 bg-[#04111d]/82 py-10 backdrop-blur">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 text-sm text-slate-200 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
                <p>(c) {new Date().getFullYear()} Quiet Summit. All rights reserved.</p>
                <p>Built for verified journeys, trusted partners, and thoughtful launch onboarding.</p>
            </div>
        </footer>
    );
}

export default Footer;
