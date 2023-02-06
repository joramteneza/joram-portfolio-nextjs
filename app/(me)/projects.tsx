import Image from "next/image";
import React from "react";
import Button from "../../components/Button";
import Primary from "../../components/Button/Primary";
import Secondary from "../../components/Button/Secondary";
import ProjectCard from "../../components/ProjectsCard";
import me from "../../images/me.png";

const Projects = () => {
  return (
    <div className="flex flex-col mx-8 mr-8 mb-8 lg:mt-32 col-span-1 justify-between mt-5 md:mt-24">
      <span className="text-black font-semibold tracking-tight text-8xl mb-6">
        <span className={`text-7xl md:text-[80px]`}>Works</span>
      </span>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
        <ProjectCard link="https://www.ticketnation.ph/">
          <div className="grid grid-cols-2 h-full">
            <div className="flex items-center h-full">
              <Image src={me} alt="project-logo" width={100} height={100} />
            </div>
            <div className="flex flex-col justify-between text-black">
              <div className="flex flex-col">
                <span className="text-2xl font-semibold">
                  Front End Web Developer
                </span>
                <span className="text-xl">Ticketnation Philippines</span>
              </div>
              <span className="text-sm">2022 - present</span>
            </div>
          </div>
        </ProjectCard>
      </div>

      <div className="flex flex-col xs:flex-row mt-20 gap-10">
        <a href="https://read.cv/kymngye" target="_blank">
          <Button
            variant="primary"
            className="flex px-6 py-2 rounded-3xl transition ease-in-out delay-75 hover:-translate-1 hover:scale-105 duration-300"
          >
            <span>READ CV</span>
          </Button>
        </a>
        <a href="https://read.cv/kymngye" target="_blank">
          <Button
            variant="secondary"
            className="flex px-6 py-2 rounded-3xl sm:w-[300px] transition ease-in-out delay-75 hover:-translate-1 hover:scale-105 duration-300"
          >
            <span>RESUME</span>
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Projects;
