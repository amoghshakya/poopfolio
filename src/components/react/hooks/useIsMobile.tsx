import { useEffect, useState } from "react";

export const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const updateIsMobile = () => {
            if (typeof window !== "undefined") {
                setIsMobile(window.matchMedia("(max-width: 1024px)").matches);
            }
        };

        updateIsMobile();

        window.addEventListener("resize", updateIsMobile);
        return () => window.removeEventListener("resize", updateIsMobile);
    }, []);

    return isMobile;
};
