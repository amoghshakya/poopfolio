import React from "react";
import StaggeredFadeIn from "./StaggeredFadeIn";

const About: React.FC = () => {
    return (
        <section id="about" className="py-12 md:py-28">
            <StaggeredFadeIn className="z-40 my-2 max-sm:bg-base/80 max-sm:sticky top-0 w-full lg:block py-4 bg-transparent max-sm:backdrop-blur-sm">
                <h2 className="max-sm:text-sm max-sm:uppercase max-sm:tracking-wide">
                    About me
                </h2>
            </StaggeredFadeIn>
            <StaggeredFadeIn>
                <p>
                    I am Amogh Shakya, a Computer Science student based in
                    Kathmandu, Nepal. I am passionate about software
                    development, particularly in web and frontend. More than
                    that, I love music. I love listening to music. I sometimes
                    play guitar. I love learning, whether it be new songs or new
                    technologies.
                </p>
                <p>
                    When I'm not immersed in code or learning about advanced
                    topics, I enjoy broadening my knowledge and perspectives
                    through various intellectual pursuits. My goal is to
                    continuously improve my skills, stay curious, and contribute
                    meaningfully to the tech community.
                </p>
            </StaggeredFadeIn>
        </section>
    );
};

export default About;
