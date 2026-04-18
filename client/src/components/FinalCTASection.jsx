import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { finalCta } from "../data/landingCopy";
import SectionWrapper from "./SectionWrapper";

function FinalCTASection() {
    return (
        <SectionWrapper id="final-cta">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5 }}
                className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 via-[#12213A] to-[#22395B] p-8 text-white shadow-glow sm:p-10"
            >
                <p className="text-xs font-semibold uppercase tracking-[0.11em] text-cyan/80">Final Call</p>
                <h2 className="mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl">
                    {finalCta.title}
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base">
                    {finalCta.description}
                </p>

                <button
                    type="button"
                    onClick={() => {
                        document
                            .querySelector("#waitlist")
                            ?.scrollIntoView({ behavior: "smooth", block: "center" });
                    }}
                    className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-slate-900 transition hover:-translate-y-0.5"
                >
                    {finalCta.buttonText}
                    <ArrowRight className="h-4 w-4" />
                </button>
            </motion.div>
        </SectionWrapper>
    );
}

export default FinalCTASection;
