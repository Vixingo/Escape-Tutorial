"use client";

import Image from "next/image";

const Hero = () => {
    return (
        <section className="Hero pt-20 ">
            <div className="grid grid-cols-2 ">
                <div className="col-span-5 lg:col-span-1 ml-28">
                    <h1 className="primary_header text-7xl lg:text-8xl leading-loose pr-20 pt-12">
                        Escape Tutorial Hell
                    </h1>
                    <br />
                    <p className=" text-2xl ">
                        Learn to independently build by completing real-world
                        projects with on-demand mentor guidance
                    </p>
                    <br />
                    <br />
                    <button className="rounded bg-purple-600 px-5 py-2 hover:bg-purple-700 hover:scale-110 duration-300">
                        Learn More
                    </button>
                </div>
                <div className="col-span-1 flex justify-end ">
                    <Image
                        src={"/images/hero1.png"}
                        alt="Escape Tutorial Hero img"
                        width={"700"}
                        height={"650"}
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
