export const navLinks = [
	{label: 'User Experience', href: '/roles/user'},
	{label: 'Member', href: '/roles/member'},
	{label: 'Guide', href: '/roles/guide'},
	{label: 'Homestay Owner', href: '/roles/homestay-owner'},
	{label: 'Get In Touch', href: '#register'},
];

export const heroContent = {
	badge: 'Pre-Launch Experience',
	headline: 'User Experience First For Trusted Mountain Travel',
	subtext:
		'Quiet Summit is designed to feel calm, transparent, and reliable from the first screen. You see verified options, clear expectations, and role-specific onboarding before launch.',
	primaryCta: 'Register For Early Access',
	secondaryCta: 'See Role Experience',
	trustPoints: [
		'Fixed background storytelling for a premium feel',
		'Short, role-based product clarity without noise',
		'Trust-first onboarding with direct team follow-up',
	],
};

export const roleExperiences = [
	{
		id: 'member-experience',
		icon: 'Users',
		role: 'Member Experience',
		comingSoon: 'Coming Soon',
		summary:
			'Discover and join verified journeys with a cleaner planning flow and confidence-first support.',
		canDo: [
			'Browse verified journeys, guides, and homestays in one flow',
			'Get priority updates for early departures and limited slots',
			'Join a trusted member circle before public launch',
		],
		requirements: [
			'Complete basic profile details and contact information',
			'Finish verification when invited for full activation',
			'Agree to community and safety standards',
		],
		earnings: [
			'Referral and loyalty rewards start with launch programs',
			'Early members receive founder-tier launch benefits',
		],
	},
	{
		id: 'guide-experience',
		icon: 'Compass',
		role: 'Guide Experience',
		comingSoon: 'Coming Soon',
		summary:
			'Show your expertise, manage your availability, and grow with a verified audience from day one.',
		canDo: [
			'Build a profile with region, language, and trek specialities',
			'Receive role-matched inquiries based on availability',
			'Participate in curated launch cohorts for visibility',
		],
		requirements: [
			'Provide ID and core professional details',
			'Share experience and relevant certifications',
			'Commit to service quality and response timelines',
		],
		earnings: [
			'Transparent payout structure with clear commission rules',
			'Early guides receive launch-priority onboarding rewards',
		],
	},
	{
		id: 'owner-experience',
		icon: 'Home',
		role: 'Homestay Owner Experience',
		comingSoon: 'Coming Soon',
		summary:
			'List your property with trust signals, control pricing, and onboard to quality travelers faster.',
		canDo: [
			'Set up property, room, and seasonal availability details',
			'Get structured onboarding support before launch',
			'Build trust through verified presentation and quality cues',
		],
		requirements: [
			'Share ownership or lease proof and property identity details',
			'Provide clear property photos and room information',
			'Accept guest experience and hosting standards',
		],
		earnings: [
			'Clear settlement visibility with no hidden steps',
			'Early owners receive launch spotlight and onboarding rewards',
		],
	},
];

export const roleRouteOrder = ['user', 'member', 'guide', 'homestay-owner'];

export const roleDiscussionRoutes = {
	user: {
		label: 'User Experience',
		eyebrow: 'Role Discussion',
		title: 'Planning as a User Before You Join as a Partner',
		subtitle:
			'Users discover verified routes, compare trusted people, and decide with clarity before booking.',
		highlights: [
			'Discover verified journeys with transparent details',
			'Compare guides and homestays in one trusted flow',
			'Join early launches and priority announcements',
		],
		metrics: [
			{value: 'Clear', label: 'Pricing And Trip Expectations'},
			{value: 'Verified', label: 'Guides And Homestays First'},
			{value: 'Fast', label: 'Role-Based Onboarding Response'},
		],
		discussions: [
			{
				question: 'What can users do right now?',
				answers: [
					'Browse trusted journeys, guides, and homestays in one place',
					'Register early and receive launch updates before public release',
					'Understand role benefits before becoming a member, guide, or owner',
				],
			},
			{
				question: 'Why is this better than random listings?',
				answers: [
					'Profiles are built with verification-first trust signals',
					'Product flow is designed to remove confusion and hidden terms',
					'Launch communication is direct and role-aware, not spam-driven',
				],
			},
			{
				question: 'What if I want to become a role partner?',
				answers: [
					'Select your role in the registration form and share basic details',
					'Our team contacts you for role-specific onboarding requirements',
					'Early applicants get founder-priority communication and rewards',
				],
			},
		],
	},
	member: {
		label: 'Member Experience',
		eyebrow: 'Role Discussion',
		title: 'How Members Lead Journeys With Confidence',
		subtitle:
			'Member flow is built for people who want to host trusted journeys and build a credible profile over time.',
		highlights: [
			'Lead verified journeys and grow your public reputation',
			'Access trusted guide and homestay networks before listing',
			'Unlock launch-stage rewards and long-term growth signals',
		],
		metrics: [
			{value: 'Rs 0', label: 'Trip Cost After Group Fills'},
			{value: 'Trust', label: 'QS Verified Member Presence'},
			{value: 'Growth', label: 'Karma Score And Reward Tiers'},
		],
		discussions: [
			{
				question: 'What can members do on Quiet Summit?',
				answers: [
					'Create and host journeys with verified local support',
					'Build credibility with ratings, profile quality, and consistency',
					'Access members-only planning collaboration before public launch',
				],
			},
			{
				question: 'What is required for member onboarding?',
				answers: [
					'Share basic profile, contact details, and role intent clearly',
					'Complete verification when invited by the onboarding team',
					'Follow journey safety, community, and service quality standards',
				],
			},
			{
				question: 'How do member rewards work?',
				answers: [
					'Early members get founder-level onboarding priority and visibility',
					'Referral and loyalty rewards are tied to launch program rules',
					'Long-term reputation growth unlocks stronger future opportunities',
				],
			},
		],
	},
	guide: {
		label: 'Guide Experience',
		eyebrow: 'Role Discussion',
		title: 'How Guides Grow With Verified Demand',
		subtitle:
			'Guide onboarding is designed for professionals who want quality leads, transparent payouts, and a trusted profile layer.',
		highlights: [
			'Show expertise through structured profile and specialties',
			'Receive role-matched opportunities with transparent expectations',
			'Join early cohorts for visibility during launch phase',
		],
		metrics: [
			{value: 'Transparent', label: 'Payout Structure And Rules'},
			{value: 'Qualified', label: 'Role-Matched Inquiries'},
			{value: 'Early', label: 'Launch Cohort Visibility'},
		],
		discussions: [
			{
				question: 'What can guides do on Quiet Summit?',
				answers: [
					'Create a professional profile with region, language, and trek focus',
					'Manage availability and collaborate with verified member journeys',
					'Build trusted public proof through consistent delivery quality',
				],
			},
			{
				question: 'What is required for guide onboarding?',
				answers: [
					'Submit identity and core professional details accurately',
					'Share relevant experience, certifications, and service standards',
					'Commit to response timelines and partner quality expectations',
				],
			},
			{
				question: 'How do guide rewards and payouts work?',
				answers: [
					'Payout visibility is clear with no hidden settlement steps',
					'Early guides receive launch-priority onboarding communication',
					'High-trust delivery improves long-term inbound opportunity quality',
				],
			},
		],
	},
	'homestay-owner': {
		label: 'Homestay Owner Experience',
		eyebrow: 'Role Discussion',
		title: 'How Homestay Owners Onboard for Trusted Stays',
		subtitle:
			'Owners get a structured setup for listing quality spaces, controlling seasonality, and collaborating with verified travelers.',
		highlights: [
			'List property and room details with quality trust markers',
			'Control availability and seasonal setup before public launch',
			'Get guided onboarding support and trusted booking exposure',
		],
		metrics: [
			{value: 'Clear', label: 'Settlement And Listing Steps'},
			{value: 'Verified', label: 'Trust-First Property Presentation'},
			{value: 'Launch', label: 'Spotlight For Early Owners'},
		],
		discussions: [
			{
				question: 'What can homestay owners do on Quiet Summit?',
				answers: [
					'Set up property, room, and seasonal availability in one flow',
					'Collaborate with verified members and guides for quality trips',
					'Build stronger trust through structured listing standards',
				],
			},
			{
				question: 'What is required for owner onboarding?',
				answers: [
					'Share ownership or lease proof and property identity details',
					'Provide clear room information and quality visual presentation',
					'Follow guest experience and hosting quality commitments',
				],
			},
			{
				question: 'How do owner rewards and settlements work?',
				answers: [
					'Settlement visibility is designed to remain clear and predictable',
					'Early owners receive launch communication and spotlight priority',
					'High-quality hosting improves repeat trust and role growth',
				],
			},
		],
	},
};

export const launchRewards = [
	{
		title: 'Register Before Launch',
		description:
			'Share your role and contact details once. Our team shortlists early partners for a priority onboarding batch.',
	},
	{
		title: 'Get Verified And Matched',
		description:
			'Members, guides, and homestay owners receive role-specific verification and onboarding guidance.',
	},
	{
		title: 'Unlock Founder Rewards',
		description:
			'Early registrants receive launch rewards and priority communication as trust partners of Quiet Summit.',
	},
];

export const finalCta = {
	title: 'Register Early For Member, Guide, Or Owner Onboarding',
	description:
		'Fill in your details once and our team will contact you for role-based onboarding. This pre-launch list is built for serious early partners only.',
	buttonText: 'Submit Registration',
};
