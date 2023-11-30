import { Button, Highlight } from "../button";
import { Hero, HeroSubtitle, HeroTitle } from "../hero";
import { HeroImage } from "../hero-image";
import { ChevronIcon } from "../icons/chevron";

export default function HomepageHero() {
	return (
		<>
			<Hero>
				<Button
					href="/"
					variant="secondary"
					size="small"
					className="animate-fade-in opacity-0 translate-y-[1rem]"
				>
					Linear 2022 Release - Built for scale <Highlight>→ </Highlight>
				</Button>
				<HeroTitle className="animate-fade-in [--animation-delay:200ms] opacity-0 translate-y-[1rem]">
					Linear is a better way <br /> to build products
				</HeroTitle>
				<HeroSubtitle className="animate-fade-in [--animation-delay:400ms] opacity-0 translate-y-[1rem]">
					Meet the new standard for modern software development. <br />
					Streamline issues, sprints, and product roadmaps
				</HeroSubtitle>
				<Button
					href="/"
					variant="primary"
					size="large"
					className="animate-fade-in [--animation-delay:600ms] opacity-0 translate-y-[1rem]"
				>
					Get Started <ChevronIcon />
				</Button>
				<HeroImage />
			</Hero>
		</>
	);
}
