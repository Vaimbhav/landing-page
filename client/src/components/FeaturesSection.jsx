import { motion } from "framer-motion";
import {
    CheckCircle2,
    CircleDot,
    Handshake,
    Leaf,
    LineChart,
    MessageCircle,
    Mountain,
    PenLine,
    Rocket,
    ShieldCheck,
    Ticket,
} from "lucide-react";

const reveal = {
    hidden: { opacity: 0, y: 24 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.52,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const leaderBenefits = [
    {
        id: "member-experience",
        icon: Ticket,
        title: "Free Trip, Every Time",
        description:
            "Once your journey reaches minimum registrations, your slot is fully covered - trail costs, verified homestay, and guide fees.",
        tag: "Core Benefit",
        accent: "border-[#C75A2A]",
        tagTone: "bg-[#EFE7DC] text-[#C75A2A]",
    },
    {
        id: "guide-experience",
        icon: ShieldCheck,
        title: "QS Verified Badge",
        description:
            "Your public profile carries the QS Verified mark - signaling credibility to travellers before they even read your bio.",
        tag: "Trust Signal",
        accent: "border-[#B58D1E]",
        tagTone: "bg-[#ECE7D9] text-[#B58D1E]",
    },
    {
        id: "owner-experience",
        icon: Handshake,
        title: "Local Ecosystem Access",
        description:
            "Tap into QS's network of verified Pahadi guides and homestay families. You design. They deliver. Together it works.",
        tag: "Infrastructure",
        accent: "border-[#224B3F]",
        tagTone: "bg-[#DEE4DF] text-[#224B3F]",
    },
    {
        icon: MessageCircle,
        title: "Members-Only Community",
        description:
            "Early access to the Quiet Members thread - where leaders share routes, contacts, and build journeys together before anyone else sees them.",
        tag: "Community",
        accent: "border-[#224B3F]",
        tagTone: "bg-[#DEE4DF] text-[#224B3F]",
    },
    {
        icon: LineChart,
        title: "Karma Score And Growth",
        description:
            "Every journey grows your Karma Score - a public rating that attracts better travellers and unlocks higher commission tiers over time.",
        tag: "Progression",
        accent: "border-[#C75A2A]",
        tagTone: "bg-[#EFE7DC] text-[#C75A2A]",
    },
    {
        icon: Rocket,
        title: "Early Access Advantage",
        description:
            "Pre-launch members get first-mover advantage - your profile goes live on Day 1 before the platform opens to the public.",
        tag: "Founding Member",
        accent: "border-[#B58D1E]",
        tagTone: "bg-[#ECE7D9] text-[#B58D1E]",
    },
];

const idealLeaderPoints = [
    {
        title: "An experienced trekker who's done it right",
        body: "5 plus treks, comfortable with Himalayan terrain and altitude.",
    },
    {
        title: "Someone who brings people together naturally",
        body: "Friends trust your recommendations. You've organised group trips before.",
    },
    {
        title: "A believer in slow, conscious travel",
        body: "You care about the community, not just the summit. Local food, real guides, honest pace.",
    },
    {
        title: "Ready to build something beyond a hobby",
        body: "Trip leading can become a serious side income over time. We're building the infrastructure.",
    },
];

const leaderStats = [
    {
        value: "Rs 0",
        label: "Trip Cost To",
        subLabel: "The Leader",
    },
    {
        value: "6-10",
        label: "Conscious",
        subLabel: "Travellers Per Trip",
    },
    {
        value: "54+",
        label: "Uttarakhand",
        subLabel: "Routes Available",
    },
    {
        value: "100%",
        label: "Local Guide And",
        subLabel: "Homestay Backed",
    },
];

const journeyFlow = [
    {
        step: "01",
        icon: PenLine,
        title: "Apply And Share Your Vision",
        description:
            "Tell us about yourself - your trekking experience, your favourite routes, and the kind of journey you'd love to lead. Takes 3 minutes.",
    },
    {
        step: "02",
        icon: ShieldCheck,
        title: "KYC And Verification",
        description:
            "We do a simple identity check and a 15-minute call. Once verified, you get your Quiet Member profile with a QS Verified badge.",
    },
    {
        step: "03",
        icon: Mountain,
        title: "Design Your Journey",
        description:
            "Plan your itinerary, set your dates, choose your route. We connect you with local guides and homestays and review your listing.",
    },
    {
        step: "04",
        icon: Leaf,
        title: "Lead And Earn",
        description:
            "When your group fills, your trip is fully covered. Lead the journey, collect ratings, grow your profile. Every trip builds your reputation.",
    },
];

const leaderSupportPoints = [
    {
        icon: Mountain,
        title: "Your trek, your vision",
        description:
            "Design your own itinerary - route, pace, season, theme. We verify and publish it under your name.",
    },
    {
        icon: Ticket,
        title: "Free trip for you",
        description:
            "When your journey fills, your spot is completely covered - accommodation, guide costs, and trail expenses.",
    },
    {
        icon: Handshake,
        title: "Local ecosystem built in",
        description:
            "We connect you with QS-verified local guides and Pahadi homestays. You focus on leading. We handle the logistics.",
    },
    {
        icon: Leaf,
        title: "A community behind you",
        description:
            "Access the Quiet Members-only thread, early journey listings, and a growing network of like-minded leaders.",
    },
];

function FeaturesSection() {
    return (
        <section className="relative py-14 sm:py-18 lg:py-22">
            <div className="mx-auto w-full max-w-6xl space-y-8 px-4 sm:space-y-10 sm:px-6 lg:space-y-12 lg:px-8">
                <motion.article
                    variants={reveal}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                    className="rounded-[30px] border border-[#d8d1c6]/65 bg-[#e9e2d6]/96 p-6 text-[#23463c] shadow-[0_24px_54px_rgba(8,14,20,0.18)] sm:p-8 lg:p-10"
                >
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.5em] text-[#cc6a35]">
                            What You Get
                        </p>
                        <h2 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-[4rem]">
                            Everything a Trip Leader
                            <span className="mt-1 block font-serif text-[#cc6a35]">needs to succeed.</span>
                        </h2>
                    </div>

                    <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {leaderBenefits.map((benefit, index) => {
                            const Icon = benefit.icon;

                            return (
                                <motion.article
                                    id={benefit.id}
                                    key={benefit.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.4, delay: index * 0.04 }}
                                    className={`rounded-[8px] border border-[#d7d2c9] border-t-[4px] bg-[#f7f7f6] p-5 shadow-[0_15px_24px_rgba(10,16,18,0.08)] ${benefit.accent}`}
                                >
                                    <Icon className="h-5 w-5 text-[#163d33]" />
                                    <h3 className="mt-5 font-display text-4xl leading-tight text-[#21463c]">
                                        {benefit.title}
                                    </h3>
                                    <p className="mt-3 text-base leading-relaxed text-[#4c4a44]">
                                        {benefit.description}
                                    </p>
                                    <span
                                        className={`mt-5 inline-flex rounded-sm px-3 py-1 text-[0.64rem] font-semibold uppercase tracking-[0.32em] ${benefit.tagTone}`}
                                    >
                                        {benefit.tag}
                                    </span>
                                </motion.article>
                            );
                        })}
                    </div>
                </motion.article>

                <motion.article
                    variants={reveal}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                    className="rounded-[30px] border border-white/12 bg-[linear-gradient(145deg,#1f503f_0%,#1a4338_100%)] p-6 text-[#f2f2eb] shadow-[0_26px_58px_rgba(5,9,7,0.34)] sm:p-8 lg:p-10"
                >
                    <div className="grid gap-8 lg:grid-cols-[1.12fr_1fr] lg:gap-10">
                        <div>
                            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.48em] text-[#d3ab37]">
                                Who Should Apply
                            </p>
                            <h3 className="mt-3 font-display text-4xl leading-tight text-[#f1efe6] sm:text-5xl">
                                You might be
                                <span className="mt-1 block font-serif text-[#d3ab37]">a Trip Leader</span>
                                <span className="mt-1 block">if you are...</span>
                            </h3>

                            <div className="mt-8 space-y-0">
                                {idealLeaderPoints.map((point) => (
                                    <article
                                        key={point.title}
                                        className="border-t border-[#40695b] py-5 first:border-t"
                                    >
                                        <div className="flex gap-3">
                                            <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#cc6a35] text-white">
                                                <CheckCircle2 className="h-4 w-4" />
                                            </span>
                                            <div>
                                                <h4 className="font-display text-4xl leading-tight text-[#f4f3ea]">
                                                    {point.title}
                                                </h4>
                                                <p className="mt-2 text-base leading-relaxed text-[#b8c8bf]">
                                                    {point.body}
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-5">
                            <blockquote className="rounded-[8px] border border-[#2f2b22] bg-[#0b0908] p-6 shadow-[0_18px_34px_rgba(0,0,0,0.35)]">
                                <p className="font-serif text-4xl leading-relaxed text-[#f2efe7]">
                                    "The mountains gave me everything. QuietSummit gave me a way to pass that on - and go back for free."
                                </p>
                                <p className="mt-4 text-[0.72rem] font-semibold uppercase tracking-[0.38em] text-[#d3ab37]">
                                    Quiet Member - Uttarakhand
                                </p>
                            </blockquote>

                            <div className="relative grid grid-cols-2 gap-0 border border-[#40695b]">
                                <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-[#40695b]" />
                                <div className="pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-[#40695b]" />
                                {leaderStats.map((stat, index) => (
                                    <div
                                        key={stat.value + stat.subLabel}
                                        className={`flex min-h-36 flex-col items-center justify-center px-4 py-6 text-center ${index === 0 ? "relative" : ""
                                            }`}
                                    >
                                        {index === 0 ? (
                                            <span className="absolute -left-4 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#cc6a35] bg-[#1f503f] text-[#cc6a35]">
                                                <CircleDot className="h-4 w-4" />
                                            </span>
                                        ) : null}
                                        <p className="font-display text-5xl leading-none text-[#d3ab37]">{stat.value}</p>
                                        <p className="mt-3 text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-[#88a498]">
                                            {stat.label}
                                        </p>
                                        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-[#88a498]">
                                            {stat.subLabel}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.article>

                <motion.article
                    variants={reveal}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                    className="rounded-[30px] border border-white/12 bg-[#0a0808]/96 p-6 text-[#f2efe8] shadow-[0_24px_52px_rgba(0,0,0,0.4)] sm:p-8 lg:p-10"
                >
                    <div className="mx-auto max-w-3xl text-center">
                        <h3 className="font-display text-4xl leading-tight sm:text-5xl">
                            From application
                            <span className="mt-1 block font-serif text-[#d3ab37]">to the summit.</span>
                        </h3>
                    </div>

                    <div className="mt-8 grid gap-0 border border-[#2d2a25] md:grid-cols-2 xl:grid-cols-4">
                        {journeyFlow.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <article
                                    key={item.step}
                                    className={`min-h-72 border-[#2d2a25] bg-[#0a0808]/95 p-6 ${index < journeyFlow.length - 1 ? "border-b xl:border-b-0 xl:border-r" : ""
                                        } ${index === 1 ? "md:border-r" : ""}`}
                                >
                                    <p className="font-display text-[3.2rem] leading-none text-[#1d1b18]">{item.step}</p>
                                    <Icon className="mt-6 h-5 w-5 text-[#f4efe6]" />
                                    <h4 className="mt-6 font-display text-4xl leading-tight text-[#f6f2e9]">
                                        {item.title}
                                    </h4>
                                    <p className="mt-3 text-base leading-relaxed text-[#bdb8ac]">
                                        {item.description}
                                    </p>
                                </article>
                            );
                        })}
                    </div>
                </motion.article>

                <motion.article
                    variants={reveal}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                    className="rounded-[30px] border border-[#d8d1c6]/65 bg-[#e9e2d6]/96 p-6 text-[#1f463b] shadow-[0_24px_54px_rgba(8,14,20,0.18)] sm:p-8 lg:p-10"
                >
                    <div className="grid gap-9 lg:grid-cols-[1fr_0.88fr] lg:items-start">
                        <div>
                            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.48em] text-[#cc6a35]">
                                The Opportunity
                            </p>
                            <h3 className="mt-3 font-display text-4xl leading-tight sm:text-5xl lg:text-[3.9rem]">
                                You plan the trek.
                                <span className="mt-1 block font-serif text-[#cc6a35]">We handle everything</span>
                                <span className="mt-1 block font-serif text-[#cc6a35]">else.</span>
                            </h3>
                            <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-[#4d4a45] sm:text-xl">
                                Most people who love the Himalayas never get to share it the right way. QuietSummit changes that. As a Trip Leader, you design the journey - we verify it, list it, and fill it with travellers who genuinely want to slow down. Your trek costs you nothing.
                            </p>

                            <div className="mt-7 space-y-3">
                                {leaderSupportPoints.map((point) => {
                                    const Icon = point.icon;

                                    return (
                                        <article
                                            key={point.title}
                                            className="border-l-[4px] border-[#cc6a35] bg-[#f7f7f6] p-5"
                                        >
                                            <div className="flex gap-3">
                                                <Icon className="mt-1 h-5 w-5 shrink-0 text-[#173e34]" />
                                                <div>
                                                    <h4 className="font-display text-4xl leading-tight text-[#21463c]">
                                                        {point.title}
                                                    </h4>
                                                    <p className="mt-2 text-base leading-relaxed text-[#4d4a45]">
                                                        {point.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </article>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="relative min-h-[500px] rounded-[16px] bg-transparent">
                            <span className="absolute left-[-14px] top-1/3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#cc6a35] bg-[#e9e2d6] text-[#cc6a35]">
                                <CircleDot className="h-4 w-4" />
                            </span>

                            <article className="absolute left-0 top-16 w-[84%] rounded-[2px] bg-[#6f7f72] p-5 text-[#f2f1e9] shadow-[0_14px_30px_rgba(13,18,14,0.22)]">
                                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.3em] text-[#d7d2c9]">Journey Preview</p>
                                <h4 className="mt-3 font-display text-4xl leading-tight">Kedarkantha Winter Trail</h4>
                                <p className="mt-2 text-sm text-[#e1ddd3]">Uttarakhand - 4 days - 8 seats</p>
                                <span className="mt-4 inline-flex rounded-sm bg-[#d49a7e] px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#fff8f4]">
                                    Led By Quiet Member
                                </span>
                            </article>

                            <article className="absolute right-8 top-0 z-10 w-[82%] rounded-[2px] bg-[#214c3e] p-5 text-[#f6f2e8] shadow-[0_18px_34px_rgba(10,16,12,0.3)]">
                                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.3em] text-[#d7d2c9]">Journey - Verified</p>
                                <h4 className="mt-3 font-display text-4xl leading-tight">Dayara Bugyal Slow Trek</h4>
                                <p className="mt-2 text-sm text-[#d7d4ca]">Uttarakhand - 6 days - 8 seats</p>
                                <span className="mt-4 inline-flex rounded-sm bg-[#c75a2a] px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#fff8f4]">
                                    Led By Quiet Member
                                </span>

                                <aside className="absolute -bottom-6 -right-7 rounded-[2px] bg-[#b88b1f] px-8 py-5 text-center text-[#100f0d] shadow-[0_14px_26px_rgba(12,12,10,0.25)]">
                                    <p className="font-display text-5xl leading-none">Rs 0</p>
                                    <p className="mt-2 text-[0.66rem] font-semibold uppercase tracking-[0.3em]">Cost To</p>
                                    <p className="text-[0.66rem] font-semibold uppercase tracking-[0.3em]">Trip Leader</p>
                                </aside>
                            </article>

                            <article className="absolute bottom-4 right-0 w-[84%] rounded-[2px] bg-[#9ba59a] p-5 text-[#f8f5ed] shadow-[0_14px_28px_rgba(13,18,14,0.2)]">
                                <p className="text-[0.66rem] font-semibold uppercase tracking-[0.3em] text-[#f2efe6]">Journey Draft</p>
                                <h4 className="mt-3 font-display text-4xl leading-tight text-[#f3f0e7]">Nag Tibba Weekend Trail</h4>
                                <p className="mt-2 text-sm text-[#f2efe7]">Uttarakhand - 3 days - 10 seats</p>
                                <span className="mt-4 inline-flex rounded-sm bg-[#e1b49c] px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#fff8f4]">
                                    Led By Quiet Member
                                </span>
                            </article>
                        </div>
                    </div>
                </motion.article>
            </div>
        </section>
    );
}

export default FeaturesSection;
