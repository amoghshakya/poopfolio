import { motion } from "motion/react";
import { SITE_TITLE } from "../../consts";
import { useEffect, useState } from "react";

interface AnimatedTitleProps {
    isVisible: boolean;
    message?: string;
    className?: string;
    staggerDelay?: number;
    href?: string;
    delay?: number;
}

export function AnimatedTitle(
    {
        isVisible,
        message,
        className,
        href = "/",
        staggerDelay = 0.03,
        delay = 0,
    }: AnimatedTitleProps,
) {
    const [content, setContent] = useState(message ?? SITE_TITLE);

    useEffect(() => {
        if (message) {
            setContent(message);
        } else {
            setContent(SITE_TITLE);
        }
    }, [message]);

    const containerVariants = {
        hidden: {
            opacity: 0,
            transition: {
                staggerChildren: staggerDelay,
                staggerDirection: -1,
            },
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay,
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
                delay: delay,
                duration: 0.4,
                ease: "easeOut",
            },
        },
        hover: {
            y: 10,
            transition: {
                delay: delay,
                duration: 0.2,
                ease: "easeInOut",
            },
        },
    };

    return (
        <motion.div
            key={content}
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
                href={isVisible ? href : undefined}
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

interface FancyTitleProps {
    isVisible?: boolean;
    message?: string;
    className?: string;
    href?: string;
    staggerDelay?: number;
}

export function FancyTitle({
    isVisible = true,
    message,
    className,
    href = "/",
    staggerDelay = 0.03,
}: FancyTitleProps) {
    if (!message) {
        message = SITE_TITLE;
    }

    return (
        <motion.div className="font-semibold text-text tracking-tighter">
            <motion.a
                initial="initial"
                animate={isVisible ? "visible" : ""}
                whileHover="hover"
                href={href}
                className={`relative block overflow-hidden whitespace-nowrap`}
            >
                <div>
                    {message.split("").map((letter, index) => (
                        <motion.span
                            variants={{
                                initial: {
                                    y: "-100%",
                                },
                                visible: {
                                    y: 0,
                                },
                                hover: {
                                    y: "-100%",
                                },
                            }}
                            transition={{
                                duration: 0.4,
                                ease: "easeInOut",
                                delay: index * staggerDelay,
                            }}
                            className="inline-block"
                            key={index}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </div>
                <div className="absolute inset-0">
                    {message.split("").map((letter, index) => (
                        <motion.span
                            variants={{
                                initial: {
                                    y: "100%",
                                },
                                hover: {
                                    y: 0,
                                },
                            }}
                            transition={{
                                duration: 0.4,
                                ease: "easeInOut",
                                delay: index * staggerDelay,
                            }}
                            className="inline-block"
                            key={index}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </div>
            </motion.a>
        </motion.div>
    );
}
