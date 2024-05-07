import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaReact,
  FaNodeJs,
  FaFileAlt,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiNextdotjs,
  SiFlask,
  SiKotlin,
  SiGit,
  SiAmazon,
  SiGooglecloud,
  SiAmazonaws,
} from "react-icons/si";

export default function Home() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-4"
      style={{
        background: "radial-gradient(circle at center, #4b4b4b, #120438 100%)",
      }}
    >
      <div
        className="bg-gray-900 text-white shadow-2xl rounded-lg p-8 w-full max-w-lg"
        style={{
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1), 0 1px 3px rgba(0,0,0,0.6)",
        }}
      >
          <img
            src="/me.jpeg"
            alt="Orlando LaCrue"
            className="h-32 mx-auto border-4 border-white"
          />
          <h1 className="text-center text-2xl font-bold mt-4">
            Orlando LaCrue
          </h1>
          <p className="text-center text-gray-300 mt-2">
            Senior Full Stack Software Engineer
          </p>
          <div className="flex justify-center items-center mt-6 space-x-4">
            <a
              href="https://www.linkedin.com/in/orlando-l-2bb408242/"
              className="text-blue-300 hover:text-blue-500"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://github.com/Orlaando-dev"
              className="text-gray-300 hover:text-gray-500"
            >
              <FaGithub size={30} />
            </a>
            <a
              href="/resume.pdf"
              className="text-gray-300 hover:text-gray-500"
            >
              <FaFileAlt size={30} />
            </a>
          </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-center items-center">
            Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <SiTypescript title="TypeScript" size={30} />
            <SiJavascript title="JavaScript" size={30} />
            <SiPython title="Python" size={30} />
            <SiKotlin title="Kotlin" size={30} />
            <SiNextdotjs title="Next.js" size={30} />
            <SiFlask title="Flask" size={30} />
            <FaReact title="React/React Native" size={30} />
            <SiGit title="Git" size={30} />
            <SiAmazonaws title="AWS" size={30} />
            <SiGooglecloud title="AWS" size={30} />
          </div>
        </div>
      </div>
    </div>
  );
}
