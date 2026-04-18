const fs = require('fs');
let code = fs.readFileSync('src/components/WaitlistForm.jsx', 'utf8');

// Using a more structured replacement to fix the botched component.
// We are going to replace the whole CountryCodeDropdown with a fresh properly closed copy.
const regex = /function CountryCodeDropdown\(\{value, onChange\}\) \{[\s\S]*?\}\n\nfunction WaitlistForm/m;

const replacement = \`function CountryCodeDropdown({value, onChange}) {
        const [open, setOpen] = useState(false);
        const ref = useRef(null);
        useClickOutside(ref, () => setOpen(false));
        const current = COUNTRY_CODES.find((c) => c.code === value) || COUNTRY_CODES[0];

        return (
                <div ref={ref} className="relative w-full">
                        <button
                                type="button"
                                onClick={() => setOpen((v) => !v)}
                                aria-haspopup="listbox"
                                aria-expanded={open}
                                className="premium-trigger premium-trigger-compact justify-center gap-1.5"
                        >
                                <span className="text-paper/90 font-medium tracking-wide">{current.code}</span>
                                <span
                                        className={\\\`text-paper/50 transition-transform \${open ? 'rotate-180' : ''}\\\`}
                                        aria-hidden="true"
                                >
                                        ▾
                                </span>
                        </button>

                        {open ? (
                                <ul
                                        role="listbox"
                                        className="premium-menu right-auto max-h-64 w-72 overflow-y-auto"
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
                                                                        className={\\\`premium-option gap-3 \${
                                                                                selected ? 'premium-option-selected' : 'premium-option-default'
                                                                        }\\\`}
                                                                >
                                                                        <span className="iso-chip" aria-hidden="true">{c.iso}</span>
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

function WaitlistForm\`;

code = code.replace(regex, replacement);
fs.writeFileSync('src/components/WaitlistForm.jsx', code);
