import { Card, CardBody, CardFooter, CardTitle } from "./Card";
import StaggeredFadeIn from "./StaggeredFadeIn";
import { FaGithub, FaYoutube } from "react-icons/fa6";
import { HiOutlineNewspaper } from "react-icons/hi2";

import type React from "react";

interface ProjectsProps {
    projects: {
        title: string;
        description: string;
        href?: string;
        github?: string;
        youtube?: string;
        researchPaper?: string;
    }[];
}

function Projects({ projects }: ProjectsProps) {
    return (
        <section id="projects" className="relative">
            <StaggeredFadeIn className="z-40 my-2 max-sm:bg-base/80 max-sm:sticky top-0 w-full lg:block py-4 bg-transparent max-sm:backdrop-blur-sm">
                <h2 className="max-sm:text-sm max-sm:uppercase max-sm:tracking-wide">
                    Projects
                </h2>
            </StaggeredFadeIn>
            <StaggeredFadeIn>
                {/* <h2 className="sticky top-0 lg:block my-8">Projects</h2> */}
                <StaggeredFadeIn className="space-y-4">
                    {projects.map((project, i) => (
                        <ProjectItem
                            key={i}
                            title={project.title}
                            description={project.description}
                            href={project.href}
                            github={project.github}
                            youtube={project.youtube}
                        />
                    ))}
                </StaggeredFadeIn>
            </StaggeredFadeIn>
        </section>
    );
}

interface ProjectItemProps {
    title: string;
    description: string;
    href?: string;
    github?: string;
    youtube?: string;
    researchPaper?: string;
}

const ProjectItem: React.FC<ProjectItemProps> = (
    { href, title, description, github, youtube, researchPaper },
) => {
    return (
        <Card href={href ?? github ?? youtube ?? ""}>
            <CardTitle>
                {title}
            </CardTitle>
            <CardBody>
                {description}
            </CardBody>
            <CardFooter>
                <StaggeredFadeIn
                    className="flex gap-x-5"
                    delay={0.05}
                >
                    {github &&
                        (
                            <a
                                href={github}
                                target="_blank"
                                aria-label="Link to the GitHub repository"
                            >
                                <FaGithub
                                    className="h-6 w-6 opacity-75 hover:opacity-100"
                                    title="GitHub"
                                />
                            </a>
                        )}
                    {youtube &&
                        (
                            <a
                                href={youtube}
                                target="_blank"
                                aria-label="Link to the demo on YouTube"
                            >
                                <FaYoutube
                                    className="h-6 w-6 opacity-75 hover:opacity-100"
                                    title="YouTube"
                                />
                            </a>
                        )}
                    {researchPaper &&
                        (
                            <a
                                href={researchPaper}
                                target="_blank"
                                aria-label="Link to the research paper"
                            >
                                <HiOutlineNewspaper
                                    className="h-6 w-6 opacity-75 hover:opacity-100"
                                    title="Research Paper"
                                />
                            </a>
                        )}
                </StaggeredFadeIn>
            </CardFooter>
        </Card>
    );
};

export default Projects;
