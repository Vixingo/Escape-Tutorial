"use client";

import Link from "next/link";

const Way = () => {
    return (
        <section className="Way py-20">
            <h1 className="primary_header text-6xl text-center mb-2">
                We’re with you the whole way
            </h1>{" "}
            <br />
            <p className="text-center text-3xl max-w-4xl mx-auto py-10">
                This program is designed to be challenging and put you outside
                of your comfort zone, because there is no other way to escape
                Tutorial Hell
            </p>
            <p className="text-center text-3xl max-w-4xl mx-auto ">
                That’s why we’ve gathered some of the best engineers and
                educators to be by your side every step of the way
            </p>
            <div className="bg-way bg-contain h-screen bg-no-repeat"></div>
            <div>
                <h1 className="primary_header text-6xl pb-10 text-center">
                    Who’s this program for?
                </h1>
                <br />
                <p className="text-center text-3xl max-w-3xl mx-auto pb-12">
                    Most of our students are early in their career and have
                    beginner-level knowledge of programming fundamentals
                </p>
                <div className="text-center text-2xl flex flex-col gap-4">
                    {" "}
                    <a href="#">Bootcamp graduates</a>
                    <a href="#">Self-taught developers</a>
                    <a href="#">Junior developers</a>
                </div>
            </div>
            <div className="pt-20">
                <h1 className="primary_header text-6xl text-center mt-20 py-3">
                    We’re coming soon
                </h1>
                <h3 className=" text-center max-w-md mx-auto text-3xl py-6">
                    join the waitlist to get alerted when we launch
                </h3>
                <div className="relative max-w-lg mx-auto rounded border border-gray-700">
                    <input
                        type="email"
                        className="block p-3 w-full z-20 text-lg text-white bg-inherit  rounded   focus-visible:outline-none"
                        placeholder="you@examle.com"
                        required
                    />
                    <button
                        type="submit"
                        className="absolute bg-purple-600 top-0 right-0 px-7 py-3 text-lg hover:bg-purple-700  duration-300  text-white  rounded border-none rounded-tl-none rounded-bl-none"
                    >
                        Join
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Way;
