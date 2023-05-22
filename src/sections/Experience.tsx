"use client";
import Image from "next/image";
import React from "react";

const Experience = () => {
    return (
        <section className="experience">
            <h1 className="primary_header text-8xl">
                Gain hands-on experience while building a portfolio of
                real-world projects
            </h1>
            <Image src="/images/exp.png" alt="exp" width="300" height="300" />
        </section>
    );
};

export default Experience;
