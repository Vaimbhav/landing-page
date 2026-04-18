import { motion } from "framer-motion";
import { launchRewards } from "../data/landingCopy";
import SectionWrapper from "./SectionWrapper";

function HowItWorksSection() {
    return (
        <SectionWrapper
            id="early-rewards"
            eyebrow="Pre-Launch Rewards"
            title="Trust Rewards For Early Members, Guides, And Owners"
            subtitle="Register before launch and you get prioritized onboarding plus founder-level benefits."
        >
            <div className="relative grid gap-4 md:grid-cols-3">
                <div className="absolute left-1/2 top-6 hidden h-0.5 w-[75%] -translate-x-1/2 bg-gradient-to-r from-white/20 via-white/50 to-amber-300/30 md:block" />

                {launchRewards.map((step, index) => (
                    <motion.article
                        key={step.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.45, delay: index * 0.08 }}
                        className="glass-panel relative rounded-2xl p-6"
                    >
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 font-display text-sm font-semibold text-white">
                            {index + 1}
                        </span>
                        <h3 className="mt-4 font-display text-xl font-semibold text-white">{step.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-200">{step.description}</p>
                    </motion.article>
                ))}
            </div>
        </SectionWrapper>
    );
}

export default HowItWorksSection;
