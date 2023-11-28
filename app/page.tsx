import { Container } from "@/components/container";
import { Hero, HeroSubtitle, HeroTitle } from "@/components/hero";
import Image from "next/image";

export default function Home() {
	return (
		<div>
			<Container>
				<header>header</header>
			</Container>
			<Container>
				<main>
					<Hero>
						<HeroTitle>
							Linear is a better way <br /> to build products
						</HeroTitle>
						<HeroSubtitle>
							Meet the new standard for modern software development. <br />{" "}
							Streamline issues, sprints, and product roadmaps
						</HeroSubtitle>
					</Hero>
				</main>
			</Container>
			<Container>
				<footer>footer</footer>
			</Container>
		</div>
	);
}
