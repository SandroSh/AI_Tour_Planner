import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-6xl font-bold text-primary">GPTGenius</h1>
          <p className="py-6 text-lg leading-loose">
            GPTGENIUS: Your AI language companion, powered by AI, it enhances
            your conversations, content createion, and more!
          </p>
          <Link href="/chat" className="btn btn-secondary">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
