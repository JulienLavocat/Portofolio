import React from "react";
import ReactDOM from "react-dom";

import Navigation from "./components/Navigation";
import Greetings from "./containers/Greetings";
import Skills from "./containers/Skills";
import Proficiency from "./containers/Proficiency";
import Education from "./containers/Education";
import Experience from "./containers/Experience";
import Projects from "./containers/Projects";
import GithubProfile from "./containers/GithubProfile";
import Feedbacks from "./containers/Feedbacks";
import ReactGA from "react-ga";

import "./assets/vendor/nucleo/css/nucleo.css";
import "./assets/vendor/font-awesome/css/font-awesome.min.css";
import "./assets/css/argon-design-system-react.css";

ReactGA.initialize("G-9Y1THP47SV");

ReactDOM.render(
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
	</>,
	document.getElementById("root")
);
