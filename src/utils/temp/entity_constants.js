/*
 * ===============================
 * Navigation
 * ===============================
 */

export const navigationLinks = [
	{
		id: 1,
		title: "Homepage",
		path: "/",
	},
	{
		id: 2,
		title: "About Us",
		path: "/about-us",
	},
	{
		id: 3,
		title: "Features",
		path: "/features",
	},
	{
		id: 4,
		title: "Gallery",
		path: "/image-gallery",
	},
	{
		id: 5,
		title: "Contact",
		path: "/contact-us",
	},
];

/*
 * ===============================
 * Home
 * ===============================
 */

export const HomeResponse = {
	id: 4,
	miniTitle: "Since 1989",
	title: "Barman's Website",
	subtitle: "Cocktails & Vins",
	text: "@instagram",
	button: {
		id: 4,
		buttonUrl: "/features",
		buttonTitle: "View Soirées!",
	},
	images: [
		{
			id: 4,
			imageUrl:
				"https://barmanwebsite.s3.amazonaws.com/1675883010681_HomeBG.jpg",
			imageName: "HomeBG.jpg",
		},
	],
};

/*
 * ===============================
 * AboutUs
 * ===============================
 */

export const AboutUsPage = {
	id: 2,
	subtitle: "Nyu's Bar",
	title: "Our History",
	paragraph1:
		"Lorem ipsum dolor sit amet LoLorem ipsum dolor sit amet Lorem ipsum dolor sit amet rem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, ex?",
	paragraph2:
		"Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, et?",
	ctaTitle: "Reservation",
	ctaInfo: "+41 00 000 00 00",
	pageHeader: {
		id: 2,
		header: "ABOUT US",
		subtitle: "Nyu's Bartending",
		title: "Our History",
		image: {
			id: 2,
			imageUrl: "https://barmanwebsite.s3.amazonaws.com/1674177958982_bar.jpg",
			imageName: "HomeBG.jpg",
			imageAwsName: "1675795788214_HomeBG.jpg",
		},
	},
	images: [
		{
			id: 2,
			imageUrl:
				"https://barmanwebsite.s3.amazonaws.com/1675696651878_AboutUsBG.jpg",
			imageName: "HomeBG.jpg",
			imageAwsName: "1675795788214_HomeBG.jpg",
		},
		{
			id: 3,
			imageUrl:
				"https://barmanwebsite.s3.amazonaws.com/1675696651878_AboutUsBG.jpg",
			imageName: "HomeBG.jpg",
			imageAwsName: "1675795788214_HomeBG.jpg",
		},
	],
};

/*
 * ===============================
 * OwnerPage
 * ===============================
 */

export const OwnerPage = {
	id: 2,
	subtitle: "20 Year Experience",
	title: "Kevin Maurin",
	paragraph1:
		"Lorem ipsum dolor sit amet cLorem ipsum dolor sit amet coonsectetur adiLorem ipsum dolor sit amet copisicing elit. Itaque earum veritatis ipsam magnam labore dicta. Porro ex eligendi quam repellat?",
	name: "Kevin Maurin",
	position: "Jefe De Jefes",
	pageHeader: {
		id: 2,
		header: "OWNER PAGE",
		subtitle: "Kevin Maurin",
		title: "Nyu's",
		image: {
			id: 2,
			imageUrl: "https://barmanwebsite.s3.amazonaws.com/1674177958982_bar.jpg",
			imageName: "HomeBG.jpg",
			imageAwsName: "1675795788214_HomeBG.jpg",
		},
	},
	image: {
		id: 2,
		imageUrl:
			"https://barmanwebsite.s3.amazonaws.com/1674762497313_HomeBG2.jpg",
		imageName: "HomeBG.jpg",
		imageAwsName: "1675795788214_HomeBG.jpg",
	},
};
/*
 * ===============================
 * FeaturesPage
 * ===============================
 */

export const FeaturesPage = {
	id: 1,
	pageHeader: {
		id: 2,
		header: "THE BEST",
		subtitle: "Soirées Thématiques!",
		title: "Cocktail's & Vins",
		image: {
			id: 2,
			imageUrl: "https://barmanwebsite.s3.amazonaws.com/1674177958982_bar.jpg",
			imageName: "HomeBG.jpg",
			imageAwsName: "1675795788214_HomeBG.jpg",
		},
	},
	features: [
		{
			id: 1,
			title: "Mojito Party",
			subtitle: "",
			description:
				" Pouvant aller du Mijito classique à ceux revisité aux fruits, sans alcools, épicés etc... Simple mais bon et efficaces",
			image: {
				id: 1,
				imageUrl: "https://nyus.netlify.app/static/media/mojito2.2196cf29.jpg",
				imageName: "",
				imageAwsName: "",
			},
		},
		{
			id: 2,
			title: "Soirée Cuba",
			subtitle: "",
			description:
				"Essayez les classiques Cubain avec le Mojito, Daïquiri ou encore le Cuba Libre.",
			image: {
				id: 2,
				imageUrl: "https://nyus.netlify.app/static/media/mojito3.de42a4bd.jpg",
				imageName: "",
				imageAwsName: "",
			},
		},
		{
			id: 3,
			title: "Soirée Tiki",
			subtitle: "",
			description:
				"Sans oublier l’incontournable Zombie, d’autres cocktails dans cet esprit festif viendrons apporter chaleur et exotisme à vos soirée. Dress code obligatoire (chapeau de paille, short, chemise de vacances, collier à fleur…)!",
			image: {
				id: 3,
				imageUrl:
					"https://nyus.netlify.app/static/media/mixologyfire1.8d5af977.jpg",
				imageName: "",
				imageAwsName: "",
			},
		},
		{
			id: 4,
			title: "Soirée Fancy",
			subtitle: "",
			description:
				"Au programme les « fancy drinks » ou encore « cocktails de femmes » (que de noms en vérité) tels que le cosmopolitain, le sex on the beach, le pink/white lady, Tequila sunrise…",
			image: {
				id: 4,
				imageUrl:
					"https://nyus.netlify.app/static/media/sexonthebeach1.7e816e61.jpg",
				imageName: "",
				imageAwsName: "",
			},
		},
		{
			id: 5,
			title: "Soirée Classic Spirit",
			subtitle: "",
			description:
				"Choisissez votre spiritueux favori et nous concocterons les classiques incontournables autour de celui-ci.",
			image: {
				id: 5,
				imageUrl: "https://nyus.netlify.app/static/media/events1.cb1b903f.jpg",
				imageName: "",
				imageAwsName: "",
			},
		},
		{
			id: 6,
			title: "Soirée Like a Virgin !",
			subtitle: "",
			description:
				"Un super menu de cocktail sans alcool superbement élaboré à partir de la gamme « Seed Lip » pour tous les goûts, petit et grand !",
			image: {
				id: 6,
				imageUrl:
					"https://nyus.netlify.app/static/media/cocktail1.08f9a7c5.jpg",
				imageName: "",
				imageAwsName: "",
			},
		},
	],
};

/*
 * ===============================
 * ContactPage
 * ===============================
 */

export const ContactPage = {
	id: 2,
	address: "288 Chemin de la Ramasse",
	mobile: "+41 79 400 22 22",
	email: "email@email.com",
	facebook: "/facebook",
	instagram: "/insta",
	twitter: "twitter",
	youtube: "youtube",
	formTitle: "Get in Touch!",
	formSubtitle: "Kevin Maurin",
	formParagraph:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore repellendus facilis sed.",
	formAction: "/formspreeUrl",
	pageHeader: {
		id: 2,
		header: "CONTACT US",
		subtitle: "Reservations",
		title: "Geneve Suisse",
		image: {
			id: 2,
			imageUrl: "https://barmanwebsite.s3.amazonaws.com/1674177958982_bar.jpg",
			imageName: "HomeBG.jpg",
			imageAwsName: "1675795788214_HomeBG.jpg",
		},
	},
};
