"use client";

import Image from "next/image";
import React from "react";

const Stuck = () => {
    return (
        <section className="Stuck">
            <div>
                <h1>Are you stuck in Tutorial Hell?</h1>
                <p>You watch a programming tutorial</p>
                <div>
                    <p>You lose all motivation and feel defeated and stuck</p>
                    <Image
                        src="/images/helloop.png"
                        alt="helloop"
                        width="300"
                        height="300"
                    />
                    <p>You feel like you’re making incredible progress</p>
                </div>
                <p>
                    You’re unable to actually build anything and become quickly
                    overwhelmed and frustrated
                </p>
                <p>You attempt to build something on your own</p>
            </div>
        </section>
    );
};

export default Stuck;
