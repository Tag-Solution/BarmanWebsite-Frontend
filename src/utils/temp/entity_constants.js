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
	id: 2,
	date: "Since 1989",
	title: "Barman's Website",
	subtitle: "Cocktails & Vins",
	direction: "@instagram",

	// OLD VERSION
	buttonResponse: {
		id: 2,
		url: "/features",
		title: "View Soirées!",
	},
	imageResponses: [
		{
			id: 2,
			fileUrl:
				"https://barmanwebsite.s3.amazonaws.com/1675795788214_HomeBG.jpg",
			name: "1675795788214_HomeBG.jpg",
		},
	],

	// EXPECTED
	button: {
		id: 2,
		buttonUrl: "/features",
		buttonTitle: "View Soirées!",
	},
	images: [
		{
			id: 2,
			imageUrl:
				"https://barmanwebsite.s3.amazonaws.com/1675795788214_HomeBG.jpg",
			imageName: "HomeBG.jpg",
			imageAwsName: "1675795788214_HomeBG.jpg",
		},
	],
};

/*
 * ===============================
 * AboutUs
 * ===============================
 */

export const AboutUs = {};
