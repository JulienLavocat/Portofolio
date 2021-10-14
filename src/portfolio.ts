import emoji from "react-easy-emoji";

import googlelogo from "./assets/img/icons/common/google.svg";
import github from "./assets/img/icons/common/github.svg";
import airbnb from "./assets/img/icons/common/airbnbLogo.png";

export const greetings = {
	name: "Julien Lavocat",
	title: "Hi, I'm Julien",
	description:
		"A motivated backend and occasionaly frontend developper who likes to overcome technical challenges. I also build cross platform mobile apps using Flutter.",
	resumeLink: "https://julienlavocat.me/resume",
};

export const openSource = {
	githubUserName: "JulienLavocat",
};

export const contact = {};

export const socialLinks = {
	facebook: "",
	instagram: "",
	twitter: "",
	medium: "https://medium.com/@julienlavocat",
	github: "https://github.com/JulienLavocat",
	linkedin: "https://www.linkedin.com/in/julienlavocat/",
};

export const skillsSection = {
	title: "What I do",
	subTitle: "Passionated developper who like to explore and learn new things",
	skills: [
		emoji(
			"⚡ Creating and managing backend architectures using modern technologies"
		),
		emoji(
			"⚡ Writting frontends that integrates seamlessly with any backend"
		),
		emoji(
			"⚡ Able to work with any third party services such as Firebase / AWS / OVHCloud / etc."
		),
	],

	softwareSkills: {
		Languages: [
			{
				skillName: "JavaScript",
				fontAwesomeClassname: "logos:javascript",
			},
			{
				skillName: "TypeScript",
				fontAwesomeClassname: "logos:typescript-icon",
			},
			{
				skillName: "Java",
				fontAwesomeClassname: "logos:java",
			},
			{
				skillName: "CSharp",
				fontAwesomeClassname: "vscode-icons:file-type-csharp",
			},
			{
				skillName: "Go",
				fontAwesomeClassname: "vscode-icons:file-type-go",
			},
			{
				skillName: "SQL",
				fontAwesomeClassname: "carbon:sql",
			},
			{
				skillName: "HTML5",
				fontAwesomeClassname: "vscode-icons:file-type-html",
			},
			{
				skillName: "CSS3",
				fontAwesomeClassname: "vscode-icons:file-type-css",
			},
			{
				skillName: "Python",
				fontAwesomeClassname: "logos:python",
			},
		],
		"Libraries and frameworks": [
			{
				skillName: "ReactJS",
				fontAwesomeClassname: "vscode-icons:file-type-reactjs",
			},
			{
				skillName: "NestJS",
				fontAwesomeClassname: "logos:nestjs",
			},
			{
				skillName: "Flutter",
				fontAwesomeClassname: "logos:flutter",
			},
			{
				skillName: "Unity",
				fontAwesomeClassname: "logos:unity",
			},
		],
		Tools: [
			{
				skillName: "NodeJS",
				fontAwesomeClassname: "logos:nodejs-icon",
			},
			{
				skillName: "Git",
				fontAwesomeClassname: "logos:git-icon",
			},
			{
				skillName: "Docker",
				fontAwesomeClassname: "logos:docker-icon",
			},
			{
				skillName: "Kubernetes",
				fontAwesomeClassname: "logos:kubernetes",
			},
		],
		Databases: [
			{
				skillName: "MongoDB",
				fontAwesomeClassname: "vscode-icons:file-type-mongo",
			},
			{
				skillName: "Redis",
				fontAwesomeClassname: "logos:redis",
			},
			{
				skillName: "PostgreSQL",
				fontAwesomeClassname: "logos:postgresql",
			},
			{
				skillName: "MariaDB",
				fontAwesomeClassname: "logos:mariadb-icon",
			},
		],
		Providers: [
			{
				skillName: "AWS",
				fontAwesomeClassname: "logos:aws",
			},
			{
				skillName: "Firebase",
				fontAwesomeClassname: "logos:firebase",
			},
			{
				skillName: "OVH",
				fontAwesomeClassname: "cib:ovh",
			},
			{
				skillName: "Scaleway",
				fontAwesomeClassname: "cib:scaleway",
			},
			{
				skillName: "GoogleCloudPlatform",
				fontAwesomeClassname: "logos:google-cloud",
			},
		],
	},
};

export const SkillBars = [
	{
		Stack: "Backend",
		progressPercentage: "80",
	},
	{
		Stack: "Frontend/Design",
		progressPercentage: "70",
	},
	{
		Stack: "Programming",
		progressPercentage: "80",
	},
];

export const educationInfo = [
	{
		schoolName: "Bordeaux University of Technology",
		subHeader: "Bachelor degree of biology",
		duration: "September 2020 - Present",
		desc: "",
		descBullets: [],
	},
	{
		schoolName: "Saint-Louis High School Bordeaux, France",
		subHeader:
			"Baccalauréat Laboratory Sciences and Technologies, Biotechnologies option",
		duration: "September 2015 - June 2018",
		desc: "Studied laboratory sciences and all the technologies related to the biotechnologies field, mainly biochemistry and microbiology",
		descBullets: [],
	},
];

export const experience = [
	// {
	// 	role: "Software Engineer",
	// 	company: "Google",
	// 	companylogo: googlelogo,
	// 	date: "June 2018 – Present",
	// 	desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
	// 	descBullets: [
	// 		"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
	// 		"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
	// 	],
	// }
];

export const projects = [
	{
		name: "JDR-LF",
		desc: "A Firebase-based webapp similar to Roll20 designed to play online tabletop role-playing game. Players have access to game rooms with chats channel, maps of the world and scenes",
		link: "https://jdr.julienlavocat.me/",
	},
	{
		name: "Indiebackend",
		desc: "A Backend-as-a-Service for game developpers providing player's statistics, serverless functions, payments, etc. Hosted on OVHCloud and using Kubernetes and microservices",
		link: "https://indiebackend.com",
		github: "https://github.com/Indiebackend",
	},
	{
		name: "Swindler",
		desc: "Small-scale 2D MMOG (500 players / server) in a piracy world where your main goal is to build your base on one of the proceduraly-generated islands and defend it against other player's raids. Client is made using Unity and backend is written in C# and UDP is used for networking",
		github: "https://github.com/Swindler-MMO",
	},
];

export const feedbacks = [
	{
		name: "Hassan Mehmood",
		feedback:
			"We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Hanzla tauqeer has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose hanzla web developer services for u.",
	},
	{
		name: "Maheen Altaf",
		feedback:
			"the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. i am using it without any problem. great job",
	},
];
