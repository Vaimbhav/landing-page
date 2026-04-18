import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "../data/landingCopy";
import SectionWrapper from "./SectionWrapper";

function SocialProofSection() {
    return (
        <SectionWrapper
            id="social-proof"
            eyebrow="Early Signals"
            title="What Early Users Are Saying"
            subtitle="Placeholder testimonials for launch preview. Replace with production testimonials when available."
        >
            <div className="grid gap-5 md:grid-cols-3">
                {testimonials.map((testimonial, index) => (
                    <motion.figure
                        key={testimonial.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.45, delay: index * 0.06 }}
                        className="glass-panel rounded-2xl p-6"
                    >
                        <Quote className="h-6 w-6 text-slate-400" />
                        <blockquote className="mt-4 text-sm leading-relaxed text-slate-700">
                            “{testimonial.quote}”
                        </blockquote>
                        <figcaption className="mt-4 border-t border-slate-200 pt-4">
                            <p className="font-display text-base font-semibold text-slate-900">{testimonial.name}</p>
                            <p className="text-sm text-slate-500">{testimonial.role}</p>
                        </figcaption>
                    </motion.figure>
                ))}
            </div>
        </SectionWrapper>
    );
}

export default SocialProofSection;
