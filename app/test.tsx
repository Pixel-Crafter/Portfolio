"use client";

import BackgroundAnimation from "@/components/BackgroundAnimation";
import AnimatedProgress from "@/components/AnimatedProgress";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative overflow-hidden">
      <div
        className="flex flex-col md:flex-row items-center justify-center w-full h-full bg-cover bg-center"
        style={{ backgroundColor: "#1C1B22" }}
      >
        {/* LEFT SECTION */}
        <div className="pl-6 pr-6 md:pl-20 md:pr-0 pb-20 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px] text-center md:text-left">
          <h1 className="text-[32px] sm:text-[42px] md:text-[50px] text-white font-semibold leading-tight">
            Make Anything Possible with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
              {" "}
              Web Development
            </span>
          </h1>

          <p className="text-gray-300 text-sm sm:text-base md:text-lg hidden md:block">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
            tenetur nesciunt beatae, nobis excepturi architecto deleniti
            molestiae, fugit quae unde ipsam sint nihil at autem molestias,
            eligendi deserunt saepe nemo!
          </p>

          {/* Desktop Buttons */}
          <div className="hidden md:flex flex-col md:flex-row gap-5">
            <Link
              href="/my-skills"
              className="rounded-[20px] group relative bg-blue-700 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] bg-white inset-0 opacity-0 group-hover:opacity-20 transition-opacity" />
              My Skills
            </Link>

            <Link
              href="/my-projects"
              className="rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] bg-white inset-0 opacity-0 group-hover:opacity-20 transition-opacity" />
              My Projects
            </Link>

            <Link
              href="/contact-me"
              className="rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] bg-white inset-0 opacity-0 group-hover:opacity-20 transition-opacity" />
              Contact Me
            </Link>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="w-[80%] sm:w-[60%] md:w-[40%] mx-auto flex flex-col items-center justify-center px-4 md:px-0">
          <h1 className="text-white text-[28px] sm:text-[36px] md:text-[40px] text-center font-bold mb-2">
            Under Development
          </h1>
          <AnimatedProgress />
        </div>

        {/* Background Animation */}
        <div className="absolute right-5 sm:right-20 md:right-40 w-[80%] sm:w-[55%] md:w-[45%]">
          <BackgroundAnimation />
        </div>
      </div>

      {/* MOBILE BUTTONS */}
      <div className="absolute flex bottom-10 z-[20] right-0 left-0 flex-col md:hidden gap-4 items-center px-4">
        <Link
          href="/my-skills"
          className="rounded-[20px] bg-blue-500 px-5 py-3 text-base sm:text-lg text-white w-full max-w-[200px] text-center"
        >
          My Skills
        </Link>
        <Link
          href="/my-projects"
          className="rounded-[20px] bg-transparent border border-white px-5 py-3 text-base sm:text-lg text-white w-full max-w-[200px] text-center"
        >
          My Projects
        </Link>
        <Link
          href="/contact-me"
          className="rounded-[20px] bg-transparent border border-white px-5 py-3 text-base sm:text-lg text-white w-full max-w-[200px] text-center"
        >
          Contact Me
        </Link>
      </div>

      <footer></footer>
    </main>
  );
}