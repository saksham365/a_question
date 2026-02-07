"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Heart } from "lucide-react";

export default function Step5Question({ onNext }: { onNext: () => void }) {
    const containerRef = useRef(null);
    const noBtnRef = useRef(null);
    const [noBtnText, setNoBtnText] = useState("No");
    const [clickCount, setClickCount] = useState(0);

    const noTexts = ["Are you sure?", "Really?", "Think again!", "Last chance!", "Ok fine, YES"];

    useEffect(() => {
        gsap.fromTo(containerRef.current,
            { scale: 0.8, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1, ease: "elastic.out(1, 0.6)" }
        );
    }, []);

    const handleNoHover = () => {
        // Desktop: Run away
        if (window.matchMedia("(hover: hover)").matches) {
            const x = (Math.random() - 0.5) * 300;
            const y = (Math.random() - 0.5) * 300;

            gsap.to(noBtnRef.current, {
                x: x,
                y: y,
                duration: 0.3,
                ease: "power2.out"
            });
        }
    };

    const handleNoClick = () => {
        // Mobile/Touch: Change text until it becomes YES
        if (clickCount < noTexts.length - 1) {
            setNoBtnText(noTexts[clickCount]);
            setClickCount(prev => prev + 1);

            // Shake animation
            gsap.fromTo(noBtnRef.current,
                { x: -10 },
                { x: 10, duration: 0.1, repeat: 5, yoyo: true, clearProps: "x" }
            );
        } else {
            // Final state: Acts as YES
            onNext();
        }
    };

    return (
        <div ref={containerRef} className="text-center bg-white/90 backdrop-blur-md p-10 rounded-3xl shadow-2xl border-2 border-valentine-400 mx-4 max-w-xl w-full">
            <div className="flex justify-center mb-8">
                <Heart className="w-24 h-24 text-valentine-600 fill-valentine-600 animate-ping" />
            </div>

            <h1 className="font-pacifico text-5xl text-valentine-600 mb-8 leading-tight">
                Will you be my Valentine?
            </h1>

            <h3 className="font-pacifico text-xl text-valentine-600 mb-8 leading-tight">
                (please say yes)
            </h3>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-10">
                <button
                    onClick={onNext}
                    className="bg-green-500 hover:bg-green-600 text-white text-2xl font-bold py-4 px-12 rounded-full shadow-xl transform transition-all hover:scale-110 active:scale-95"
                >
                    YES! ❤️
                </button>

                <button
                    ref={noBtnRef}
                    onMouseEnter={handleNoHover}
                    onClick={handleNoClick}
                    className="bg-gray-400 hover:bg-gray-500 text-white text-xl font-bold py-3 px-8 rounded-full shadow-md transition-all absolute md:static"
                    style={{ transition: "background-color 0.3s" }} // Only transition color, let GSAP handle position
                >
                    {noBtnText}
                </button>
            </div>
        </div>
    );
}
