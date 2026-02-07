"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import confetti from "canvas-confetti";
import { PartyPopper } from "lucide-react";

export default function Step6Success() {
    const containerRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        // 1. Explosion of confetti
        const duration = 15 * 1000;
        const end = Date.now() + duration;

        const frame = () => {
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#ff0000', '#ffa500', '#ffff00', '#008000', '#0000ff', '#4b0082', '#ee82ee']
            });
            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#ff0000', '#ffa500', '#ffff00', '#008000', '#0000ff', '#4b0082', '#ee82ee']
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        };
        frame();

        // 2. GSAP "Blow up" animation
        const tl = gsap.timeline();
        tl.fromTo(containerRef.current,
            { scale: 0.1, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1.5, ease: "elastic.out(1, 0.3)" }
        )
            .to(textRef.current, {
                scale: 1.2,
                duration: 0.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });

    }, []);

    return (
        <div ref={containerRef} className="text-center bg-white/95 backdrop-blur-xl p-12 rounded-[3rem] shadow-2xl border-4 border-valentine-500 mx-4 max-w-2xl w-full z-50">
            <div className="flex justify-center mb-10">
                <PartyPopper className="w-32 h-32 text-yellow-500 animate-bounce" />
            </div>

            <h1 ref={textRef} className="font-pacifico text-6xl text-valentine-600 mb-8 leading-tight">
                THANKYOU !!!! 🎉
            </h1>

            <p className="text-2xl text-valentine-800 mb-8 font-medium">
                I LOVEEE YOUUU MORE THAANN I CAN EVER LOVEE MYSELFFFF ❤️
            </p>
        </div>
    );
}
