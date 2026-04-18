import { useEffect, useRef, useState } from 'react';
import { useWaitlist } from '../hooks/useWaitlist';

const ROLE_OPTIONS = [
    { value: 'TRAVELLER', label: 'Traveller' },
    { value: 'MEMBER', label: 'Member' },
    { value: 'GUIDE', label: 'Guide' },
    { value: 'HOMESTAY_OWNER', label: 'Homestay Owner' },
];

const COUNTRY_CODES = [
    { code: '+91', flag: '🇮🇳', name: 'India' },
    { code: '+1', flag: '🇺🇸', name: 'United States' },
    { code: '+44', flag: '🇬🇧', name: 'United Kingdom' },
    { code: '+61', flag: '🇦🇺', name: 'Australia' },
    { code: '+65', flag: '🇸🇬', name: 'Singapore' },
    { code: '+971', flag: '🇦🇪', name: 'United Arab Emirates' },
    { code: '+49', flag: '🇩🇪', name: 'Germany' },
    { code: '+33', flag: '🇫🇷', name: 'France' },
    { code: '+81', flag: '🇯🇵', name: 'Japan' },
    { code: '+977', flag: '🇳🇵', name: 'Nepal' },
    { code: '+86', flag: '🇨🇳', name: 'China' },
    { code: '+7', flag: '🇷🇺', name: 'Russia' },
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

function RoleDropdown({ value, onChange }) {
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
                                    className={`flex w-full items-center justify-between px-4 py-3 text-left text-sm transition hover:bg-paper hover:text-ink ${selected ? 'text-paper' : 'text-paper/70'
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

function CountryCodeDropdown({ value, onChange }) {
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
                                    className={`flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition hover:bg-paper hover:text-ink ${selected ? 'text-paper' : 'text-paper/70'
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
    const {
        form,
        setField,
        isFormValid,
        isDuplicateLocal,
        isSubmitting,
        feedback,
        submit
    } = useWaitlist();

    const disabled = isSubmitting || !isFormValid || isDuplicateLocal;

    return (
        <form
            onSubmit={submit}
            id="waitlist-form"
            noValidate
            className="w-full max-w-3xl mx-auto"
        >
            <div className="grid gap-6 md:grid-cols-2">
                {/* Email */}
                <label className="flex flex-col gap-2">
                    <div className="flex justify-between text-[0.7rem] uppercase tracking-widest text-paper/60">
                        <span>Email</span>
                        <span className="text-paper/40">Required</span>
                    </div>
                    <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setField('email', e.target.value)}
                        placeholder="you@example.com"
                        autoComplete="email"
                        className="underline-input focus:ring-0 focus:outline-none"
                        required
                    />
                </label>

                {/* Role */}
                <div className="flex flex-col gap-2">
                    <span className="text-[0.7rem] uppercase tracking-widest text-paper/60">
                        Role
                    </span>
                    <RoleDropdown
                        value={form.role}
                        onChange={(v) => setField('role', v)}
                    />
                </div>

                {/* Name */}
                <label className="flex flex-col gap-2">
                    <div className="flex justify-between text-[0.7rem] uppercase tracking-widest text-paper/60">
                        <span>Name</span>
                        <span className="text-paper/40">Optional</span>
                    </div>
                    <input
                        type="text"
                        value={form.fullName}
                        onChange={(e) => setField('fullName', e.target.value)}
                        placeholder="Your full name"
                        autoComplete="name"
                        className="underline-input"
                    />
                </label>

                {/* WhatsApp */}
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between text-[0.7rem] uppercase tracking-widest text-paper/60">
                        <span>WhatsApp</span>
                        <span className="text-paper/40">Optional</span>
                    </div>

                    <div className="flex gap-3">
                        <CountryCodeDropdown
                            value={form.countryCode}
                            onChange={(v) => setField('countryCode', v)}
                        />
                        <input
                            type="tel"
                            value={form.whatsappNumber}
                            onChange={(e) => {
                                const val = e.target.value;
                                if (/^[\d\s\-\+]*$/.test(val)) {
                                    setField('whatsappNumber', val);
                                }
                            }}
                            placeholder="Phone number"
                            autoComplete="tel-national"
                            className="underline-input flex-1"
                        />
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="mt-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <button
                    type="submit"
                    disabled={disabled}
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 text-[0.75rem] uppercase tracking-widest border border-paper text-paper transition-all duration-200 hover:bg-paper hover:text-ink disabled:opacity-40 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? "Submitting..." : "Join Waitlist"}
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                </button>

                <p className="text-xs text-paper/50 max-w-xs leading-relaxed">
                    We’ll only reach out when it truly matters. No spam, ever.
                </p>
            </div>

            {/* Feedback */}
            {feedback.message && (
                <p
                    className={`mt-6 text-sm ${feedback.type === "error"
                        ? "text-red-400"
                        : "text-green-300"
                        }`}
                >
                    {feedback.message}
                </p>
            )}
        </form>
    );
}

export default WaitlistForm;
