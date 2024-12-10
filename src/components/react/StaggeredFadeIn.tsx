import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

interface StaggeredFadeInProps {
    children?: React.ReactNode;
    delay?: number;
    duration?: number;
}

const StaggeredFadeIn: React.FC<StaggeredFadeInProps> = (
    { children, delay = 0.03, duration = 0.6 },
) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const containerVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                staggerDirection: 1,
                staggerChildren: delay,
            },
        },
    };

    const childVariants = {
        hidden: {
            opacity: 0,
            y: 30,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: duration,
                ease: "easeInOut",
            },
        },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
        >
            {React.Children.map(
                children,
                (child, index) => (
                    React.isValidElement(child) &&
                    (
                        <motion.div variants={childVariants} key={index}>
                            {child}
                        </motion.div>
                    )
                ),
            )}
        </motion.div>
    );
};

export default StaggeredFadeIn;
