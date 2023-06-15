import React from "react";
import Image from "next/image";

const skills = [
    { skill: "HTML" },
    { skill: "CSS" },
    { skill: "JavaScript" },
    { skill: "TypeScript" },
    { skill: "React" },
    { skill: "Next.js" },
    { skill: "Tailwind CSS" },
    { skill: "Git" },
    { skill: "GitHub" },
];

const AboutSection = () => {
    return (
        <section id="about">
            <div className="my-12 pb-12 md:pt-16 md:pb-48">
                <h1 className="text-center font-bold text-4xl">
                    About Me
                    <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
                </h1>

                <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
                    <div className="md:w-1/2 ">
                        <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
                            Get to know me!
                        </h1>
                        <p>
                            Hi, my name is Kevin and I am a{" "}
                            <span className="font-bold">
                                {"highly ambitious"}
                            </span>
                            ,
                            <span className="font-bold">
                                {" self-motivated"}
                            </span>
                            , and
                            <span className="font-bold">{" driven"}</span>{" "}
                            software engineer based in Atlanta, GA.
                        </p>
                        <br />
                        <p>
                            After graduating from the University of Georgia in
                            2017 with a BS in Biology (go dawgs!!), I began
                            taking steps towards realizing my dream of becoming
                            a Pediatrican. I started working in the Emergency
                            Room as a medical scribe in order to gain some
                            clinical exposure while studying for the Medical
                            College Admission Test (MCAT), from which I made a
                            natural progression and transitioned into a similar
                            role working at a private Pediatric clinic.
                        </p>
                        <br />
                        <p>
                            As time passed (and March 2020 happened), my
                            interest in programming continued to grow, and I
                            decided to take a step towards pursuing a career in
                            software engineering. I realized that my aspirations
                            of becoming a healthcare professional were rooted in
                            a deep desire to help others, and that I could have
                            similar positive impact, if not more widespread, by
                            creating helpful and accessible tools that enrich
                            the lives of others. With my natural curiosity at an
                            all-time high, I embarked on a personal journey to
                            equip myself with the technical knowledge of a
                            programmer.
                        </p>
                        <br />
                        <p>
                            I went wide, learning a little about a lot of
                            things, not making significant progress into any
                            particular area of the tech field. I realized that I
                            needed some more accountability, and so began to
                            seek structured learning. My research brought me to
                            discover the City of Refuge and their Tech
                            Transformation Academy, through which I received
                            formal education from DigitalCrafts in the form of a
                            4-month long full stack web development program.
                        </p>
                        <br />
                        <p>
                            Since graduating in June 2023, I am eagerly pursuing
                            a position where I can exercise my newly-acquired
                            technical expertise and play my part in a team
                            creating a product that touches the lives of many.
                        </p>
                        <br />
                        <p>
                            Outside of programming, I have a wide range of
                            hobbies and passions that keep me busy. I love
                            coffee, have recently rediscovered my love for
                            reading, and enjoy spending quality time with my
                            friends and family. I am always seeking new
                            experiences and love to keep myself engaged and
                            learning new things. I love coffee and am always
                            down for a coffee chat.
                        </p>
                        <br />
                    </div>
                    <div className="text-center md:w-1/2 md:text-left">
                        <h1 className="text-2xl font-bold mb-6">My Skills</h1>
                        <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                            {skills.map((item, idx) => {
                                return (
                                    <p
                                        key={idx}
                                        className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                                    >
                                        {item.skill}
                                    </p>
                                );
                            })}
                        </div>
                        <Image
                            src="/picture_2.png"
                            alt=""
                            width={325}
                            height={325}
                            className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
