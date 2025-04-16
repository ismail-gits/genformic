import React from "react";
import GenerateFormInput from "./GenerateFormInput";

const HeroSection = () => {
  return (
    <section>
      {/* Glow Effect, Headline and Sub-Headline */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 blur-2xl opacity-50"></div>
        <div className="container mx-auto text-center relative">
          <h1 className="text-4xl font-bold">
            Unlock the Future of Form Creation with AI
          </h1>
          <p className="mt-4 text-lg">
            Genformic uses AI to create, share, and automate forms effortlessly.
            Just provide a prompt, and let AI handle the rest
          </p>
        </div>
      </div>
      {/* Create Input Field */}
      <GenerateFormInput/>
    </section>
  );
};

export default HeroSection;
