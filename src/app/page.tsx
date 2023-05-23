import About from "@/sections/About";
import Demand from "@/sections/Demand";
import EscapePlan from "@/sections/EscapePlan";
import Experience from "@/sections/Experience";
import Hero from "@/sections/Hero";
import Program from "@/sections/Program";
import Stuck from "@/sections/Stuck";
import Way from "@/sections/Way";
import Image from "next/image";

export default function Home() {
    return (
        // <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
        <>
            <Hero />
            <Stuck />
            <EscapePlan />
            <Experience />
            <Demand />
            <Program />
            <Way />
            <About />
        </>
    );
}
