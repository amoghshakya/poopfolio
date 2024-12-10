import { motion } from "motion/react";
import { SITE_TITLE } from "../../consts";
import { useEffect, useState } from "react";

export default function AnimatedTitle(
    { isVisible, message, className, hoverMessages = ["whoami"] }: {
        isVisible: boolean;
        hoverMessages?: string[];
        message?: string;
        className?: string;
    },
) {
    const [content, setContent] = useState(message ?? SITE_TITLE);

    useEffect(() => {
        if (message) {
            setContent(message);
        }
    }, [message]);

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

    const letterVariants = {
        hidden: {
            opacity: 0,
            y: -50,
            transition: {
                duration: 0.4,
                ease: "easeIn",
            },
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut",
            },
        },
        hover: {
            y: 10,
            transition: {
                duration: 0.2,
                ease: "easeInOut",
            },
        },
    };

    const handleHoverStart = () => {
        const randomMessage =
            hoverMessages[Math.floor(Math.random() * hoverMessages.length)];
        setContent(randomMessage);
    };

    const handleHoverEnd = () => {
        setContent(SITE_TITLE);
    };

    return (
        <motion.div
            key={content}
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            style={{
                display: "flex",
                justifyContent: "center",
                overflow: "hidden",
                fontWeight: 600,
                userSelect: "none",
                letterSpacing: "-0.05em",
            }}
        >
            <motion.a
                href={isVisible ? "/" : undefined}
                aria-hidden={!isVisible}
            >
                {content.split("").map((letter, index) => (
                    <motion.span
                        key={index}
                        variants={letterVariants}
                        style={{
                            display: "inline-block",
                            marginRight: letter === " " ? "0.2em" : 0,
                        }}
                        className={className}
                    >
                        {letter}
                    </motion.span>
                ))}
            </motion.a>
        </motion.div>
    );
}
