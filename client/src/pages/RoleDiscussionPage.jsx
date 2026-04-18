import {useState} from 'react';
import {Link, Navigate, useParams} from 'react-router-dom';
import {motion} from 'framer-motion';
import {
	roleDiscussionRoutes,
	roleRouteOrder,
	rolePhotos,
	rolePullQuotes,
} from '../data/landingCopy';

const fadeUp = {
	initial: {opacity: 0, y: 24},
	whileInView: {opacity: 1, y: 0},
	viewport: {once: true, margin: '-10%'},
	transition: {duration: 0.7, ease: [0.22, 1, 0.36, 1]},
};

function Accordion({items}) {
	const [open, setOpen] = useState(0);
	return (
		<ul className="divide-y divide-paper/15 border-y border-paper/15">
			{items.map((item, idx) => {
				const isOpen = open === idx;
				return (
					<li key={item.question}>
						<button
							type="button"
							onClick={() => setOpen(isOpen ? -1 : idx)}
							className="flex w-full items-start justify-between gap-6 py-6 text-left"
						>
							<span className="font-serif text-lg text-paper md:text-xl">{item.question}</span>
							<span className="mt-1 text-paper/50" aria-hidden="true">{isOpen ? '−' : '+'}</span>
						</button>
						{isOpen ? (
							<ul className="space-y-2 pb-6 pr-10">
								{item.answers.map((a) => (
									<li key={a} className="text-sm leading-relaxed text-paper/70">— {a}</li>
								))}
							</ul>
						) : null}
					</li>
				);
			})}
		</ul>
	);
}

function RoleDiscussionPage() {
	const {roleSlug} = useParams();
	const role = roleDiscussionRoutes[roleSlug];

	if (!role) {
		return <Navigate to="/" replace />;
	}

	const currentIdx = roleRouteOrder.indexOf(roleSlug);
	const prevSlug = currentIdx > 0 ? roleRouteOrder[currentIdx - 1] : null;
	const nextSlug = currentIdx < roleRouteOrder.length - 1 ? roleRouteOrder[currentIdx + 1] : null;
	const photo = rolePhotos[roleSlug];
	const pull = rolePullQuotes[roleSlug];

	return (
		<>
			{/* Photo banner with pull quote */}
			<section className="relative border-b border-paper/10">
				<div className="relative h-[55vh] min-h-[360px] w-full overflow-hidden">
					<img src={photo} alt={role.label} className="h-full w-full object-cover" />
					<div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-ink/25" />
					<div className="absolute inset-0 flex items-end">
						<div className="w-full px-6 pb-10 md:px-12 md:pb-14 lg:px-16 lg:pb-16">
							<p className="eyebrow">{role.eyebrow}</p>
							<p className="mt-4 max-w-3xl font-serif text-xl italic leading-snug text-paper sm:text-2xl lg:text-3xl">
								“{pull.text}”
							</p>
							<p className="mt-2 text-[0.7rem] uppercase tracking-widest text-paper/70">
								— {pull.author}
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Title + subtitle */}
			<section className="border-b border-paper/10">
				<div className="mx-auto w-full max-w-[1400px] px-6 py-20 md:px-12 lg:px-16 lg:py-28">
					<motion.h1
						{...fadeUp}
						className="max-w-4xl font-serif text-4xl leading-[1.05] tracking-tight text-paper sm:text-5xl lg:text-6xl"
					>
						{role.title}
					</motion.h1>
					<motion.p
						{...fadeUp}
						className="mt-6 max-w-2xl text-base leading-relaxed text-paper/70"
					>
						{role.subtitle}
					</motion.p>
				</div>
			</section>

			{/* Highlights + Metrics */}
			<section className="border-b border-paper/10">
				<div className="mx-auto w-full max-w-[1400px] px-6 py-20 md:px-12 lg:px-16 lg:py-28">
					<div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
						<div>
							<p className="eyebrow">What you can do</p>
							<ul className="mt-8 space-y-6">
								{role.highlights.map((h) => (
									<motion.li
										key={h}
										{...fadeUp}
										className="border-t border-paper/15 pt-6 font-serif text-lg leading-snug text-paper md:text-xl"
									>
										{h}
									</motion.li>
								))}
							</ul>
						</div>
						<div>
							<p className="eyebrow">What this means</p>
							<dl className="mt-8 space-y-8">
								{role.metrics.map((m) => (
									<motion.div
										key={m.label}
										{...fadeUp}
										className="border-t border-paper/15 pt-6"
									>
										<dt className="font-serif text-3xl text-paper md:text-4xl">{m.value}</dt>
										<dd className="mt-2 text-sm leading-relaxed text-paper/65">{m.label}</dd>
									</motion.div>
								))}
							</dl>
						</div>
					</div>
				</div>
			</section>

			{/* Discussion accordion */}
			<section className="border-b border-paper/10">
				<div className="mx-auto w-full max-w-[1400px] px-6 py-20 md:px-12 lg:px-16 lg:py-28">
					<motion.p {...fadeUp} className="eyebrow">Discussion</motion.p>
					<motion.h2
						{...fadeUp}
						className="mt-4 max-w-3xl font-serif text-3xl leading-tight text-paper sm:text-4xl"
					>
						The things we get asked often.
					</motion.h2>
					<div className="mt-12">
						<Accordion items={role.discussions} />
					</div>
				</div>
			</section>

			{/* Footer nav: back / prev / next + join CTA */}
			<section className="border-b border-paper/10">
				<div className="mx-auto w-full max-w-[1400px] px-6 py-16 md:px-12 lg:px-16">
					<div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
						<div className="flex flex-wrap gap-8">
							<Link
								to="/"
								className="text-[0.75rem] uppercase tracking-widest text-paper/60 transition hover:text-paper"
							>
								← Back to home
							</Link>
							{prevSlug ? (
								<Link
									to={`/roles/${prevSlug}`}
									className="text-[0.75rem] uppercase tracking-widest text-paper/60 transition hover:text-paper"
								>
									← {roleDiscussionRoutes[prevSlug].label}
								</Link>
							) : null}
							{nextSlug ? (
								<Link
									to={`/roles/${nextSlug}`}
									className="text-[0.75rem] uppercase tracking-widest text-paper/60 transition hover:text-paper"
								>
									{roleDiscussionRoutes[nextSlug].label} →
								</Link>
							) : null}
						</div>
						<Link
							to="/#waitlist"
							className="group inline-flex items-center gap-3 border border-paper px-8 py-4 text-[0.78rem] uppercase tracking-widest text-paper transition hover:bg-paper hover:text-ink"
						>
							<span>Join the waitlist</span>
							<span className="transition group-hover:translate-x-1" aria-hidden="true">→</span>
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}

export default RoleDiscussionPage;
