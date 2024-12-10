import React, { useState, useEffect, useRef } from "react";

interface Section {
    id: string;
    title: string;
}

interface DynamicStickyHeaderProps {
    sections: Section[];
    children: React.ReactNode;
}

const DynamicStickyHeader: React.FC<DynamicStickyHeaderProps> = ({ sections, children }) => {
    const [activeSection, setActiveSection] = useState<string | null>(sections[0]?.id || null);
    const containerRef = useRef<HTMLDivElement>(null);

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
                root: null, // Default is the viewport
                threshold: 0.6, // 60% of the section must be visible to activate
            }
        );

        const elements = containerRef.current?.querySelectorAll("section") || [];
        elements.forEach((element) => observer.observe(element));

        return () => {
            elements.forEach((element) => observer.unobserve(element));
        };
    }, []);

    return (
        <div className="relative">
            {/* Sticky Header */}
            <div className="sticky top-0 bg-white z-10 px-4 py-2 shadow-md">
                <h2 className="text-lg font-bold">
                    {sections.find((sec) => sec.id === activeSection)?.title || ""}
                </h2>
            </div>

            {/* Section Content */}
            <div ref={containerRef}>{children}</div>
        </div>
    );
};

export default DynamicStickyHeader;
