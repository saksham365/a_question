"use client";

import { useState, useRef, useEffect } from "react";
import { Music, VolumeX } from "lucide-react";

export default function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        // Correctly reference the file in the public folder
        // Note: URL encoding for spaces and special chars is handled by browser usually, but safe to use encodeURI
        const audioSrc = "/Tera Rastaa Chhodoon Na Chennai Express 320 Kbps.mp3";

        audioRef.current = new Audio(audioSrc);
        audioRef.current.loop = true;
        audioRef.current.volume = 0.5;

        // Attempt to play immediately
        const playPromise = audioRef.current.play();

        if (playPromise !== undefined) {
            playPromise.then(() => {
                setIsPlaying(true);
            }).catch(error => {
                console.log("Autoplay prevented by browser. Waiting for interaction.", error);
                setIsPlaying(false);
            });
        }

        // Add a global click listener to start music if not playing (one-time)
        const handleInteraction = () => {
            if (audioRef.current && audioRef.current.paused) {
                audioRef.current.play()
                    .then(() => setIsPlaying(true))
                    .catch(e => console.log("Play failed:", e));
            }
            // Remove listener after first successful play (or attempt) is cleaner, 
            // but user might toggle it off manually so we'll leave it to the toggle button 
            // and just use this for the initial "unblock".
            // Actually, let's remove it to avoid fighting the user if they turn it off.
            document.removeEventListener('click', handleInteraction);
        };

        document.addEventListener('click', handleInteraction);

        return () => {
            document.removeEventListener('click', handleInteraction);
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        }
    }, []);

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(e => console.log("Audio play failed:", e));
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <button
            onClick={togglePlay}
            className="fixed top-4 right-4 z-50 bg-white/50 backdrop-blur-sm p-3 rounded-full hover:bg-white/80 transition-all shadow-md"
        >
            {isPlaying ? (
                <Music className="w-6 h-6 text-valentine-600 animate-spin-slow" />
            ) : (
                <VolumeX className="w-6 h-6 text-gray-500" />
            )}
        </button>
    );
}
