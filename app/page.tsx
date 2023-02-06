import React from "react";
import MePage from "./(me)/page";
import Projects from "./(me)/projects";
import QNA from "./(me)/qna";

const page = () => {
  return (
    <>
      <MePage />
      <div className="bg-primary-600 mx-8 lg:mr-32 h-[1px]"></div>
      <Projects />
      <div className="bg-primary-600 mx-8 lg:mr-32 h-[1px]"></div>
      <QNA />
    </>
  );
};

export default page;
