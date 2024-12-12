import { HiArrowUpRight } from "react-icons/hi2";
import { Card, CardBody, CardFooter, CardTitle } from "./Card";
import StaggeredFadeIn from "./StaggeredFadeIn";
import { FaGithub, FaYoutube } from "react-icons/fa6";

function Projects() {
    return (
        <section id="projects" className="relative">
            <StaggeredFadeIn>
                <h2 className="sticky top-0 lg:block my-8">Projects</h2>
                <StaggeredFadeIn className="space-y-4">
                    <Card href="https://youtu.be/oz0KJD5Y2GQ">
                        <CardTitle>
                            SikshaYatri
                        </CardTitle>
                        <CardBody>
                            Developed a demo e-learning platform web app using
                            Next.js and PostgreSQL for my sophomore year
                            Software Engineering coursework. Used Prisma ORM and
                            Neon for database and <code>next-auth</code>{" "}
                            for authentication.
                        </CardBody>
                        <CardFooter>
                            <StaggeredFadeIn
                                className="flex gap-x-5"
                                delay={0.05}
                            >
                                <a
                                    href="https://github.com/amoghshakya/e-learning-platform"
                                    target="_blank"
                                    aria-label="Link to the GitHub repository"
                                >
                                    <FaGithub
                                        className="h-6 w-6 opacity-75 hover:opacity-100"
                                        title="GitHub"
                                    />
                                </a>
                                <a
                                    href="https://youtu.be/oz0KJD5Y2GQ"
                                    target="_blank"
                                    aria-label="Link to the demo on YouTube"
                                >
                                    <FaYoutube
                                        className="h-6 w-6 opacity-75 hover:opacity-100"
                                        title="YouTube"
                                    />
                                </a>
                            </StaggeredFadeIn>
                        </CardFooter>
                    </Card>
                </StaggeredFadeIn>
            </StaggeredFadeIn>
        </section>
    );
}

export default Projects;
