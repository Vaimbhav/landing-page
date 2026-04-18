import {useEffect, useRef, useState} from 'react';
import {useWaitlist} from '../hooks/useWaitlist';

const ROLE_OPTIONS = [
	{value: 'TRAVELLER', label: 'Traveller'},
	{value: 'MEMBER', label: 'Member'},
	{value: 'GUIDE', label: 'Guide'},
	{value: 'HOMESTAY_OWNER', label: 'Homestay Owner'},
];

const COUNTRY_CODES = [
	{code: '+91', flag: '🇮🇳', name: 'India'},
	{code: '+1', flag: '🇺🇸', name: 'United States'},
	{code: '+44', flag: '🇬🇧', name: 'United Kingdom'},
	{code: '+61', flag: '🇦🇺', name: 'Australia'},
	{code: '+65', flag: '🇸🇬', name: 'Singapore'},
	{code: '+971', flag: '🇦🇪', name: 'United Arab Emirates'},
	{code: '+49', flag: '🇩🇪', name: 'Germany'},
	{code: '+33', flag: '🇫🇷', name: 'France'},
	{code: '+81', flag: '🇯🇵', name: 'Japan'},
	{code: '+977', flag: '🇳🇵', name: 'Nepal'},
	{code: '+86', flag: '🇨🇳', name: 'China'},
	{code: '+7', flag: '🇷🇺', name: 'Russia'},
];

function useClickOutside(ref, onClose) {
	useEffect(() => {
		const onClick = (e) => {
			if (ref.current && !ref.current.contains(e.target)) onClose();
		};
		const onKey = (e) => {
			if (e.key === 'Escape') onClose();
		};
		document.addEventListener('mousedown', onClick);
		document.addEventListener('keydown', onKey);
		return () => {
			document.removeEventListener('mousedown', onClick);
			document.removeEventListener('keydown', onKey);
		};
	}, [ref, onClose]);
}

function RoleDropdown({value, onChange}) {
	const [open, setOpen] = useState(false);
	const ref = useRef(null);
	useClickOutside(ref, () => setOpen(false));
	const current = ROLE_OPTIONS.find((o) => o.value === value) || ROLE_OPTIONS[0];

	return (
		<div ref={ref} className="relative">
			<button
				type="button"
				onClick={() => setOpen((v) => !v)}
				aria-haspopup="listbox"
				aria-expanded={open}
				className="flex w-full items-center justify-between border-0 border-b border-paper/25 bg-transparent py-3 text-left text-base text-paper transition focus:border-paper focus:outline-none"
			>
				<span>{current.label}</span>
				<span
					className={`text-paper/50 transition-transform ${open ? 'rotate-180' : ''}`}
					aria-hidden="true"
				>
					▾
				</span>
			</button>

			{open ? (
				<ul
					role="listbox"
					className="absolute left-0 right-0 top-full z-30 mt-2 border border-paper/20 bg-ink shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
				>
					{ROLE_OPTIONS.map((opt) => {
						const selected = opt.value === value;
						return (
							<li key={opt.value} role="option" aria-selected={selected}>
								<button
									type="button"
									onClick={() => {
										onChange(opt.value);
										setOpen(false);
									}}
									className={`flex w-full items-center justify-between px-4 py-3 text-left text-sm transition hover:bg-paper hover:text-ink ${
										selected ? 'text-paper' : 'text-paper/70'
									}`}
								>
									<span>{opt.label}</span>
									{selected ? <span aria-hidden="true">·</span> : null}
								</button>
							</li>
						);
					})}
				</ul>
			) : null}
		</div>
	);
}

function CountryCodeDropdown({value, onChange}) {
	const [open, setOpen] = useState(false);
	const ref = useRef(null);
	useClickOutside(ref, () => setOpen(false));
	const current = COUNTRY_CODES.find((c) => c.code === value) || COUNTRY_CODES[0];

	return (
		<div ref={ref} className="relative shrink-0">
			<button
				type="button"
				onClick={() => setOpen((v) => !v)}
				aria-haspopup="listbox"
				aria-expanded={open}
				className="flex items-center gap-2 border-0 border-b border-paper/25 bg-transparent py-3 pr-3 text-base text-paper transition focus:border-paper focus:outline-none"
			>
				<span className="text-lg leading-none" aria-hidden="true">{current.flag}</span>
				<span className="text-paper/90">{current.code}</span>
				<span
					className={`text-paper/50 transition-transform ${open ? 'rotate-180' : ''}`}
					aria-hidden="true"
				>
					▾
				</span>
			</button>

			{open ? (
				<ul
					role="listbox"
					className="absolute left-0 top-full z-30 mt-2 max-h-64 w-64 overflow-y-auto border border-paper/20 bg-ink shadow-[0_12px_40px_rgba(0,0,0,0.6)]"
				>
					{COUNTRY_CODES.map((c) => {
						const selected = c.code === value;
						return (
							<li key={c.code} role="option" aria-selected={selected}>
								<button
									type="button"
									onClick={() => {
										onChange(c.code);
										setOpen(false);
									}}
									className={`flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition hover:bg-paper hover:text-ink ${
										selected ? 'text-paper' : 'text-paper/70'
									}`}
								>
									<span className="text-base leading-none" aria-hidden="true">{c.flag}</span>
									<span className="w-12 tabular-nums">{c.code}</span>
									<span className="truncate text-xs opacity-70">{c.name}</span>
								</button>
							</li>
						);
					})}
				</ul>
			) : null}
		</div>
	);
}

function WaitlistForm() {
	const {form, setField, isFormValid, isDuplicateLocal, isSubmitting, feedback, submit} =
		useWaitlist();

	const disabled = isSubmitting || !isFormValid || isDuplicateLocal;

	return (
		<form onSubmit={submit} id="waitlist-form" noValidate className="w-full">
			<div className="grid gap-8 md:grid-cols-2">
				<label className="block">
					<span className="flex items-baseline justify-between text-[0.7rem] uppercase tracking-widest text-paper/60">
						<span>Email</span>
						<span className="text-paper/40">Required</span>
					</span>
					<input
						type="email"
						value={form.email}
						onChange={(e) => setField('email', e.target.value)}
						placeholder="you@example.com"
						autoComplete="email"
						className="underline-input"
						required
					/>
				</label>

				<div className="block">
					<span className="text-[0.7rem] uppercase tracking-widest text-paper/60">Role</span>
					<RoleDropdown value={form.role} onChange={(v) => setField('role', v)} />
				</div>

				<label className="block">
					<span className="flex items-baseline justify-between text-[0.7rem] uppercase tracking-widest text-paper/60">
						<span>Name</span>
						<span className="text-paper/40">Optional</span>
					</span>
					<input
						type="text"
						value={form.fullName}
						onChange={(e) => setField('fullName', e.target.value)}
						placeholder="Your full name"
						autoComplete="name"
						className="underline-input"
					/>
				</label>

				<div className="block">
					<span className="flex items-baseline justify-between text-[0.7rem] uppercase tracking-widest text-paper/60">
						<span>WhatsApp</span>
						<span className="text-paper/40">Optional</span>
					</span>
					<div className="flex items-stretch gap-3">
						<CountryCodeDropdown
							value={form.countryCode}
							onChange={(v) => setField('countryCode', v)}
						/>
						<input
							type="tel"
							value={form.whatsappNumber}
							onChange={(e) => setField('whatsappNumber', e.target.value)}
							placeholder="Number"
							autoComplete="tel-national"
							className="underline-input flex-1"
						/>
					</div>
				</div>
			</div>

			<div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
				<button
					type="submit"
					disabled={disabled}
					className="group inline-flex items-center gap-3 border border-paper px-8 py-4 text-[0.78rem] uppercase tracking-widest text-paper transition hover:bg-paper hover:text-ink disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-paper"
				>
					<span>{isSubmitting ? 'Submitting' : 'Submit'}</span>
					<span className="transition group-hover:translate-x-1" aria-hidden="true">→</span>
				</button>

				<p className="max-w-sm text-xs leading-relaxed text-paper/50">
					We will only reach out when it matters. No noise between the signal.
				</p>
			</div>

			{feedback.message ? (
				<p
					className={`mt-6 text-sm ${
						feedback.type === 'error' ? 'text-red-300' : 'text-paper/80'
					}`}
				>
					{feedback.message}
				</p>
			) : null}
		</form>
	);
}

export default WaitlistForm;
