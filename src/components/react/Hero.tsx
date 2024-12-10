import { AnimatePresence, motion } from "motion/react";
import StaggeredFadeIn from "./StaggeredFadeIn";

export function Hero() {
    return (
        <>
            <section className="max-md:py-20 transition md:h-screen flex flex-col justify-center">
                <StaggeredFadeIn delay={0.03} duration={0.5}>
                    <h5>Hi, I'm</h5>
                    <h1>Amogh Shakya</h1>
                    <p>
                        I'm a student passionate about web development, eager to
                        apply my skills and learn from real-world experiences. I
                        thrive in collaborative environments and am excited
                        about contributing to impactful projects.
                    </p>
                </StaggeredFadeIn>
            </section>
        </>
    );
}
