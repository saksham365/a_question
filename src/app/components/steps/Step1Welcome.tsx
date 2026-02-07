"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Heart } from "lucide-react";

export default function Step1Welcome({ onNext }: { onNext: () => void }) {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const btnRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(containerRef.current,
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" }
        )
            .fromTo(textRef.current,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 },
                "-=0.5"
            )
            .fromTo(btnRef.current,
                { scale: 0 },
                { scale: 1, duration: 0.5, ease: "elastic.out(1, 0.5)" },
                "-=0.3"
            );
    }, []);

    return (
        <div ref={containerRef} className="text-center bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-valentine-200 mx-4">
            <div className="flex justify-center mb-6">
                <Heart className="w-20 h-20 text-valentine-500 fill-valentine-500 animate-pulse" />
            </div>

            <h1 className="font-pacifico text-4xl text-valentine-600 mb-4">
                Heyyyy Pankhurrii ! ❤️
            </h1>

            <div ref={textRef} className="text-lg text-valentine-800 mb-8 font-medium">
                (I love youuu soo muchhh)
            </div>

            <button
                ref={btnRef}
                onClick={onNext}
                className="bg-valentine-500 hover:bg-valentine-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition-all hover:scale-105 active:scale-95"
            >
                Let's Start!
            </button>
        </div>
    );
}
