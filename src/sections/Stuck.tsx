"use client";

import Image from "next/image";
import React from "react";

const Stuck = () => {
    return (
        <section className="Stuck py-24">
            <div>
                <h1 className="primary_header text-4xl md:text-6xl text-center ">
                    Are you stuck in Tutorial Hell?
                </h1>
                <br />
                <br />
                <p className="text-center text-sm md:text-xl">
                    You watch a programming tutorial
                </p>

                <br />
                <div className="grid grid-cols-3 items-start md:items-center text-center text-sm md:text-xl px-1">
                    <p className="grid-span-1 max-w-xs mx-auto">
                        You lose all motivation and feel defeated and stuck
                    </p>
                    <div className="grid-span-1 flex justify-center mb-5 ">
                        <Image
                            src="/images/helloop.png"
                            alt="helloop"
                            width="600"
                            height="600"
                        />
                    </div>
                    <p className="grid-span-1 max-w-xs mx-auto">
                        You feel like you’re making incredible progress
                    </p>
                </div>
                <div className="flex justify-evenly text-center text-sm md:text-xl">
                    <p className="max-w-xs flex-1">
                        You’re unable to actually build anything and become
                        quickly overwhelmed and frustrated
                    </p>

                    <p className="max-w-xs flex-1">
                        You attempt to build something on your own
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Stuck;
