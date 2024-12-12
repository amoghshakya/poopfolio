import React from "react";
import StaggeredFadeIn from "./StaggeredFadeIn";

const About: React.FC = () => {
    return (
        <section id="about" className="relative py-12 md:py-28">
            <StaggeredFadeIn>
                <h2 className="sticky top-0 lg:block w-full">About me</h2>
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
