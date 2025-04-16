import React from "react";
import GenerateFormInput from "./GenerateFormInput";
import { Button } from "./ui/button";

type SuggestionBtnTextType = {
  label: String;
  text: String;
};

const suggestionBtnText: SuggestionBtnTextType[] = [
  {
    label: "Job Application Form",
    text: "Develop a basic job application form that serves as a one-page solution form collecting essential information from applicants.",
  },
  {
    label: "Event Registration Form",
    text: "Create a form for people to register for an upcoming tech conference.",
  },
  {
    label: "Customer Feedback Form",
    text: "Generate a feedback form for an online store to collect opinions after purchase.",
  },
  {
    label: "Product Waitlist Form",
    text: "Build a waitlist form for users interested in a new product launch.",
  },
  {
    label: "Appointment Booking",
    text: "Create a form to schedule appointments for a clinic or personal service.",
  },
  {
    label: "Contact Us Form",
    text: "Design a simple contact form for a business website.",
  },
  {
    label: "Survey Form",
    text: "Generate a form to gather survey responses on a specific topic or product."
  },
  {
    label: "Order Form",
    text: "Create an order form for customers to purchase products or services online."
  }
];

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
      <GenerateFormInput />
      <div className="grid grid-cols-4 gap-3">
        {suggestionBtnText.map(
          (suggestion: SuggestionBtnTextType, index: number) => (
            <Button className="rounded-full h-10" variant={"outline"}>{suggestion.label}</Button>
          )
        )}
      </div>
    </section>
  );
};

export default HeroSection;
