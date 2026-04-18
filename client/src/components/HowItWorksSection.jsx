import { motion } from "framer-motion";
import { howItWorks } from "../data/landingCopy";
import SectionWrapper from "./SectionWrapper";

function HowItWorksSection() {
    return (
        <SectionWrapper
            id="how-it-works"
            eyebrow="How It Works"
            title="Three Steps To Start Your Quiet Summit Journey"
            subtitle="Simple onboarding now, confident booking when launch windows open."
        >
            <div className="relative grid gap-4 md:grid-cols-3">
                <div className="absolute left-1/2 top-6 hidden h-0.5 w-[75%] -translate-x-1/2 bg-gradient-to-r from-cyan/40 via-slate-300 to-sunrise/50 md:block" />

                {howItWorks.map((step, index) => (
                    <motion.article
                        key={step.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.45, delay: index * 0.08 }}
                        className="glass-panel relative rounded-2xl p-6"
                    >
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 font-display text-sm font-semibold text-white">
                            {index + 1}
                        </span>
                        <h3 className="mt-4 font-display text-xl font-semibold text-slate-900">{step.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
                    </motion.article>
                ))}
            </div>
        </SectionWrapper>
    );
}

export default HowItWorksSection;
