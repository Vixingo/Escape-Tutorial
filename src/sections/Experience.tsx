"use client";
import Image from "next/image";
import React from "react";

const Experience = () => {
    return (
        <section className="experience py-5 ">
            <h1 className="primary_header pb-10 md:px-2 text-4xl  md:text-6xl max-w-4xl mx-auto text-center">
                Gain hands-on experience while building a portfolio of
                real-world projects
            </h1>
            <div className="backdrop-blur-sm">
                <Image
                    src="/images/exp.png"
                    width={"1920"}
                    height={"500"}
                    alt="Experience"
                />
            </div>
        </section>
    );
};

export default Experience;
