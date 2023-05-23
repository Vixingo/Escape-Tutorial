"use client";

import Image from "next/image";
import React from "react";

const Program = () => {
    return (
        <section className="program">
            <h1 className="primary_header text-6xl text-center pb-8">
                Our program
            </h1>
            <div className="bg-lines bg-no-repeat bg-contain">
                <div className="flex flex-col-reverse md:flex-row items-center justify-center ">
                    <div className="flex-1 ">
                        <p className="text-3xl p-2 max-w-lg mx-auto">
                            Work through a series of projects hand-picked
                            specifically for your skillset and goals, at your
                            own pace
                        </p>
                    </div>
                    <div className="flex-1">
                        <Image
                            src="/images/pro1.png"
                            alt="program1"
                            width="600"
                            height="500"
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center">
                    <div>
                        <Image
                            src="/images/pro2.png"
                            alt="program2"
                            width="600"
                            height="500"
                        />
                    </div>
                    <div>
                        <p className="text-3xl p-2 max-w-lg mx-auto">
                            When you get stuck, request help from a mentor and
                            chat through text or video
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-lines bg-no-repeat bg-contain">
                <div className="flex flex-col-reverse md:flex-row items-center justify-center ">
                    <div className="flex-1 ">
                        <p className="text-3xl p-2 max-w-lg mx-auto">
                            Watch yourself grow and gain confidence by tracking
                            your progress in your dashboard
                        </p>
                    </div>
                    <div className="flex-1">
                        <Image
                            src="/images/pro3.png"
                            alt="program3"
                            width="600"
                            height="500"
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center justify-items-center">
                    <div className=" justify-items-center">
                        <Image
                            src="/images/pro4.png"
                            alt="program4"
                            width="600"
                            height="500"
                        />
                    </div>
                    <div>
                        <p className="text-3xl p-2 max-w-lg mx-auto">
                            Connect with a community of like-minded learners in
                            our private Discord Server
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Program;
