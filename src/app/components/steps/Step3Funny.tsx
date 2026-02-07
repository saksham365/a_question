"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Ghost } from "lucide-react";

export default function Step3Funny({ onNext }: { onNext: () => void }) {
    const containerRef = useRef(null);
    const iconRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo(containerRef.current,
            { x: 100, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
        );

        // Wiggle/float animation for the ghost
        gsap.to(iconRef.current, {
            y: -10,
            rotation: 5,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    }, []);

    return (
        <div ref={containerRef} className="text-center bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-valentine-200 mx-4">
            <div className="flex justify-center mb-6">
                <div ref={iconRef}>
                    <Ghost className="w-16 h-16 text-slate-400 fill-slate-100" />
                </div>
            </div>

            <h2 className="font-pacifico text-3xl text-valentine-600 mb-6">
                Even when...
            </h2>

            <p className="text-lg text-valentine-800 mb-6 leading-relaxed">
                you get gussa from me or you are busy and you dont reply or you are not available for me, even when we are so so so so far away i lovee youuu so muchh
            </p>

            <button
                onClick={onNext}
                className="bg-valentine-400 hover:bg-valentine-500 text-white font-bold py-2 px-6 rounded-full shadow-lg transform transition-all hover:scale-105"
            >
                Also...
            </button>
        </div>
    );
}
