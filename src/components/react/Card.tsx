import React from "react";
import { HiMiniArrowUpRight } from "react-icons/hi2";
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
        "transition p-8 border hover:scale-[1.01] shadow border-surface1/20 hover:border-surface2/80 rounded-lg hover:bg-surface0/20";

    return (
        <StaggeredFadeIn
            className={`${classes} ${className} ${
                href && "group cursor-pointer"
            }`}
            onClick={(e) => {
                if (href) {
                    if ((e.target as HTMLElement).tagName !== "A") {
                        e.stopPropagation();
                        window.open(href, target);
                    }
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
    return (
        <h3
            className={`text-xl font-bold mb-2 flex items-center group-hover:text-surface3 transition ${className}`}
        >
            {children}
            {isLinked && (
                <HiMiniArrowUpRight className="flex-shrink-0 ml-2 w-4 h-4 opacity-75 group-hover:opacity-100 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
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
