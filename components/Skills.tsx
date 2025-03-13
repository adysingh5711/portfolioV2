import Image from "next/image";
import Marquee from "react-fast-marquee";
import skillsData from "@/data/skills";
import { skillsImage } from "./ui/SkillsImage";
import { useState } from "react";

const Skills = () => {
  const [showAll, setShowAll] = useState(false);

  const SkillCard = ({ skill }: { skill: string }) => (
    <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer">
      <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
        <div className="flex -translate-y-[1px] justify-center">
          <div className="w-3/4">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 p-6">
          <div className="h-8 sm:h-10">
            <Image
              src={skillsImage(skill)?.src || "/default-image.png"}
              alt={skill}
              width={40}
              height={40}
              className="h-full w-auto rounded-lg"
            />
          </div>
          <p className="text-white text-sm sm:text-lg">{skill}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div id="skills" className="relative z-50 border-[#25213b]">
      {/* <div
      id="skills"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div> */}

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          {/* <span className="w-24 h-[2px] bg-[#1a1443]"></span> */}
          {/* <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Skills
          </span> */}
          <h1 className="heading">
            <span className="text-purple">Skills</span>
          </h1>
          {/* <span className="w-24 h-[2px] bg-[#1a1443]"></span> */}
        </div>
      </div>

      <div className="w-full my-12">
        {!showAll ? (
          <Marquee
            gradient={false}
            speed={80}
            pauseOnHover={true}
            pauseOnClick={true}
            delay={0}
            play={true}
            direction="left"
          >
            {skillsData.map((skill, id) => (
              <SkillCard key={id} skill={skill} />
            ))}
          </Marquee>
        ) : (
          <div className="flex flex-wrap justify-center gap-4 px-4">
            {skillsData.map((skill, id) => (
              <SkillCard key={id} skill={skill} />
            ))}
          </div>
        )}
      </div>

      <div className="flex justify-center mt-8 mb-12">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-3 rounded-lg bg-[#1f223c] text-white hover:bg-violet-600 transition-all duration-300 transform hover:scale-105 border border-violet-500"
        >
          {showAll ? "Show Less" : "View All Skills"}
        </button>
      </div>
    </div>
  );
};

export default Skills;
