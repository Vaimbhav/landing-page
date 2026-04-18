function Footer() {
    return (
        <footer className="relative z-10 border-t border-slate-200/80 bg-white/70 py-10 backdrop-blur">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
                <p>© {new Date().getFullYear()} Quiet Summit. All rights reserved.</p>
                <p>Built for verified journeys, transparent payments, and trusted local communities.</p>
            </div>
        </footer>
    );
}

export default Footer;
