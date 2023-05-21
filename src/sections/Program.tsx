"use client";

import Image from "next/image";
import React from "react";

const Program = () => {
    return (
        <section className="program">
            <h1>Our program</h1>
            <div>
                <div>
                    <p>
                        Work through a series of projects hand-picked
                        specifically for your skillset and goals, at your own
                        pace
                    </p>
                </div>
                <div>
                    <Image
                        src="/images/pro1.png"
                        alt="program1"
                        width="300"
                        height="300"
                    />
                </div>
            </div>
            <div>
                <div>
                    <Image
                        src="/images/pro2.png"
                        alt="program2"
                        width="300"
                        height="300"
                    />
                </div>
                <div>
                    <p>
                        When you get stuck, request help from a mentor and chat
                        through text or video
                    </p>
                </div>
            </div>
            <div>
                <div>
                    <p>
                        Watch yourself grow and gain confidence by tracking your
                        progress in your dashboard
                    </p>
                </div>
                <div>
                    <Image
                        src={"/images/pro3.png"}
                        alt="pro3"
                        width={300}
                        height={"300"}
                    />
                </div>
            </div>
            <div>
                <div>
                    <Image
                        src={"/images/pro4.png"}
                        alt="pro4"
                        width={300}
                        height={300}
                    />
                </div>
                <div>
                    <p>
                        Connect with a community of like-minded learners in our
                        private Discord Server
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Program;
