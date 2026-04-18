import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {
	brand,
	heroContent,
	roleSnapshot,
	processSteps,
	founderRewards,
	foundingStory,
	photoBreak,
	waitlistSection,
} from '../data/landingCopy';
import WaitlistForm from '../components/WaitlistForm';

const fadeUp = {
	initial: {opacity: 0, y: 24},
	whileInView: {opacity: 1, y: 0},
	viewport: {once: true, margin: '-10%'},
	transition: {duration: 0.7, ease: [0.22, 1, 0.36, 1]},
};

function SnapshotHero() {
	return (
		<section className="relative border-b border-paper/10">
			<div className="grid min-h-[calc(100vh-4rem)] grid-cols-1 lg:grid-cols-2">
				{/* Left: photo with overlay quote */}
				<div className="relative h-[55vh] overflow-hidden lg:h-auto lg:min-h-[calc(100vh-4rem)]">
					<motion.img
						src="/photoHimly.jpg"
						alt="Himalayan peak at dawn"
						className="h-full w-full object-cover"
						initial={{scale: 1.05}}
						animate={{scale: 1}}
						transition={{duration: 2, ease: [0.22, 1, 0.36, 1]}}
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />
					<div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-12">
						<p className="font-serif text-lg italic leading-snug text-paper md:text-xl">
							“{heroContent.photoQuote.text}”
						</p>
						<p className="mt-2 text-[0.7rem] uppercase tracking-widest text-paper/70">
							— {heroContent.photoQuote.author}
						</p>
					</div>
				</div>

				{/* Right: copy + role snapshot + CTA */}
				<div className="flex flex-col justify-center px-6 py-14 md:px-12 lg:px-16 lg:py-20">
					<h1 className="font-serif text-4xl leading-[1.05] tracking-tight text-paper sm:text-5xl lg:text-6xl">
						{heroContent.headline}
						<br />
						<span className="italic text-paper/85">{heroContent.headlineAccent}</span>
					</h1>

					<p className="mt-6 max-w-md text-base leading-relaxed text-paper/70">
						{heroContent.subtext}
					</p>

					<div className="mt-10 rule" />

					<ul className="mt-6 divide-y divide-paper/10">
						{roleSnapshot.map((role) => (
							<li key={role.slug}>
								<Link
									to={`/roles/${role.slug}`}
									className="group grid grid-cols-[auto_1fr_auto] items-start gap-4 py-5 transition hover:bg-paper/5 md:gap-6"
								>
									<span className="font-serif text-sm text-paper/50">{role.index}</span>
									<div className="min-w-0">
										<p className="font-serif text-lg text-paper">{role.label}</p>
										<p className="mt-1 text-sm leading-relaxed text-paper/60">
											{role.summary}
										</p>
									</div>
									<span
										className="mt-1 text-paper/50 transition group-hover:translate-x-1 group-hover:text-paper"
										aria-hidden="true"
									>
										→
									</span>
								</Link>
							</li>
						))}
					</ul>

					<div className="mt-10">
						<a
							href="#waitlist"
							onClick={(e) => {
								e.preventDefault();
								document
									.querySelector('#waitlist')
									?.scrollIntoView({behavior: 'smooth', block: 'start'});
							}}
							className="group inline-flex items-center gap-3 border border-paper px-8 py-4 text-[0.78rem] uppercase tracking-widest text-paper transition hover:bg-paper hover:text-ink"
						>
							<span>{heroContent.ctaPrimary}</span>
							<span className="transition group-hover:translate-x-1" aria-hidden="true">↓</span>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}

function ProcessSection() {
	return (
		<section className="border-b border-paper/10">
			<div className="mx-auto w-full max-w-[1400px] px-6 py-24 md:px-12 lg:px-16 lg:py-32">
				<motion.p {...fadeUp} className="eyebrow">The process</motion.p>
				<motion.h2
					{...fadeUp}
					className="mt-4 max-w-3xl font-serif text-3xl leading-tight text-paper sm:text-4xl lg:text-5xl"
				>
					Register. Verify. Launch.
				</motion.h2>

				<div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
					{processSteps.map((step) => (
						<motion.div key={step.number} {...fadeUp}>
							<p className="font-serif text-sm text-paper/50">{step.number}</p>
							<h3 className="mt-2 font-serif text-2xl text-paper">{step.title}</h3>
							<p className="mt-3 text-sm leading-relaxed text-paper/65">{step.description}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

function FounderRewardsSection() {
	return (
		<section className="border-b border-paper/10">
			<div className="mx-auto w-full max-w-[1400px] px-6 py-24 md:px-12 lg:px-16 lg:py-32">
				<motion.p {...fadeUp} className="eyebrow">For founding partners</motion.p>
				<motion.h2
					{...fadeUp}
					className="mt-4 max-w-3xl font-serif text-3xl leading-tight text-paper sm:text-4xl lg:text-5xl"
				>
					What you get for showing up early.
				</motion.h2>

				<div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-10">
					{founderRewards.map((r) => (
						<motion.div key={r.title} {...fadeUp}>
							<h3 className="font-serif text-xl text-paper">{r.title}</h3>
							<p className="mt-3 text-sm leading-relaxed text-paper/65">{r.description}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

function FoundingStorySection() {
	return (
		<section className="border-b border-paper/10">
			<div className="mx-auto w-full max-w-[1400px] px-6 py-24 md:px-12 lg:px-16 lg:py-32">
				<motion.p {...fadeUp} className="eyebrow">{foundingStory.eyebrow}</motion.p>
				<div className="mt-8 max-w-3xl space-y-6">
					{foundingStory.paragraphs.map((p, i) => (
						<motion.p
							key={i}
							{...fadeUp}
							className={
								i === 0
									? 'font-serif text-2xl leading-snug text-paper sm:text-3xl lg:text-4xl'
									: 'text-base leading-relaxed text-paper/70'
							}
						>
							{p}
						</motion.p>
					))}
				</div>
			</div>
		</section>
	);
}

function PhotoBreakSection() {
	return (
		<section className="relative border-b border-paper/10">
			<div className="relative h-[70vh] min-h-[420px] w-full overflow-hidden">
				<img
					src={photoBreak.image}
					alt="Himalayan panorama"
					className="h-full w-full object-cover"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-ink/20" />
				<div className="absolute inset-0 flex items-end">
					<div className="w-full px-6 pb-12 md:px-12 md:pb-16 lg:px-16 lg:pb-20">
						<motion.p
							{...fadeUp}
							className="max-w-3xl font-serif text-2xl italic leading-snug text-paper sm:text-3xl lg:text-4xl"
						>
							“{photoBreak.quote}”
						</motion.p>
						<motion.p
							{...fadeUp}
							className="mt-3 text-[0.7rem] uppercase tracking-widest text-paper/70"
						>
							— {photoBreak.attribution}
						</motion.p>
					</div>
				</div>
			</div>
		</section>
	);
}

function WaitlistSection() {
	return (
		<section id="waitlist" className="border-b border-paper/10">
			<div className="mx-auto w-full max-w-[1400px] px-6 py-24 md:px-12 lg:px-16 lg:py-32">
				<div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
					<div>
						<p className="eyebrow">{waitlistSection.eyebrow}</p>
						<h2 className="mt-4 font-serif text-3xl leading-tight text-paper sm:text-4xl lg:text-5xl">
							{waitlistSection.title}
						</h2>
						<p className="mt-6 max-w-md text-base leading-relaxed text-paper/70">
							{waitlistSection.description}
						</p>
					</div>
					<div>
						<WaitlistForm />
					</div>
				</div>
			</div>
		</section>
	);
}

function HomePage() {
	return (
		<>
			<SnapshotHero />
			<ProcessSection />
			<FounderRewardsSection />
			<FoundingStorySection />
			<PhotoBreakSection />
			<WaitlistSection />
		</>
	);
}

export default HomePage;
