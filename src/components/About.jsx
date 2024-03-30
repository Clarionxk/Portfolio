import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="-mr-6 pt-60">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        My goal is to revolutionize businesses by automating processes, reducing Workload, and enhancing efficiency through innovative RPA solutions. I am passionate about leveraging technology to streamline operations and drive sustainable growth for organizations.
        </p>

        <br />

        <p className="text-xl">
        Developed a sophisticated trading bot using Python, automating trades and providing valuable insights to optimize investment strategies for the company.
Designed and built a dynamic website for Avalanche Tech, incorporating AI content generation techniques to enhance user engagement and experience.
Implemented AI models for on-premise and local use, significantly reducing costs and labor in the research and analytics process while improving efficiency and accuracy.
        </p>
      </div>
    </div>
  );
};

export default About;
