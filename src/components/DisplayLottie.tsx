import React, { Suspense } from "react";
import Lottie, { Options } from "react-lottie";
import Loading from "./Loading";

const GreetingLottie = ({
	animationData,
	speed = 1,
}: {
	animationData: any;
	speed?: number;
}) => {
	const defaultOptions: Options = {
		loop: true,
		autoplay: true,
		animationData: animationData,
	};

	return (
		<Suspense fallback={<Loading />}>
			{/* To override default onClick pause by Lottie */}
			<div onClick={() => null}>
				<Lottie options={defaultOptions} speed={speed} />
			</div>
		</Suspense>
	);
};

export default GreetingLottie;
