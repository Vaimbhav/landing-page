import {useEffect, useRef, useState} from 'react';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {navLinks, brand} from '../data/landingCopy';

function Navbar() {
	const [open, setOpen] = useState(false);
	const location = useLocation();
	const navigate = useNavigate();
	const menuRef = useRef(null);

	useEffect(() => {
		if (!open) return undefined;
		const onClick = (e) => {
			if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false);
		};
		const onKey = (e) => {
			if (e.key === 'Escape') setOpen(false);
		};
		document.addEventListener('mousedown', onClick);
		document.addEventListener('touchstart', onClick);
		document.addEventListener('keydown', onKey);
		return () => {
			document.removeEventListener('mousedown', onClick);
			document.removeEventListener('touchstart', onClick);
			document.removeEventListener('keydown', onKey);
		};
	}, [open]);

	const onJoin = (event) => {
		event.preventDefault();
		setOpen(false);
		if (location.pathname !== '/') {
			navigate('/#waitlist');
			return;
		}
		document.querySelector('#waitlist')?.scrollIntoView({behavior: 'smooth', block: 'start'});
	};

	return (
		<header
			ref={menuRef}
			className="sticky top-0 z-50 border-b border-paper/10 bg-ink/85 backdrop-blur"
		>
			<div className="mx-auto flex h-16 w-full max-w-[1400px] items-center justify-between px-6 lg:px-10">
				<div className="flex items-center gap-4">
					<Link
						to="/"
						onClick={() => setOpen(false)}
						className="font-serif text-lg tracking-tight text-paper"
					>
						{brand.name}
					</Link>
					<span className="hidden items-center bg-paper px-2.5 py-1 text-[0.65rem] font-medium uppercase tracking-widest text-ink sm:inline-flex">
						{brand.launchBadge}
					</span>
				</div>

				<nav className="hidden items-center gap-10 md:flex">
					{navLinks.map((link) => (
						<Link
							key={link.href}
							to={link.href}
							className="text-[0.78rem] uppercase tracking-widest text-paper/70 transition hover:text-paper"
						>
							{link.label}
						</Link>
					))}
				</nav>

				<div className="hidden md:block">
					<a
						href="#waitlist"
						onClick={onJoin}
						className="text-[0.78rem] uppercase tracking-widest text-paper transition hover:text-paper/70"
					>
						Join waitlist →
					</a>
				</div>

				<button
					type="button"
					onClick={() => setOpen((v) => !v)}
					className="inline-flex h-10 w-10 items-center justify-center text-paper md:hidden"
					aria-label={open ? 'Close menu' : 'Open menu'}
					aria-expanded={open}
				>
					<svg
						width="22"
						height="22"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="1.6"
						strokeLinecap="round"
						aria-hidden="true"
					>
						{open ? (
							<g>
								<line x1="5" y1="5" x2="19" y2="19" />
								<line x1="19" y1="5" x2="5" y2="19" />
							</g>
						) : (
							<g>
								<line x1="4" y1="7" x2="20" y2="7" />
								<line x1="4" y1="12" x2="20" y2="12" />
								<line x1="4" y1="17" x2="20" y2="17" />
							</g>
						)}
					</svg>
				</button>
			</div>

			{open ? (
				<div className="border-t border-paper/10 bg-ink md:hidden">
					<nav className="flex flex-col px-6 py-4">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								to={link.href}
								onClick={() => setOpen(false)}
								className="py-3 text-[0.8rem] uppercase tracking-widest text-paper/80"
							>
								{link.label}
							</Link>
						))}
						<a
							href="#waitlist"
							onClick={onJoin}
							className="mt-2 border-t border-paper/10 pt-3 text-[0.8rem] uppercase tracking-widest text-paper"
						>
							Join waitlist →
						</a>
					</nav>
				</div>
			) : null}
		</header>
	);
}

export default Navbar;
