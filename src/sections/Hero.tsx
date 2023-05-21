"use client";

import Image from "next/image";

const Hero = () => {
    return (
        <section className="Hero">
            <div className="pl-4">
                <div>
                    <h1>Escape Tutorial Hell</h1>
                    <p>
                        Learn to independently build by completing real-world
                        projects with on-demand mentor guidance
                    </p>
                    <button>Learn More</button>
                </div>
                <div>
                    <Image
                        src={"/images/hero1.png"}
                        alt="Escape Tutorial Hero img"
                        width="300"
                        height="300"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
