import React, { Fragment } from "react";

import { Fade } from "react-reveal";
import DisplayLottie from "../components/DisplayLottie";
import webdev from "../assets/lottie/code-typing.json";

import { Container, Row, Col, UncontrolledTooltip } from "reactstrap";

import { skillsSection } from "../portfolio";

const Skills = () => {
	return (
		<Fade left duration={1000} distance="40px">
			<Container className="text-center my-5 section section-lg">
				<h1 className="h1">{skillsSection.title}</h1>
				<p className="lead">{skillsSection.subTitle}</p>
				<Row className="mb-5">
					<Col lg="6">
						<DisplayLottie animationData={webdev} />
					</Col>
					<Col
						lg="6"
						className="d-flex justify-content-center flex-wrap align-self-center">
						<div className="">
							{skillsSection.skills.map((skill) => {
								return <p key={skill.key}>{skill}</p>;
							})}
						</div>
					</Col>
				</Row>

				<Row className="d-flex">
					{/* <Col lg={2}></Col> */}
					<Col>
						{Object.entries(skillsSection.softwareSkills).map(
							([category, content]) => (
								<Row key={category} className="d-flex mb-4">
									<Col
										lg="2"
										className="d-flex align-self-center">
										{category}
									</Col>
									<Col className="d-flex align-self-center align-items-center">
										{content.map((skill) => (
											<Fragment key={skill.skillName}>
												<div
													className="icon icon-lg icon-shape shadow rounded-circle my-auto mx-1"
													id={skill.skillName}>
													<span
														className="iconify"
														data-icon={
															skill.fontAwesomeClassname
														}
														data-inline="false"></span>
												</div>
												<UncontrolledTooltip
													delay={0}
													placement="bottom"
													target={skill.skillName}>
													{skill.skillName}
												</UncontrolledTooltip>
											</Fragment>
										))}
									</Col>
								</Row>
							)
						)}
					</Col>
				</Row>

				{/* <Row>
					{skillsSection.softwareSkills.map((skill) => {
						return (
							<Fragment key={skill.skillName}>
								<div
									className="icon icon-lg icon-shape shadow rounded-circle mb-5"
									id={skill.skillName}>
									<span
										className="iconify"
										data-icon={skill.fontAwesomeClassname}
										data-inline="false"></span>
								</div>
								<UncontrolledTooltip
									delay={0}
									placement="bottom"
									target={skill.skillName}>
									{skill.skillName}
								</UncontrolledTooltip>
							</Fragment>
						);
					})}
				</Row> */}
			</Container>
		</Fade>
	);
};

export default Skills;
