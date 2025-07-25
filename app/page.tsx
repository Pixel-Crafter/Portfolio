"use client"

import BackgroundAnimation from "@/components/BackgroundAnimation";
import AnimatedProgress from "@/components/AnimatedProgress";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div className="flex items-center w-full h-full bg-cover bg-center" style={{backgroundColor: "#1C1B22"}}>
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[50px] text-white font-semibold">
            Make Anything Possible with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
              {" "}
              Web Development
            </span>
          </h1>
          <p className="text-gray-300 hidden md:block">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda tenetur nesciunt beatae, nobis excepturi architecto deleniti molestiae, fugit quae unde ipsam sint nihil at autem molestias, eligendi deserunt saepe nemo!
          </p>
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link
              href="/my-skills"
              className="rounded-[20px] group relative bg-blue-700  px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px]  bg-white inset-0 opacity-0 group-hover:opacity-20" />
              My Skills
            </Link>
            <Link
              href="/my-projects"
              className="rounded-[20px] group relative bg-transparent px-5 border border-white py-3 text-lg text-white max-w-200px"
            >
              <div className="absolute rounded-[20px]  bg-white inset-0 opacity-0 group-hover:opacity-20" />
              My Projects
            </Link>
            <Link
              href="/contact-me"
              className="rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
            >
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20" />
              Contact Me
            </Link>
          </div>          
        </div>

        <div className="w-[40%] mx-auto">      
          <h1 className="text-white text-[40px] text-center"><b>Under Development</b></h1>
          <AnimatedProgress />
        </div>
        
        <div className="absolute right-40 w-[45%]">
          <BackgroundAnimation />
        </div>
      </div>

      <div className="absolute flex bottom-10 z-[20] right-5 flex-5 flex-col md:hidden gap-5">
        <Link
          href="/my-skills"
          className="rounded-[20px] bg-blue-500 px-5 py-3 text-lg text-white max-w-[200px]"
        >
          My Skills
        </Link>
        <Link
          href="/my-projects"
          className="rounded-[20px] bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
        >
          My Projects
        </Link>
        <Link
          href="/contact-me"
          className="rounded-[20px] bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]">
            Contact Me
        </Link>
      </div>
      
      <footer>
        
      </footer>
    </main>
  );
}