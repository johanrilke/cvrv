import { Button, Highlight } from "@/components/button";
import { Container } from "@/components/container";
import { Hero, HeroSubtitle, HeroTitle } from "@/components/hero";
import { HeroImage } from "@/components/hero-image";
import { ChevronIcon } from "@/components/icons/chevron";
import Image from "next/image";

export default function Home() {
	return (
		<Container className=" pb-[16.4rem] md:pb-[25.6rem]">
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
		</Container>
	);
}
