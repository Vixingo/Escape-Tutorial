"use client";

import Link from "next/link";

const Way = () => {
    return (
        <section className="Way">
            <h1>We’re with you the whole way</h1>{" "}
            <p>
                This program is designed to be challenging and put you outside
                of your comfort zone, because there is no other way to escape
                Tutorial Hell
            </p>
            <p>
                That’s why we’ve gathered some of the best engineers and
                educators to be by your side every step of the way
            </p>
            <div>
                <h1>Who’s this program for?</h1>
                <p>
                    Most of our students are early in their career and have
                    beginner-level knowledge of programming fundamentals
                </p>
                <a href="#">Bootcamp graduates</a>
                <a href="#">Self-taught developers</a>
                <a href="#">Junior developers</a>
            </div>
            <div>
                <h1>We’re coming soon</h1>
                <h3>join the waitlist to get alerted when we launch</h3>
                <input type="email" placeholder="jonedoe@example.com" />
            </div>
        </section>
    );
};

export default Way;
