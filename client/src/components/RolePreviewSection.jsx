import { motion } from "framer-motion";
import { ArrowRight, Compass, Home, UserRound, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { roleDiscussionRoutes, roleRouteOrder } from "../data/landingCopy";
import SectionWrapper from "./SectionWrapper";

const roleIcons = {
    user: UserRound,
    member: Users,
    guide: Compass,
    "homestay-owner": Home,
};

const roleStyles = {
    user: {
        card: "border-sky-200/30 bg-[linear-gradient(150deg,rgba(10,38,64,0.86)_0%,rgba(8,28,48,0.82)_100%)]",
        icon: "border-sky-100/35 bg-sky-100/10 text-sky-100",
        button: "border-sky-100/35 bg-sky-100/10 text-sky-100 hover:bg-sky-100/20",
    },
    member: {
        card: "border-amber-200/30 bg-[linear-gradient(150deg,rgba(66,38,12,0.86)_0%,rgba(46,26,8,0.82)_100%)]",
        icon: "border-amber-100/35 bg-amber-100/10 text-amber-100",
        button: "border-amber-100/35 bg-amber-100/10 text-amber-100 hover:bg-amber-100/20",
    },
    guide: {
        card: "border-indigo-200/30 bg-[linear-gradient(150deg,rgba(21,31,76,0.86)_0%,rgba(13,21,56,0.82)_100%)]",
        icon: "border-indigo-100/35 bg-indigo-100/10 text-indigo-100",
        button: "border-indigo-100/35 bg-indigo-100/10 text-indigo-100 hover:bg-indigo-100/20",
    },
    "homestay-owner": {
        card: "border-emerald-200/30 bg-[linear-gradient(150deg,rgba(15,48,36,0.86)_0%,rgba(10,33,25,0.82)_100%)]",
        icon: "border-emerald-100/35 bg-emerald-100/10 text-emerald-100",
        button: "border-emerald-100/35 bg-emerald-100/10 text-emerald-100 hover:bg-emerald-100/20",
    },
};

function RolePreviewSection() {
    return (
        <SectionWrapper
            id="role-overview"
            className="pt-10 sm:pt-12 lg:pt-14"
            eyebrow="Role Overview"
            title="A Quick Look At Each Role"
            subtitle="Home stays concise. Open any role page for full details, requirements, rewards, and onboarding flow."
        >
            <div className="grid gap-4 md:grid-cols-2">
                {roleRouteOrder.map((slug, index) => {
                    const roleData = roleDiscussionRoutes[slug];
                    const Icon = roleIcons[slug] || UserRound;
                    const styles = roleStyles[slug] || roleStyles.user;
                    const exploreLabel = roleData.label.replace(" Experience", "");

                    return (
                        <motion.article
                            key={slug}
                            initial={{ opacity: 0, y: 18 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.42, delay: index * 0.05 }}
                            className={`rounded-2xl border p-5 shadow-[0_16px_28px_rgba(3,8,18,0.28)] ${styles.card}`}
                        >
                            <div className="flex items-center gap-3">
                                <span className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border ${styles.icon}`}>
                                    <Icon className="h-4.5 w-4.5" />
                                </span>
                                <h3 className="font-display text-2xl font-semibold text-white">
                                    {roleData.label}
                                </h3>
                            </div>

                            <p className="mt-3 text-sm leading-relaxed text-slate-200">
                                {roleData.subtitle}
                            </p>

                            <ul className="mt-4 space-y-1.5 text-sm text-slate-100">
                                {roleData.highlights.slice(0, 2).map((point) => (
                                    <li key={point}>- {point}</li>
                                ))}
                            </ul>

                            <Link
                                to={`/roles/${slug}`}
                                className={`mt-5 inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition ${styles.button}`}
                            >
                                Explore More About {exploreLabel}
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </motion.article>
                    );
                })}
            </div>
        </SectionWrapper>
    );
}

export default RolePreviewSection;
