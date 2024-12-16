import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

interface StaggeredFadeInProps extends React.HTMLProps<HTMLDivElement> {
    children?: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    applyChildClasses?: boolean;
}

const StaggeredFadeIn: React.FC<StaggeredFadeInProps> = (
    {
        children,
        className,
        delay = 0.03,
        duration = 0.6,
        applyChildClasses = false,
        ...props
    },
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
            className={className}
            {...props}
        >
            {React.Children.map(
                children,
                (child, index) => (
                    React.isValidElement(child) &&
                    (
                        <motion.div
                            variants={childVariants}
                            key={index}
                            className={applyChildClasses &&
                                child.props.className}
                        >
                            {applyChildClasses ? child.props.innerHTML : child}
                        </motion.div>
                    )
                ),
            )}
        </motion.div>
    );
};

export default StaggeredFadeIn;
