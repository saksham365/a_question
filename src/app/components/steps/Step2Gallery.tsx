"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export default function Step2Gallery({ onNext }: { onNext: () => void }) {
    const containerRef = useRef(null);
    const imagesRef = useRef<(HTMLDivElement | null)[]>([]);

    const images = [
        "/1.png",
        "/2.png",
        "/3.png",
        "/4.png",
        "/5.png",
    ];

    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(containerRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.5 }
        );

        // Staggered animation for images
        tl.fromTo(imagesRef.current,
            { y: 50, opacity: 0, scale: 0.8 },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                stagger: 0.1,
                duration: 0.8,
                ease: "back.out(1.2)"
            }
        );

        // Floating animation for a bit of life
        imagesRef.current.forEach((img, i) => {
            if (!img) return;
            gsap.to(img, {
                y: -5,
                rotation: i % 2 === 0 ? 1 : -1,
                duration: 2 + Math.random(),
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: Math.random()
            });
        });

    }, []);

    return (
        <div ref={containerRef} className="text-center bg-white/60 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-valentine-200 mx-4 w-full h-[80vh] flex flex-col justify-between">
            <h2 className="font-pacifico text-4xl text-valentine-600 mb-4">
                Us ❤️
            </h2>

            {/* Masonry-ish Grid Full Width */}
            <div className="grid grid-cols-4 md:grid-cols-6 grid-rows-2 gap-4 flex-grow mb-6 w-full">
                {/* Large featured item */}
                <div ref={el => { if (el) imagesRef.current[0] = el }} className="col-span-2 md:col-span-3 row-span-2 relative rounded-2xl overflow-hidden shadow-lg border-4 border-white transform hover:scale-[1.02] transition-transform duration-300">
                    <Image src={images[0]} alt="Memory 1" fill className="object-cover" />
                </div>

                {/* Smaller items */}
                <div ref={el => { if (el) imagesRef.current[1] = el }} className="col-span-2 md:col-span-3 row-span-1 relative rounded-2xl overflow-hidden shadow-lg border-4 border-white transform hover:scale-[1.02] transition-transform duration-300">
                    <Image src={images[1]} alt="Memory 2" fill className="object-cover" />
                </div>

                <div ref={el => { if (el) imagesRef.current[2] = el }} className="col-span-1 md:col-span-1 row-span-1 relative rounded-2xl overflow-hidden shadow-lg border-4 border-white transform hover:scale-[1.02] transition-transform duration-300">
                    <Image src={images[2]} alt="Memory 3" fill className="object-cover" />
                </div>
                <div ref={el => { if (el) imagesRef.current[3] = el }} className="col-span-1 md:col-span-1 row-span-1 relative rounded-2xl overflow-hidden shadow-lg border-4 border-white transform hover:scale-[1.02] transition-transform duration-300">
                    <Image src={images[3]} alt="Memory 4" fill className="object-cover" />
                </div>
                <div ref={el => { if (el) imagesRef.current[4] = el }} className="hidden md:block col-span-1 row-span-1 relative rounded-2xl overflow-hidden shadow-lg border-4 border-white transform hover:scale-[1.02] transition-transform duration-300">
                    <Image src={images[4]} alt="Memory 5" fill className="object-cover" />
                </div>
            </div>

            <div className="flex justify-center">
                <button
                    onClick={onNext}
                    className="bg-valentine-500 hover:bg-valentine-600 text-white font-bold py-3 px-10 text-xl rounded-full shadow-lg transform transition-all hover:scale-105 active:scale-95"
                >
                    Continue...
                </button>
            </div>
        </div>
    );
}
