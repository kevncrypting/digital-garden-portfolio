import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
    {
        name: "Trail Ahead",
        description:
            "Trail Ahead is a full-stack web application created with the goal of helping hikers find hikers. Users are able to view and join hikes planned by other users, or create their own.",
        image: "/trail_ahead.png",
        github: "https://github.com/DQuaya/Trail-Ahead-Front-End",
        link: "https://trail-ahead.onrender.com/",
    },
    {
        name: "The Brew Buddy",
        description:
            "The Brew Buddy is the ritualistic coffee drinker's morning companion. The Buddy feature provides the indecisive or adventurous coffee drinker with a way to explore new recipes for brewing coffee, specifically using an AeroPress brewing device. A randomizer adjusts variables in each stage of the brewing process so that users can enjoy a different coffee recipe with every cup.",
        image: "/the_brew_buddy.png",
        github: "https://github.com/kevncrypting/the-brew-buddy",
        link: "https://kevncrypting.github.io/the-brew-buddy/",
    },
    {
        name: "Jark-GPT",
        description:
            "Jark-GPT is an educational tool created to help users of AI technology become more adept at getting valuable information from AI tools, specifically Chat-GPT. Our app highlights three ways that users can start using AI prompting more efficiently.",
        image: "/jarkgpt.png",
        github: "https://github.com/Azrussell/jark-frontend",
        link: "https://jarkfront-end1.onrender.com/",
    },
];

const ProjectsSection = () => {
    return (
        <section id="projects">
            <h1 className="my-10 text-center font-bold text-4xl">
                Projects
                <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
            </h1>

            <div className="flex flex-col space-y-28">
                {projects.map((project, idx) => {
                    return (
                        <div key={idx}>
                            <SlideUp offset="-300px 0px -300px 0px">
                                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                                    <div className=" md:w-1/2">
                                        <Link href={project.link}>
                                            <Image
                                                src={project.image}
                                                alt=""
                                                width={1000}
                                                height={1000}
                                                className="rounded-xl shadow-xl hover:opacity-70"
                                            />
                                        </Link>
                                    </div>
                                    <div className="mt-8 md:w-1/2">
                                        <h1 className="text-4xl font-bold mb-6">
                                            {project.name}
                                        </h1>
                                        <p className="text-xl leading-7 mb-4 light:text-neutral-600 dark:text-neutral-400">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-row align-bottom space-x-4">
                                            <Link
                                                href={project.github}
                                                target="_blank"
                                            >
                                                <BsGithub
                                                    size={30}
                                                    className="hover:-translate-y-1 transition-transform cursor-pointer"
                                                />
                                            </Link>
                                            <Link
                                                href={project.link}
                                                target="_blank"
                                            >
                                                <BsArrowUpRightSquare
                                                    size={30}
                                                    className="hover:-translate-y-1 transition-transform cursor-pointer"
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SlideUp>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default ProjectsSection;
