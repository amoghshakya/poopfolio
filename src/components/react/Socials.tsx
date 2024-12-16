import StaggeredFadeIn from "./StaggeredFadeIn";
import {
    FaGithub,
    FaInstagram,
    FaLinkedin, FaXTwitter
} from "react-icons/fa6";

const Socials = () => {
    return (
        <StaggeredFadeIn className="flex space-x-1 py-1">
            <a
                href="https://github.com/amoghshakya"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="My GitHub profile"
            >
                <FaGithub className="h-6 w-6 opacity-75 hover:opacity-100" />
            </a>
            <a
                href="https://linkedin.com/in/amoghshakya"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="My LinkedIn profile"
            >
                <FaLinkedin className="h-6 w-6 opacity-75 hover:opacity-100" />
            </a>
            <a
                href="https://instagram.com/iamoghshakya"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="My Instagram profile"
            >
                <FaInstagram className="h-6 w-6 opacity-75 hover:opacity-100" />
            </a>
            <a
                href="https://x.com/amoghsh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="My X/Twitter profile"
            >
                <FaXTwitter className="h-6 w-6 opacity-75 hover:opacity-100" />
            </a>
        </StaggeredFadeIn>
    );
};

export default Socials;
