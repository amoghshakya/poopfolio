import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useIsMobile } from "./hooks/useIsMobile";

interface IProps {
    sections: {
        id: string;
        title: string;
    }[];
    isVisible: boolean;
}

export default function TOC({
    sections,
    isVisible,
}: IProps) {
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const isMobile = useIsMobile();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                root: null, // set default as the viewport?
                threshold: 0,
                rootMargin: "-50% 0px",
            },
        );

        const sectionElements = sections.map((section) =>
            document.getElementById(section.id)
        );
        sectionElements.forEach((el) => el && observer.observe(el));

        return () => {
            sectionElements.forEach((el) => el && observer.unobserve(el));
        };
    }, [activeSection, sections]);

    const handleClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setActiveSection(id);
        }
    };

    const containerVariants = {
        hidden: {
            opacity: 0,
            transition: {
                staggerChildren: 0.03,
                staggerDirection: -1,
            },
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.03,
                staggerDirection: 1,
            },
        },
    };

    const childVariants = {
        hidden: {
            opacity: 0,
            x: -100,
            transition: {
                duration: 0.2,
                ease: "easeIn",
            },
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.2,
                ease: "easeIn",
            },
        },
    };

    return (
        <>
            <motion.nav
                variants={containerVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                className="hidden lg:block"
            >
                <motion.ul className="space-y-4 font-semibold">
                    {sections.map((section) => (
                        <motion.li
                            onClick={(e: MouseEvent) => {
                                e.preventDefault();
                                handleClick(section.id);
                            }}
                            key={section.id}
                            variants={childVariants}
                            whileHover={{
                                x: 10,
                                transition: {
                                    duration: 0.2,
                                    ease: "easeIn",
                                },
                            }}
                            className={`cursor-pointer relative list-none transition-all uppercase text-xs select-none ${
                                activeSection === section.id
                                    ? "!font-extrabold text-green pl-2"
                                    : "text-text/75 font-semibold"
                            }`}
                        >
                            {isVisible
                                ? (
                                    <span>
                                        {section.title}
                                    </span>
                                )
                                : <span>{section.title}</span>}
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.nav>
        </>
    );
}
