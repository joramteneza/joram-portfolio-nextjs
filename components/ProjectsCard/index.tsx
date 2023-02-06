import React from "react";

interface ComponentProps extends React.HTMLAttributes<HTMLButtonElement> {
  link: string;
}
const ProjectCard: React.FC<ComponentProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <a
      className="w-full cursor-pointer bg-white bg-opacity-30 hover:bg-opacity-100 rounded-2xl border hover:border-none border-primary-600 min-h-[250px] min-w-[200px] p-5"
      href={rest.link}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
};

export default ProjectCard;
