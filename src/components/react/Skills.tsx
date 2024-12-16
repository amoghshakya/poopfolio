import {
    FaCss3,
    FaGit,
    FaHtml5,
    FaJava,
    FaJs,
    FaPython,
    FaReact,
} from "react-icons/fa6";
import StaggeredFadeIn from "./StaggeredFadeIn";
import {
    SiAstro,
    SiDjango,
    SiFlask,
    SiFramer,
    SiGnubash,
    SiJupyter,
    SiLinux, SiNextdotjs,
    SiNumpy,
    SiPandas,
    SiPrisma,
    SiScikitlearn,
    SiTailwindcss
} from "react-icons/si";

const Skills: React.FC = () => {
    return (
        <section id="skills" className="relative">
            <StaggeredFadeIn className="z-40 my-2 max-sm:bg-base/80 max-sm:sticky top-0 w-full lg:block py-4 bg-transparent max-sm:backdrop-blur-sm">
                <h2 className="max-sm:text-sm max-sm:uppercase max-sm:tracking-wide">
                    Skills
                </h2>
            </StaggeredFadeIn>
            <StaggeredFadeIn className="space-y-4">
                <StaggeredFadeIn
                    className="grid grid-cols-6 gap-4 max-sm:grid-cols-4"
                    delay={0.1}
                    duration={0.6}
                >
                    <FaHtml5 className="h-16 w-16" />
                    <FaCss3 className="h-16 w-16" />
                    <FaJs className="h-16 w-16" />
                    <FaReact className="h-16 w-16" />
                    <SiTailwindcss className="h-16 w-16" />
                    <SiNextdotjs className="h-16 w-16" />
                    <SiAstro className="h-16 w-16" />
                    <SiFramer className="h-16 w-16" />
                    <SiPrisma className="h-16 w-16" />
                    <SiGnubash className="h-16 w-16" />
                    <FaPython className="h-16 w-16" />
                    <SiFlask className="h-16 w-16" />
                    <SiDjango className="h-16 w-16" />
                    <SiNumpy className="h-16 w-16" />
                    <SiPandas className="h-16 w-16" />
                    <SiScikitlearn className="h-16 w-16" />
                    <SiJupyter className="h-16 w-16" />
                    <FaJava className="h-16 w-16" />

                    <SiLinux className="h-16 w-16" />
                    <FaGit className="h-16 w-16" />
                </StaggeredFadeIn>
            </StaggeredFadeIn>
        </section>
    );
};

export default Skills;
