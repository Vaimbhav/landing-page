import { motion } from "framer-motion";
import { ArrowDownRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { heroContent } from "../data/landingCopy";
import WaitlistForm from "./WaitlistForm";

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
    return (
        <section className="relative pb-6 pt-14 sm:pb-8 sm:pt-20 lg:pb-10" id="top">
            <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="show"
                    className="space-y-7"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-700">
                        <ShieldCheck className="h-4 w-4 text-pine" />
                        {heroContent.badge}
                    </div>

                    <h1 className="font-display text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-[3.35rem]">
                        {heroContent.headline}
                    </h1>

                    <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                        {heroContent.subtext}
                    </p>

                    <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
                        <button
                            type="button"
                            onClick={() => {
                                document.querySelector("#features")?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2 font-semibold text-slate-800 transition hover:bg-slate-100"
                        >
                            {heroContent.secondaryCta}
                            <ArrowDownRight className="h-4 w-4" />
                        </button>
                    </div>
                </motion.div>

                <motion.aside
                    variants={fadeUp}
                    initial="hidden"
                    animate="show"
                    transition={{ delay: 0.12 }}
                    className="glass-panel rounded-3xl p-6 sm:p-8"
                >
                    <p className="text-xs font-semibold uppercase tracking-[0.11em] text-slate-500">
                        Why People Are Joining Early
                    </p>

                    <ul className="mt-5 space-y-4">
                        {heroContent.trustPoints.map((point) => (
                            <li key={point} className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-pine" />
                                <span className="text-sm leading-relaxed text-slate-700 sm:text-base">{point}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-8 grid grid-cols-2 gap-3 text-sm">
                        <div className="rounded-2xl border border-slate-200 bg-white p-4">
                            <p className="font-display text-2xl font-semibold text-slate-900">Mobile-First</p>
                            <p className="mt-1 text-slate-600">Built for planning on the move</p>
                        </div>
                        <div className="rounded-2xl border border-slate-200 bg-white p-4">
                            <p className="font-display text-2xl font-semibold text-slate-900">Trust-Led</p>
                            <p className="mt-1 text-slate-600">Verification before visibility</p>
                        </div>
                    </div>
                </motion.aside>
            </div>

            <div className="mx-auto mb-2 mt-12 w-full max-w-4xl px-4 sm:mb-4 sm:mt-14 sm:px-6 lg:px-8">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="show"
                    transition={{ delay: 0.18 }}
                    className="text-center"
                >
                    <p className="mb-5 text-sm font-medium text-slate-600 sm:text-base">
                        Join the early access waitlist to get first booking priority.
                    </p>
                    <WaitlistForm className="mx-auto max-w-3xl" />
                </motion.div>
            </div>
        </section>
    );
}

export default HeroSection;
