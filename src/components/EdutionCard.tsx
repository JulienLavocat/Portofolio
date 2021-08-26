import React from "react";
import { Card, CardBody, Badge } from "reactstrap";

import { Fade } from "react-reveal";

export type EducationCardProps = {
	schoolName: string;
	subHeader: string;
	duration: string;
	desc: string;
	descBullets?: string[];
};

export default function EdutionCard({
	schoolName,
	desc,
	descBullets,
	duration,
	subHeader,
}: EducationCardProps) {
	return (
		<Fade right duration={1000} distance="40px">
			<Card className="card-lift--hover shadow mt-4">
				<CardBody>
					<div className="d-flex px-3">
						<div className="pl-4">
							<h5 className="text-info">{schoolName}</h5>
							<h6>{subHeader}</h6>
							<Badge color="info" className="mr-1">
								{duration}
							</Badge>
							<p className="description mt-3">{desc}</p>
							<ul>
								{descBullets
									? descBullets.map((desc) => {
											return <li key={desc}>{desc}</li>;
									  })
									: null}
							</ul>
						</div>
					</div>
				</CardBody>
			</Card>
		</Fade>
	);
}
