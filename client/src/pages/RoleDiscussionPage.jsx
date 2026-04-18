import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronLeft, ChevronRight, Home, Sparkles } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { roleDiscussionRoutes, roleRouteOrder } from "../data/landingCopy";

const rolePageThemes = {
    user: {
        heroCard: "border-sky-200/25 bg-[linear-gradient(145deg,rgba(6,22,41,0.84)_0%,rgba(10,37,60,0.76)_100%)]",
        eyebrowPill: "border-sky-100/30 bg-sky-100/10 text-sky-100",
        contactButton: "border-sky-100/35 bg-sky-100/10 text-sky-100 hover:bg-sky-100/18",
        activeTab: "border-sky-200/65 bg-sky-200/20 text-sky-100",
        inactiveTab: "border-white/25 bg-white/6 text-slate-200 hover:bg-white/12",
        contentGrid: "lg:grid-cols-3",
        sectionOrder: ["discussion", "highlights", "metrics"],
        sectionSpan: {
            discussion: "lg:col-span-2",
            highlights: "lg:col-span-1",
            metrics: "lg:col-span-1",
        },
        discussionCard: "border-sky-200/20 bg-[#071f35]/72",
        discussionOpen: "border-sky-200/52 bg-[#11334f]",
        discussionClosed: "border-white/15 bg-[#0a2740]/78",
        highlightsCard: "border-sky-200/20 bg-[#071f35]/72",
        metricsCard: "border-sky-200/20 bg-[#071f35]/72",
        metricItem: "border-sky-100/18 bg-white/5",
        metricGrid: "grid gap-2",
        accentText: "text-sky-100",
        footerBar: "border-sky-200/18 bg-[#071829]/66",
    },
    member: {
        heroCard: "border-amber-200/28 bg-[linear-gradient(145deg,rgba(48,29,12,0.9)_0%,rgba(84,52,22,0.78)_100%)]",
        eyebrowPill: "border-amber-200/45 bg-amber-200/12 text-amber-100",
        contactButton: "border-amber-200/45 bg-amber-200/12 text-amber-100 hover:bg-amber-200/20",
        activeTab: "border-amber-200/70 bg-amber-200/24 text-amber-100",
        inactiveTab: "border-white/25 bg-white/6 text-slate-200 hover:bg-white/12",
        contentGrid: "lg:grid-cols-3",
        sectionOrder: ["highlights", "metrics", "discussion"],
        sectionSpan: {
            highlights: "lg:col-span-2",
            metrics: "lg:col-span-1",
            discussion: "lg:col-span-3",
        },
        discussionCard: "border-amber-200/25 bg-[#2a180f]/80",
        discussionOpen: "border-amber-200/62 bg-[#4a2a16]",
        discussionClosed: "border-white/15 bg-[#342112]/78",
        highlightsCard: "border-amber-200/25 bg-[#2a180f]/80",
        metricsCard: "border-amber-200/25 bg-[#2a180f]/80",
        metricItem: "border-amber-100/20 bg-[#ffffff08]",
        metricGrid: "grid gap-2 sm:grid-cols-3 lg:grid-cols-1",
        accentText: "text-amber-100",
        footerBar: "border-amber-200/22 bg-[#26140d]/72",
    },
    guide: {
        heroCard: "border-indigo-200/30 bg-[linear-gradient(145deg,rgba(8,18,44,0.9)_0%,rgba(14,41,92,0.8)_100%)]",
        eyebrowPill: "border-indigo-200/40 bg-indigo-200/12 text-indigo-100",
        contactButton: "border-indigo-200/40 bg-indigo-200/12 text-indigo-100 hover:bg-indigo-200/20",
        activeTab: "border-indigo-200/70 bg-indigo-200/24 text-indigo-100",
        inactiveTab: "border-white/25 bg-white/6 text-slate-200 hover:bg-white/12",
        contentGrid: "lg:grid-cols-3",
        sectionOrder: ["metrics", "discussion", "highlights"],
        sectionSpan: {
            metrics: "lg:col-span-1",
            discussion: "lg:col-span-2",
            highlights: "lg:col-span-3",
        },
        discussionCard: "border-indigo-200/24 bg-[#0e1f4a]/78",
        discussionOpen: "border-indigo-200/60 bg-[#173268]",
        discussionClosed: "border-white/15 bg-[#122756]/78",
        highlightsCard: "border-indigo-200/24 bg-[#0e1f4a]/78",
        metricsCard: "border-indigo-200/24 bg-[#0e1f4a]/78",
        metricItem: "border-indigo-100/20 bg-[#ffffff08]",
        metricGrid: "grid gap-2",
        accentText: "text-indigo-100",
        footerBar: "border-indigo-200/22 bg-[#0d1f44]/72",
    },
    "homestay-owner": {
        heroCard: "border-emerald-200/28 bg-[linear-gradient(145deg,rgba(9,34,26,0.9)_0%,rgba(24,64,49,0.8)_100%)]",
        eyebrowPill: "border-emerald-200/42 bg-emerald-200/12 text-emerald-100",
        contactButton: "border-emerald-200/42 bg-emerald-200/12 text-emerald-100 hover:bg-emerald-200/20",
        activeTab: "border-emerald-200/70 bg-emerald-200/24 text-emerald-100",
        inactiveTab: "border-white/25 bg-white/6 text-slate-200 hover:bg-white/12",
        contentGrid: "lg:grid-cols-3",
        sectionOrder: ["discussion", "metrics", "highlights"],
        sectionSpan: {
            discussion: "lg:col-span-3",
            metrics: "lg:col-span-2",
            highlights: "lg:col-span-1",
        },
        discussionCard: "border-emerald-200/24 bg-[#0f3127]/78",
        discussionOpen: "border-emerald-200/60 bg-[#1c4b3c]",
        discussionClosed: "border-white/15 bg-[#154033]/78",
        highlightsCard: "border-emerald-200/24 bg-[#0f3127]/78",
        metricsCard: "border-emerald-200/24 bg-[#0f3127]/78",
        metricItem: "border-emerald-100/20 bg-[#ffffff08]",
        metricGrid: "grid gap-2 sm:grid-cols-3 lg:grid-cols-2",
        accentText: "text-emerald-100",
        footerBar: "border-emerald-200/22 bg-[#0f2b22]/72",
    },
};

function RoleDiscussionPage() {
    const { roleSlug } = useParams();
    const roleData = roleDiscussionRoutes[roleSlug];
    const [openDiscussion, setOpenDiscussion] = useState(0);

    useEffect(() => {
        setOpenDiscussion(0);
    }, [roleSlug]);

    const rolePosition = useMemo(() => roleRouteOrder.indexOf(roleSlug), [roleSlug]);
    const previousRole = rolePosition > 0 ? roleRouteOrder[rolePosition - 1] : null;
    const nextRole =
        rolePosition >= 0 && rolePosition < roleRouteOrder.length - 1
            ? roleRouteOrder[rolePosition + 1]
            : null;

    const theme = rolePageThemes[roleSlug] || rolePageThemes.user;

    if (!roleData) {
        return (
            <section className="section-shell">
                <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
                    <div className="rounded-3xl border border-white/20 bg-[#051324]/70 p-8 text-center text-white backdrop-blur">
                        <h1 className="font-display text-3xl font-semibold">Role route not found</h1>
                        <p className="mt-3 text-slate-200">Choose a valid role from the navigation to continue.</p>
                        <Link
                            to="/"
                            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-slate-900"
                        >
                            <Home className="h-4 w-4" />
                            Back To Home
                        </Link>
                    </div>
                </div>
            </section>
        );
    }

    const sectionTitles = {
        discussion: `${roleData.label} Discussion`,
        highlights: `${roleData.label} Highlights`,
        metrics: `${roleData.label} Snapshot`,
    };

    const sectionCards = {
        discussion: (
            <motion.article
                key="discussion"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45 }}
                className={`rounded-3xl border p-6 backdrop-blur-lg ${theme.discussionCard} ${theme.sectionSpan.discussion}`}
            >
                <h2 className={`font-display text-2xl font-semibold sm:text-3xl ${theme.accentText}`}>
                    {sectionTitles.discussion}
                </h2>

                <div className="mt-4 space-y-3">
                    {roleData.discussions.map((item, index) => {
                        const isOpen = index === openDiscussion;

                        return (
                            <article
                                key={item.question}
                                className={`overflow-hidden rounded-2xl border transition ${
                                    isOpen ? theme.discussionOpen : theme.discussionClosed
                                }`}
                            >
                                <button
                                    type="button"
                                    onClick={() => setOpenDiscussion((prev) => (prev === index ? -1 : index))}
                                    className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
                                >
                                    <span className="text-sm font-semibold text-white sm:text-base">
                                        {item.question}
                                    </span>
                                    <span
                                        className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/5 text-slate-100 transition ${
                                            isOpen ? "rotate-180" : ""
                                        }`}
                                    >
                                        <ChevronDown className="h-4 w-4" />
                                    </span>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen ? (
                                        <motion.div
                                            key="answers"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.24 }}
                                            className="overflow-hidden"
                                        >
                                            <ul className="space-y-1.5 px-4 pb-4 text-sm leading-relaxed text-slate-200">
                                                {item.answers.map((answer) => (
                                                    <li key={answer}>- {answer}</li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    ) : null}
                                </AnimatePresence>
                            </article>
                        );
                    })}
                </div>
            </motion.article>
        ),
        highlights: (
            <motion.article
                key="highlights"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: 0.04 }}
                className={`rounded-3xl border p-5 backdrop-blur-lg ${theme.highlightsCard} ${theme.sectionSpan.highlights}`}
            >
                <h3 className={`text-xs font-semibold uppercase tracking-[0.12em] ${theme.accentText}`}>
                    {sectionTitles.highlights}
                </h3>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-200">
                    {roleData.highlights.map((point) => (
                        <li key={point}>- {point}</li>
                    ))}
                </ul>
            </motion.article>
        ),
        metrics: (
            <motion.article
                key="metrics"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: 0.08 }}
                className={`rounded-3xl border p-5 backdrop-blur-lg ${theme.metricsCard} ${theme.sectionSpan.metrics}`}
            >
                <h3 className={`text-xs font-semibold uppercase tracking-[0.12em] ${theme.accentText}`}>
                    {sectionTitles.metrics}
                </h3>
                <div className={`mt-3 ${theme.metricGrid}`}>
                    {roleData.metrics.map((metric) => (
                        <div
                            key={metric.value + metric.label}
                            className={`rounded-xl border px-3 py-3 ${theme.metricItem}`}
                        >
                            <p className="font-display text-xl font-semibold text-white">{metric.value}</p>
                            <p className="text-xs uppercase tracking-[0.12em] text-slate-300">{metric.label}</p>
                        </div>
                    ))}
                </div>
            </motion.article>
        ),
    };

    return (
        <section className="section-shell">
            <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45 }}
                    className={`rounded-3xl border p-6 text-white shadow-[0_22px_50px_rgba(4,10,20,0.45)] backdrop-blur-xl sm:p-8 lg:p-10 ${theme.heroCard}`}
                >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <p
                            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] ${theme.eyebrowPill}`}
                        >
                            <Sparkles className="h-3.5 w-3.5" />
                            {roleData.eyebrow}
                        </p>
                        <Link
                            to="/#register"
                            className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition ${theme.contactButton}`}
                        >
                            Get In Touch
                        </Link>
                    </div>

                    <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
                        {roleData.title}
                    </h1>
                    <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-200 sm:text-lg">
                        {roleData.subtitle}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                        {roleRouteOrder.map((slug) => {
                            const route = roleDiscussionRoutes[slug];
                            const active = slug === roleSlug;

                            return (
                                <Link
                                    key={slug}
                                    to={`/roles/${slug}`}
                                    className={`rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] transition ${
                                        active ? theme.activeTab : theme.inactiveTab
                                    }`}
                                >
                                    {route.label}
                                </Link>
                            );
                        })}
                    </div>
                </motion.article>

                <div className={`mt-6 grid gap-6 ${theme.contentGrid}`}>
                    {theme.sectionOrder.map((sectionKey) => sectionCards[sectionKey])}
                </div>

                <div
                    className={`mt-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border px-4 py-3 text-sm text-slate-200 backdrop-blur ${theme.footerBar}`}
                >
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 font-semibold text-white hover:bg-white/16"
                    >
                        <ChevronLeft className="h-4 w-4" />
                        Back To Landing
                    </Link>

                    <div className="flex gap-2">
                        {previousRole ? (
                            <Link
                                to={`/roles/${previousRole}`}
                                className="rounded-lg border border-white/20 bg-white/5 px-3 py-2 font-semibold text-white hover:bg-white/12"
                            >
                                Previous Role
                            </Link>
                        ) : null}
                        {nextRole ? (
                            <Link
                                to={`/roles/${nextRole}`}
                                className="inline-flex items-center gap-1 rounded-lg border border-white/20 bg-white/5 px-3 py-2 font-semibold text-white hover:bg-white/12"
                            >
                                Next Role
                                <ChevronRight className="h-4 w-4" />
                            </Link>
                        ) : null}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default RoleDiscussionPage;
