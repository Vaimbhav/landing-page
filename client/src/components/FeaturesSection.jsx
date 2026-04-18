import { motion } from "framer-motion";
import {
    Download,
    LineChart,
    Radio,
    ShieldCheck,
    Users,
    Wallet,
} from "lucide-react";
import { featureCards } from "../data/landingCopy";
import SectionWrapper from "./SectionWrapper";

const iconMap = {
    ShieldCheck,
    Wallet,
    Users,
    Radio,
    LineChart,
    Download,
};

function FeaturesSection() {
    return (
        <SectionWrapper
            id="features"
            className="pt-10 sm:pt-12 lg:pt-14"
            eyebrow="Core Features"
            title="Built For Trust, Clarity, And Better Adventures"
            subtitle="Everything in Quiet Summit is designed to reduce uncertainty and increase confidence before you ever set foot on the trail."
        >
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {featureCards.map((feature, index) => {
                    const Icon = iconMap[feature.icon] || ShieldCheck;

                    return (
                        <motion.article
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.45, delay: index * 0.05 }}
                            className="feature-card rounded-2xl p-6"
                        >
                            <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white">
                                <Icon className="h-5 w-5" />
                            </span>
                            <h3 className="mt-4 font-display text-xl font-semibold text-slate-900">
                                {feature.title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-slate-600">{feature.description}</p>
                        </motion.article>
                    );
                })}
            </div>
        </SectionWrapper>
    );
}

export default FeaturesSection;
