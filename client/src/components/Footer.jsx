import {brand} from '../data/landingCopy';

function Footer() {
	return (
		<footer className="border-t border-paper/10 bg-ink">
			<div className="mx-auto flex w-full max-w-[1400px] flex-col gap-2 px-6 py-10 text-[0.75rem] uppercase tracking-widest text-paper/50 md:flex-row md:items-center md:justify-between lg:px-10">
				<p>© {new Date().getFullYear()} {brand.name}</p>
				<p>{brand.launchBadge}</p>
			</div>
		</footer>
	);
}

export default Footer;
