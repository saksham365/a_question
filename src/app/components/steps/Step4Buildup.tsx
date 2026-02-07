"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Drum } from "lucide-react";

export default function Step4Buildup({ onNext }: { onNext: () => void }) {
    const containerRef = useRef(null);
    const drumRef = useRef(null); // Explicitly type as null initially

    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(containerRef.current,
            { opacity: 0, scale: 0.9 },
            { opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
        );

        // Drum shake effect
        gsap.to(drumRef.current, {
            x: 2,
            rotation: 2,
            duration: 0.1,
            repeat: -1,
            yoyo: true,
            ease: "linear"
        });
    }, []);

    return (
        <div ref={containerRef} className="text-center bg-white/90 backdrop-blur-md p-10 rounded-3xl shadow-2xl border-2 border-valentine-300 mx-4">
            <div className="flex justify-center mb-8">
                <div ref={drumRef}>
                    <Drum className="w-20 h-20 text-valentine-700" />
                </div>
            </div>

            <h2 className="font-pacifico text-4xl text-valentine-700 mb-8">
                I have a question...
            </h2>

            <p className="text-xl text-valentine-900 mb-8 font-medium">
                (Are you ready?)
            </p>

            <button
                onClick={onNext}
                className="bg-valentine-600 hover:bg-valentine-700 text-white text-xl font-bold py-4 px-10 rounded-full shadow-xl transform transition-all hover:scale-110 animate-bounce"
            >
                Ask me!
            </button>
        </div>
    );
}
