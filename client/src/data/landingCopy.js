export const brand = {
	name: 'Quiet Summit',
	launchBadge: 'Launching May 2026',
	tagline: 'Slow travel. Deep connections. Intentional experiences in nature.',
};

export const navLinks = [
	{label: 'Traveller', href: '/roles/traveller'},
	{label: 'Member', href: '/roles/member'},
	{label: 'Guide', href: '/roles/guide'},
	{label: 'Homestay Owner', href: '/roles/homestay-owner'},
];

export const heroContent = {
	headline: 'Himalayan journeys,',
	headlineAccent: 'designed quietly.',
	subtext:
		'Verified local guides. Family-run homestays. A rural, raw Himalayan experience — unhurried and unfiltered. No algorithms. Just mountains, breath, and silence.',
	ctaPrimary: 'Join the waitlist',
	photoQuote: {
		text: 'The mountains are calling and I must go.',
		author: 'John Muir',
	},
};

export const roleSnapshot = [
	{
		slug: 'traveller',
		index: '01',
		label: 'Traveller',
		summary:
			'Discover verified journeys and stays. Book with clarity, walk away with something quieter than you arrived with.',
	},
	{
		slug: 'member',
		index: '02',
		label: 'Member',
		summary:
			'Lead small-group journeys you would want to be on. Earn a free seat once your trip fills, and grow a reputation that travels with you.',
	},
	{
		slug: 'guide',
		index: '03',
		label: 'Guide',
		summary:
			'Get QS-verified. Reach travellers who value your craft, your region, and your pace. Transparent payouts, no hidden commission.',
	},
	{
		slug: 'homestay-owner',
		index: '04',
		label: 'Homestay Owner',
		summary:
			'List your home. Host at your rhythm. Reach guests who come for silence and stay for the story.',
	},
];

export const processSteps = [
	{number: '01', title: 'Register', description: 'Share your role and contact once. We review every entry by hand.'},
	{number: '02', title: 'Verify', description: 'We reach out, verify credentials, and onboard you by role.'},
	{number: '03', title: 'Launch', description: 'You go live with the platform in May 2026 — as a founding partner.'},
];

export const founderRewards = [
	{
		title: 'Founding spotlight',
		description:
			'The first cohort of guides, members, and owners are featured across our launch communication. Your story travels before your trip does.',
	},
	{
		title: 'Lifetime founder tier',
		description:
			'Early partners keep founder-tier status permanently. Priority listing, preferential payouts, and first access to new regions.',
	},
	{
		title: 'No noise between the signal',
		description:
			'We only reach out when it matters — a launch, an onboarding step, a change that affects you. No drip sequences. No upsells. No daily nudges.',
	},
];

export const foundingStory = {
	eyebrow: 'Why this exists',
	paragraphs: [
		'Quiet Summit was built for the traveller who has stopped believing in itineraries.',
		'We are a small team stitching together verified local guides, family-run homestays, and unhurried journeys across the Indian Himalaya — with none of the noise that modern travel has come to mean.',
		'No notifications. No algorithms. Just mountains, breath, and silence.',
	],
};

export const photoBreak = {
	image: '/panorama.jpg',
	quote: 'Walking away from comfort to walk back to clarity.',
	attribution: 'Quiet Summit',
};

export const waitlistSection = {
	eyebrow: 'Early access',
	title: 'Register once. We take it from here.',
	description:
		'Fill in your details and we will contact you for role-based onboarding. This pre-launch list is for serious early partners only.',
};

export const rolePhotos = {
	traveller: '/village.jpg',
	member: '/trekkers.jpg',
	guide: '/sunrise.jpg',
	'homestay-owner': '/forest.jpg',
};

export const rolePullQuotes = {
	traveller: {text: 'Not all those who wander are lost.', author: 'J.R.R. Tolkien'},
	member: {text: 'The best journeys answer questions that in the beginning you didn\u2019t even think to ask.', author: 'Jennifer Lee'},
	guide: {text: 'There is no shortage of good days. It is good lives that are hard to come by.', author: 'Annie Dillard'},
	'homestay-owner': {text: 'A house is made of walls and beams; a home is built with love and dreams.', author: 'Ralph Waldo Emerson'},
};

export const roleRouteOrder = ['traveller', 'member', 'guide', 'homestay-owner'];

export const roleDiscussionRoutes = {
	traveller: {
		label: 'Traveller',
		eyebrow: 'For travellers',
		title: 'Journeys, not itineraries.',
		subtitle:
			'Discover verified routes, compare trusted people, and decide with clarity before you book. Less planning. More presence.',
		highlights: [
			'Browse verified journeys, guides, and homestays in one trusted flow',
			'Compare trips on what actually matters — pace, group size, host',
			'Priority notifications when early departures open',
		],
		metrics: [
			{value: 'Verified', label: 'Guides and hosts, every one'},
			{value: 'Clear', label: 'Pricing and trip expectations'},
			{value: 'Small', label: 'Groups, max twelve'},
		],
		discussions: [
			{
				question: 'What can travellers do at launch?',
				answers: [
					'Browse curated Himalayan journeys with verified guides and homestays',
					'Book with full clarity on pricing, pace, group size, and trip intention',
					'Receive a single launch notification — no newsletters, no drip campaigns',
				],
			},
			{
				question: 'Why is this different from other platforms?',
				answers: [
					'Every guide and stay is verified by hand before it goes live',
					'Group sizes are capped to protect the experience',
					'Communication is direct — no chatbots, no algorithmic push',
				],
			},
			{
				question: 'What if I want to host instead of join?',
				answers: [
					'Select Member, Guide, or Homestay Owner on the registration form',
					'Our team reaches out for role-specific onboarding',
					'Early partners receive founding-tier benefits permanently',
				],
			},
		],
	},
	member: {
		label: 'Member',
		eyebrow: 'For members',
		title: 'Lead journeys you would want to be on.',
		subtitle:
			'Members host small-group journeys for travellers who trust their judgment. You curate the route. We handle verification, logistics, and trust.',
		highlights: [
			'Host verified journeys with local guides and homestays already vetted',
			'Earn a free seat once your trip fills — your effort is recognised',
			'Build a reputation that travels across every trip you lead',
		],
		metrics: [
			{value: 'Free', label: 'Your seat once the group fills'},
			{value: 'Verified', label: 'Local partners, pre-matched'},
			{value: 'Reputation', label: 'That compounds across trips'},
		],
		discussions: [
			{
				question: 'What can members do on Quiet Summit?',
				answers: [
					'Create and host small-group journeys with verified local support',
					'Build a public profile that grows with every completed trip',
					'Collaborate with fellow members during the private beta window',
				],
			},
			{
				question: 'What is required to onboard as a member?',
				answers: [
					'Share basic profile details and your intent to host',
					'Complete verification when invited by the onboarding team',
					'Commit to our safety, community, and service standards',
				],
			},
			{
				question: 'How do the member rewards work?',
				answers: [
					'Founding members keep founder-tier status for life',
					'Once your trip fills the minimum group size, your seat is free',
					'Referral rewards and loyalty tiers unlock at launch',
				],
			},
		],
	},
	guide: {
		label: 'Guide',
		eyebrow: 'For guides',
		title: 'Reach travellers who value your craft.',
		subtitle:
			'Guide onboarding is designed for professionals who want qualified demand, transparent payouts, and a trusted profile layer — not another race-to-the-bottom marketplace.',
		highlights: [
			'Show expertise through region, language, and specialty filters',
			'Receive role-matched inquiries — only serious travellers reach you',
			'Transparent payout structure, no hidden commission',
		],
		metrics: [
			{value: 'Transparent', label: 'Payouts, plainly stated'},
			{value: 'Qualified', label: 'Inquiries, never cold'},
			{value: 'Verified', label: 'Trust that travels with you'},
		],
		discussions: [
			{
				question: 'What can guides do on Quiet Summit?',
				answers: [
					'Create a professional profile with regions, languages, and specialties',
					'Manage availability and collaborate with member-led journeys',
					'Build a public trust layer through consistent delivery',
				],
			},
			{
				question: 'What is required for guide onboarding?',
				answers: [
					'Submit identity and professional details accurately',
					'Share relevant certifications and proof of experience',
					'Commit to response time and service quality expectations',
				],
			},
			{
				question: 'How do payouts work?',
				answers: [
					'Payout rules are visible upfront — no hidden deductions',
					'Early guides receive launch-priority communication',
					'Consistent delivery improves long-term inbound quality',
				],
			},
		],
	},
	'homestay-owner': {
		label: 'Homestay Owner',
		eyebrow: 'For homestay owners',
		title: 'Host at your own rhythm.',
		subtitle:
			'List your home with structured setup, control seasonality, and host travellers who come for silence. Clear settlements. Clear expectations. Nothing more.',
		highlights: [
			'List property, rooms, and seasonal availability in one flow',
			'Host travellers who arrive with intention, not checklists',
			'Clear settlements with predictable, on-time payouts',
		],
		metrics: [
			{value: 'Clear', label: 'Settlements, always on time'},
			{value: 'Verified', label: 'Guests, vetted before arrival'},
			{value: 'Flexible', label: 'Seasonality, on your terms'},
		],
		discussions: [
			{
				question: 'What can homestay owners do on Quiet Summit?',
				answers: [
					'Set up property, rooms, and seasonal availability in one flow',
					'Host verified members and travellers who value your space',
					'Grow through consistent quality, not volume discounting',
				],
			},
			{
				question: 'What is required for owner onboarding?',
				answers: [
					'Share ownership or lease proof and property identity',
					'Provide clear room information and quality visuals',
					'Follow guest experience and hosting standards',
				],
			},
			{
				question: 'How do settlements work?',
				answers: [
					'Settlement visibility is designed to stay predictable',
					'Early owners receive launch spotlight and priority',
					'Quality hosting improves repeat trust and role growth',
				],
			},
		],
	},
};
