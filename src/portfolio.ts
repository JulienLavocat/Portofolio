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

	softwareSkills: [
		{
			skillName: "html-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "css3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		{
			skillName: "sass",
			fontAwesomeClassname: "logos:sass",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		{
			skillName: "TypeScript",
			fontAwesomeClassname: "logos:typescript-icon",
		},
		{
			skillName: "reactjs",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "nodejs",
			fontAwesomeClassname: "logos:nodejs-icon",
		},
		{
			skillName: "flutter",
			fontAwesomeClassname: "logos:flutter",
		},
		{
			skillName: "swift",
			fontAwesomeClassname: "vscode-icons:file-type-swift",
		},
		{
			skillName: "npm",
			fontAwesomeClassname: "vscode-icons:file-type-npm",
		},
		{
			skillName: "sql-database",
			fontAwesomeClassname: "vscode-icons:file-type-sql",
		},
		{
			skillName: "mongoDB",
			fontAwesomeClassname: "vscode-icons:file-type-mongo",
		},
		{
			skillName: "aws",
			fontAwesomeClassname: "logos:aws",
		},
		{
			skillName: "firebase",
			fontAwesomeClassname: "logos:firebase",
		},
		{
			skillName: "python",
			fontAwesomeClassname: "logos:python",
		},
		{
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
		},
		{
			skillName: "docker",
			fontAwesomeClassname: "logos:docker-icon",
		},
	],
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
		desc: "A Firebase-based webapp similar to Roll20 designed to play online tabletop role-playing game. Players have access to game rooms with chats and maps of the world and scenes",
		link: "https://jdr.julienlavocat.me/",
	},
	{
		name: "Indiebackend",
		desc: "A Backend-as-a-Service for game developpers providing player's statistics, serverless functions, payments, etc. Hosted on OVHCloud and using Kubernetes and microservices",
		link: "https://indiebackend.com",
		github: "https://github.com/Indiebackend",
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
