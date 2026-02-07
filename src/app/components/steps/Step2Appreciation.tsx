"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Stars } from "lucide-react";

export default function Step2Appreciation({ onNext }: { onNext: () => void }) {
    const containerRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(containerRef.current,
            { x: 100, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
        );
    }, []);

    return (
        <div ref={containerRef} className="text-center bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-valentine-200 mx-4">
            <div className="flex justify-center mb-6">
                <Stars className="w-16 h-16 text-yellow-400 fill-yellow-200" />
            </div>

            <h2 className="font-pacifico text-3xl text-valentine-600 mb-6">
                Thinking of you...
            </h2>

            <p className="text-lg text-valentine-800 mb-6 leading-relaxed">
                I am so lucky to have youu Pankhuri, and i thank god everyday for giving you to me, idk what i would be now without you, anywayyy i just want to say that I LOVE YOUUU KAAFI SAARA 
            </p>

            <button
                onClick={onNext}
                className="bg-valentine-400 hover:bg-valentine-500 text-white font-bold py-2 px-6 rounded-full shadow-lg transform transition-all hover:scale-105"
            >
                Continue...
            </button>
        </div>
    );
}
