import { Button, Highlight } from "@/components/button";
import { Container } from "@/components/container";
import { Hero, HeroSubtitle, HeroTitle } from "@/components/hero";
import { HeroImage } from "@/components/hero-image";
import { ChevronIcon } from "@/components/icons/chevron";
import { StarsIllustration } from "@/components/icons/stars";
import { Clients } from "@/components/sections/clients";
import classNames from "classnames";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<div className="overflow-hidden pb-[16.4rem] md:pb-[25.6rem]">
				<Container className="pt-[6.4rem]">
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
			</div>
			<Container>
				<Clients />
			</Container>
			<div
				className={classNames(
					"mask-radial-faded pointer-events-none relative z-[-1] my-[-12.8rem] h-[60rem] overflow-hidden",
					"[--color:#7877C6] before:absolute before:inset-0 before:bg-radial-faded before:opacity-[0.4]",
					"after:absolute after:top-1/2 after:-left-1/2 after:h-[142.8%] after:w-[200%] after:rounded-[50%] after:border-t after:border-[rgba(120,_119,_198,_0.4)] after:bg-background",
				)}
			>
				<StarsIllustration />
			</div>
		</>
	);
}
