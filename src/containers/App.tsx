import React, { useEffect } from "react";

import ReactGA from "react-ga";
import Navigation from "../components/Navigation";
import GithubProfile from "./GithubProfile";
import Greetings from "./Greetings";
import Proficiency from "./Proficiency";
import Projects from "./Projects";
import Skills from "./Skills";
import Education from "./Education";

export default function App() {
	useEffect(() => {
		ReactGA.initialize("UA-47273822-5");
		ReactGA.pageview("portofolio");
		return () => {};
	}, []);

	return (
		<>
			<Navigation />
			<Greetings />
			<Skills />
			<Proficiency />
			<Projects />
			<Education />
			{/* <Experience /> */}
			{/* <Feedbacks /> */}
			<GithubProfile />
		</>
	);
}
