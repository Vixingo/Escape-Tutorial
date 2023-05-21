"use client";

import Image from "next/image";
import React from "react";

const About = () => {
    return (
        <section className="About">
            <div>
                <div>
                    <h1>Shadee Merhi</h1>
                    <h2>Founder and Lead Mentor</h2>
                    <p>
                        Shadee has been working professionally as a Software
                        Engineer for the past 2 years and also creates
                        programming tutorials on YouTube.
                    </p>
                    <p>
                        After graduating from a coding bootcamp in late 2020,
                        Shadee gained a deep understanding of the pain of
                        Tutorial Hell and made it his mission to become a
                        world-class educator to help other early-stage
                        developers reach their goals of breaking into the tech
                        industry.{" "}
                    </p>
                    <h6>Learn more at shadeemerhi.com</h6>
                </div>
                <div>
                    <Image
                        src="/images/about.png"
                        alt="about"
                        width="300"
                        height="300"
                    />
                    <button>Youtube</button>
                    <button>Github</button>
                    <button>LinkedIn</button>
                </div>
            </div>
        </section>
    );
};

export default About;
