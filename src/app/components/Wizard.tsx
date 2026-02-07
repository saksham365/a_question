"use client";

import { useState, useEffect } from "react";
import { gsap } from "gsap";
import Step1Welcome from "./steps/Step1Welcome";
import Step2Gallery from "./steps/Step2Gallery";
import Step2Appreciation from "./steps/Step2Appreciation";
import Step3Funny from "./steps/Step3Funny";
import Step4Buildup from "./steps/Step4Buildup";
import Step5Question from "./steps/Step5Question";
import Step6Success from "./steps/Step6Success";
import MusicPlayer from "./MusicPlayer";

export default function Wizard() {
    const [currentStep, setCurrentStep] = useState(1);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const nextStep = () => {
        // Basic fade out before switching?? For now just switch and animate in.
        setCurrentStep((prev) => prev + 1);
    };

    if (!isClient) return null; // Prevent hydration mismatch

    return (
        <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Particles or Floating Hearts could go here */}
            <MusicPlayer />

            <div className={`w-full z-10 transition-all duration-500 ease-in-out ${currentStep === 2 ? 'max-w-[90vw]' : 'max-w-lg'}`}>
                {currentStep === 1 && <Step1Welcome onNext={nextStep} />}
                {currentStep === 2 && <Step2Gallery onNext={nextStep} />}
                {currentStep === 3 && <Step2Appreciation onNext={nextStep} />}
                {currentStep === 4 && <Step3Funny onNext={nextStep} />}
                {currentStep === 5 && <Step4Buildup onNext={nextStep} />}
                {currentStep === 6 && <Step5Question onNext={nextStep} />}
                {currentStep === 7 && <Step6Success />}
            </div>
        </div>
    );
}
