import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { heroContent } from "../data/landingCopy";

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

function HeroSection() {
    const navigate = useNavigate();

    return (
        <section className="relative pb-10 pt-14 sm:pb-14 sm:pt-20 lg:pb-16" id="user-experience">
            <div id="top" />
            <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="show"
                    className="space-y-7"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-100">
                        <ShieldCheck className="h-4 w-4 text-amber-200" />
                        {heroContent.badge}
                    </div>

                    <h1 className="font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-[3.45rem]">
                        {heroContent.headline}
                    </h1>

                    <p className="max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg">
                        {heroContent.subtext}
                    </p>

                    <div className="flex flex-wrap items-center gap-3 text-sm">
                        <button
                            type="button"
                            onClick={() => {
                                document.querySelector("#register")?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 font-semibold text-slate-900 transition hover:-translate-y-0.5"
                        >
                            {heroContent.primaryCta}
                            <ArrowRight className="h-4 w-4" />
                        </button>
                        <button
                            type="button"
                            onClick={() => navigate("/roles/member")}
                            className="inline-flex items-center gap-2 rounded-xl border border-white/30 bg-white/10 px-5 py-2.5 font-semibold text-white transition hover:bg-white/18"
                        >
                            {heroContent.secondaryCta}
                        </button>
                    </div>

                    <p className="inline-flex items-center rounded-full border border-amber-200/40 bg-amber-200/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-amber-100">
                        Coming Soon: Closed Beta Onboarding
                    </p>
                </motion.div>

                <motion.aside
                    variants={fadeUp}
                    initial="hidden"
                    animate="show"
                    transition={{ delay: 0.12 }}
                    className="glass-panel rounded-3xl p-6 sm:p-8"
                >
                    <p className="text-xs font-semibold uppercase tracking-[0.11em] text-slate-300">
                        User Experience Preview
                    </p>

                    <ul className="mt-5 space-y-4">
                        {heroContent.trustPoints.map((point) => (
                            <li key={point} className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-300" />
                                <span className="text-sm leading-relaxed text-slate-100 sm:text-base">{point}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-8 grid grid-cols-2 gap-3 text-sm">
                        <div className="rounded-2xl border border-white/20 bg-white/8 p-4">
                            <p className="font-display text-2xl font-semibold text-white">Clear</p>
                            <p className="mt-1 text-slate-200">No confusing forms or hidden details</p>
                        </div>
                        <div className="rounded-2xl border border-white/20 bg-white/8 p-4">
                            <p className="font-display text-2xl font-semibold text-white">Trusted</p>
                            <p className="mt-1 text-slate-200">Verified network for members and partners</p>
                        </div>
                    </div>
                </motion.aside>
            </div>
        </section>
    );
}

export default HeroSection;
