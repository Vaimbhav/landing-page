import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { faqs } from "../data/landingCopy";
import SectionWrapper from "./SectionWrapper";

function FAQSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <SectionWrapper
            id="faq"
            eyebrow="FAQ"
            title="Questions Before You Join"
            subtitle="Everything you need before signing up for Quiet Summit early access."
        >
            <div className="mx-auto max-w-3xl space-y-3">
                {faqs.map((faq, index) => {
                    const isOpen = index === activeIndex;

                    return (
                        <article key={faq.question} className="glass-panel overflow-hidden rounded-2xl">
                            <button
                                type="button"
                                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                                onClick={() => setActiveIndex((prev) => (prev === index ? -1 : index))}
                            >
                                <span className="font-display text-base font-semibold text-slate-900 sm:text-lg">
                                    {faq.question}
                                </span>
                                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-300 text-slate-700">
                                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                                </span>
                            </button>

                            <AnimatePresence initial={false}>
                                {isOpen ? (
                                    <motion.div
                                        key="content"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.25 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
                                    </motion.div>
                                ) : null}
                            </AnimatePresence>
                        </article>
                    );
                })}
            </div>
        </SectionWrapper>
    );
}

export default FAQSection;
