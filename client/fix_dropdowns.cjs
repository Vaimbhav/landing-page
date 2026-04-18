const fs = require('fs');
let code = fs.readFileSync('src/components/WaitlistForm.jsx', 'utf8');

// Fix RoleDropdown
code = code.replace(
  'className="flex w-full items-center justify-between border-0 border-b border-paper/25 bg-transparent py-3 text-left text-base text-paper transition focus:border-paper focus:outline-none"',
  'className="underline-input flex w-full items-center justify-between text-left h-[54px]"'
);

// Fix CountryCodeDropdown
code = code.replace(
  'className="flex items-center gap-2 border-0 border-b border-paper/25 bg-transparent py-3 pr-3 text-base text-paper transition focus:border-paper focus:outline-none"',
  'className="underline-input flex items-center justify-between gap-1.5 px-3 h-[54px]"'
);

// Fix the dropdown menu placement and aesthetics to match
code = code.replace(
  'className="absolute left-0 right-0 top-full z-30 mt-2 border border-paper/20 bg-ink shadow-[0_12px_40px_rgba(0,0,0,0.6)]"',
  'className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-md border border-paper/10 bg-ink/90 backdrop-blur-2xl shadow-[0_30px_60px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.08)]"'
);

code = code.replace(
  'className="absolute left-0 top-full z-30 mt-2 max-h-64 w-64 overflow-y-auto border border-paper/20 bg-ink shadow-[0_12px_40px_rgba(0,0,0,0.6)]"',
  'className="absolute left-0 top-full z-50 mt-2 max-h-64 w-64 overflow-y-auto rounded-md border border-paper/10 bg-ink/90 backdrop-blur-2xl shadow-[0_30px_60px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.08)]"'
);

fs.writeFileSync('src/components/WaitlistForm.jsx', code);
