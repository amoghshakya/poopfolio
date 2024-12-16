import { useEffect, useRef, useState } from "react";
import { FancyTitle as AnimatedTitle } from "./Title";
import TOC from "./TOC";
import { useIsMobile } from "./hooks/useIsMobile";
import Socials from "./Socials";

export default function Navbar(
    { sections }: {
        sections: { id: string; title: string }[];
    },
) {
    const [isVisible, setIsVisible] = useState(false);
    const isMobile = useIsMobile();
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight / 3.5) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {!isMobile &&
                (
                    <header
                        className={`z-50 hidden lg:fixed transition lg:inline-flex lg:flex-col items-start justify-between px-4 p-2 lg:h-screen lg:w-max w-full`}
                    >
                        <AnimatedTitle
                            isVisible={isVisible}
                        />
                        <TOC sections={sections} isVisible={isVisible} />
                        <Socials />
                    </header>
                )}
        </>
    );
}
