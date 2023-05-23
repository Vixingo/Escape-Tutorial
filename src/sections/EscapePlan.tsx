"use client";
import React from "react";

const EscapePlan = () => {
    return (
        <section className="EscapePlan bg-lines bg-no-repeat bg-cover backdrop-blur-xl">
            <div className="text-center px-2">
                <h1 className="primary_header text-5xl md:text-6xl">
                    How do you escape?
                </h1>
                <br />
                <h2 className="text-center text-3xl mb-6">
                    The solution to Tutorial Hell is simple:{" "}
                    <span className="relative before:bg-under_g before:absolute before:h-1 inline-block  before:-inset-1 before:top-10 before:rounded">
                        just build stuff.
                    </span>
                </h2>
                <br />
                <div className="text-xl max-w-2xl mx-auto ">
                    <p className="mb-12">
                        We get it though. When you’re in the early stages of
                        your career, building alone is frustrating and
                        defeating, and it can be challenging to come up with
                        project ideas on your own.
                    </p>

                    <p className="mb-12">
                        Our program helps you escape Tutorial Hell by giving you
                        practical, hands-on programming experience while having
                        the support of amazing mentors by your side.
                    </p>
                    <p className="mb-12">
                        We remove the stress of coming up with project ideas by
                        giving you meaningful projects specifically tailored to
                        your skillset. Our projects have specific guidelines and
                        learning objectives, so you can focus solely on building
                        and learning
                    </p>
                </div>
            </div>
        </section>
    );
};

export default EscapePlan;
