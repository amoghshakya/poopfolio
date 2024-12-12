import React from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import StaggeredFadeIn from "./StaggeredFadeIn";

interface CardProps {
    children: React.ReactNode;
    className?: string;
    href?: string;
    target?: string;
    ariaLabel?: string;
}

const Card: React.FC<CardProps> = ({
    children,
    className = "",
    href,
    target = "_blank",
    ariaLabel,
}) => {
    const classes =
        "transition p-8 border shadow border-surface1/20 hover:border-surface2/80 rounded-lg hover:bg-surface0/5";

    return (
        <StaggeredFadeIn
            className={`${classes} ${className} ${
                href && "group cursor-pointer"
            }`}
            onClick={() => {
                if (href) {
                    window.open(href, target);
                }
            }}
        >
            {children}
        </StaggeredFadeIn>
    );
};

// CardTitle
interface CardTitleProps {
    children: React.ReactNode;
    className?: string;
}

const CardTitle: React.FC<CardTitleProps> = ({ children, className = "" }) => {
    const isLinked = React.useContext(CardLinkContext);
    if (isLinked) {
        return (
            <h3
                className={`text-lg font-bold mb-2 flex items-center group-hover:text-surface3 transition ${className}`}
            >
                {children}
                {isLinked && (
                    <HiArrowUpRight className="ml-2 w-4 h-4 opacity-75 group-hover:opacity-100 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                )}
            </h3>
        );
    }
    return (
        <h3
            className={`text-lg font-bold mb-2 flex items-center group-hover:text-surface3 transition ${className}`}
        >
            {children}
            {isLinked && (
                <HiArrowUpRight className="ml-2 w-4 h-4 opacity-75 group-hover:opacity-100 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            )}
        </h3>
    );
};

// CardBody
const CardBody: React.FC<{ children: React.ReactNode; className?: string }> = ({
    children,
    className = "",
}) => (
    <p
        className={`transition ${className}`}
    >
        {children}
    </p>
);

// CardFooter
const CardFooter: React.FC<{ children: React.ReactNode; className?: string }> =
    ({
        children,
        className = "",
    }) => (
        <div className={`mt-4 flex items-center ${className}`}>
            {children}
        </div>
    );

// Context to propagate href presence
const CardLinkContext = React.createContext<boolean>(false);

// Card Wrapper with Context Provider
const CardWrapper: React.FC<CardProps> = ({
    children,
    className,
    href,
    target = "_blank",
    ariaLabel,
}) => {
    return (
        <CardLinkContext.Provider value={!!href}>
            <Card
                className={className}
                href={href}
                target={target}
                ariaLabel={ariaLabel}
            >
                {children}
            </Card>
        </CardLinkContext.Provider>
    );
};

export { CardBody, CardFooter, CardTitle, CardWrapper as Card };
