import { useEffect, useRef, useState } from "react";
import AnimatedTitle from "./Title";
import TOC from "./TOC";

export default function Navbar(
    { sections, hoverMessages }: {
        sections: { id: string; title: string }[];
        hoverMessages?: string[];
    },
) {
    const [isVisible, setIsVisible] = useState(false);
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
        <header
            className={`${
                isVisible ? "bg-base" : ""
            } z-50 fixed transition inline-flex lg:flex-col items-start justify-between px-4 p-2 lg:h-screen lg:w-max w-full`}
        >
            <AnimatedTitle
                isVisible={isVisible}
                hoverMessages={hoverMessages}
            />
            <TOC sections={sections} isVisible={isVisible} />
            <div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
            </div>
        </header>
    );
}
