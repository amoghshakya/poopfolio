import { AnimatePresence, motion } from "motion/react";
import StaggeredFadeIn from "./StaggeredFadeIn";
import { useIsMobile } from "./hooks/useIsMobile";

export function Hero() {
    const isMobile = useIsMobile();
    const DELAY = !isMobile ? 0.6 : 0.03;
    const DURATION = !isMobile ? 0.8 : 0.5;
    return (
        <>
            <section className="max-md:pt-28 max-md:pb-12 transition md:h-screen flex flex-col justify-center">
                <StaggeredFadeIn delay={DELAY} duration={DURATION}>
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
