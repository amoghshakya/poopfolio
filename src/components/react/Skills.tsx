import StaggeredFadeIn from "./StaggeredFadeIn";

const Skills: React.FC = () => {
    return (
        <section id="skills" className="relative">
            <StaggeredFadeIn className="z-40 my-2 max-sm:bg-base/80 max-sm:sticky top-0 w-full lg:block py-4 bg-transparent max-sm:backdrop-blur-sm">
                <h2 className="max-sm:text-sm max-sm:uppercase max-sm:tracking-wide">
                    Skills
                </h2>
            </StaggeredFadeIn>
            <StaggeredFadeIn>
                <ul>
                    <StaggeredFadeIn>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>Python</li>
                    </StaggeredFadeIn>
                </ul>
            </StaggeredFadeIn>
        </section>
    );
};

export default Skills;
