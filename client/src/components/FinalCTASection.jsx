import { motion } from "framer-motion";
import { finalCta } from "../data/landingCopy";
import SectionWrapper from "./SectionWrapper";
import WaitlistForm from "./WaitlistForm";

function FinalCTASection() {
    return (
        <SectionWrapper id="register" className="pb-20 sm:pb-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5 }}
                className="mx-auto max-w-5xl rounded-3xl border border-white/20 bg-[#061528]/68 p-8 text-white shadow-[0_24px_60px_rgba(3,8,18,0.44)] backdrop-blur-xl sm:p-10"
            >
                <p className="text-xs font-semibold uppercase tracking-[0.11em] text-slate-300">Get In Touch</p>
                <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl">
                    {finalCta.title}
                </h2>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-200 sm:text-base">
                    {finalCta.description}
                </p>

                <div className="mt-8">
                    <WaitlistForm />
                </div>

                <div className="mt-6 rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-xs leading-relaxed text-slate-200 sm:text-sm">
                    We only use these details for role onboarding and launch communication. No long forms, no spam, no unnecessary outreach.
                </div>
            </motion.div>
        </SectionWrapper>
    );
}

export default FinalCTASection;
