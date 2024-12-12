import React from "react";
import StaggeredFadeIn from "./StaggeredFadeIn";

const About: React.FC = () => {
    return (
        <section id="about" className="relative py-16 md:py-28">
            <StaggeredFadeIn>
                <h2 className="sticky top-0 lg:block w-full">About me</h2>
                <p>
                    I am a Computer Science student based in Kathmandu, Nepal,
                    with a passion for exploring abstract concepts and solving
                    complex problems. My academic journey has fueled my
                    enthusiasm for programming and technology, and I enjoy
                    delving into both theoretical and practical aspects of the
                    field.
                </p>
                <p>
                    When I’m not immersed in code or learning about advanced
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
