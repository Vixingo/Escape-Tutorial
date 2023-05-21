"use client";
import Image from "next/image";
import React from "react";

const Demand = () => {
    return (
        <section className="Demand">
            <h1>With on-demand help from experts at your fingertips</h1>
            <Image
                src={"/images/demand.png"}
                alt="Demand"
                width="300"
                height="300"
            />
        </section>
    );
};

export default Demand;
