import StaggeredFadeIn from "./StaggeredFadeIn";
import { FancyTitle } from "./Title";

const Contact: React.FC = () => {
    return (
        <section id="contact" className="relative">
            <StaggeredFadeIn className="z-40 my-2 max-sm:bg-base/80 max-sm:sticky top-0 w-full lg:block py-4 bg-transparent max-sm:backdrop-blur-sm">
                <h2 className="max-sm:text-sm max-sm:uppercase max-sm:tracking-wide">
                    Contact
                </h2>
            </StaggeredFadeIn>
            <StaggeredFadeIn>
                <a href="#">OK</a>
            </StaggeredFadeIn>
        </section>
    );
};

export default Contact;
