"use client";
import React from "react";

interface CommitmentItem {
  title: string;
  icon: string;
}

interface CommitmentProps {
  cityName: string;
  commitments: CommitmentItem[];
}

const Commitment: React.FC<CommitmentProps> = ({ cityName, commitments }) => {
  return (
    <section className="max-w-screen-xl mx-auto py-12 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-darkGreen mb-6 text-center">
        Our Commitment to {cityName}
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        {commitments.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center text-center w-40"
          >
            <div className="w-16 h-16 mb-2">
              <img
                src={item.icon}
                alt={item.title}
                className="object-contain w-full h-full"
              />
            </div>
            <p className="text-darkGreen font-semibold">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Commitment;
