"use client";
import Image from "next/image";
import React from "react";

const Demand = () => {
    return (
        <section className="Demand py-20">
            <h1 className="primary_header px-2 text-4xl md:text-6xl max-w-4xl mx-auto text-center pb-2">
                With on-demand help from experts at your fingertips
            </h1>
            <div className=" px-3 md:px-24 py-10">
                <Image
                    src={"/images/demand.png"}
                    width={"1920"}
                    height={"500"}
                    alt="Demand"
                />
            </div>
        </section>
    );
};

export default Demand;
