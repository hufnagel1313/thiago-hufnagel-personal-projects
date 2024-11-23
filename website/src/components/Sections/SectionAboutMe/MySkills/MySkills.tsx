import React from "react";

const MySkills: React.FC = () => {
  const MainSkills = [
    { name: ".C#", experience: "15+" },
    { name: ".NET", experience: "15+" },
    { name: ".NET Core", experience: "8" },
    { name: "SQL Server", experience: "15+" },
    { name: "MySQL", experience: "15+" },
    { name: "Entity Framework", experience: "10" },
    { name: "Vanilla JS", experience: "15+" },
    { name: "Angular 2+", experience: "8" },
    { name: "ReactJs", experience: "4" },
    { name: "HTML5 & CSS3", experience: "15+" },
    { name: "Azure Devops", experience: "6" },
    { name: "Docker", experience: "5" },
    { name: "Kubernetes", experience: "3" },
  ];

  const otherSkills = [
    { name: "MVC" },
    { name: "Webforms" },
    { name: "Razor" },
    { name: "Blazor" },
    { name: "Python" },
    { name: "Django" },
    { name: "Flask" },
    { name: "NodeJs" },
    { name: "ExpressJs" },
    { name: "MongoDB" },
    { name: "PostgreSQL" },
    { name: "Redis" },
    { name: "Kafka" },
    { name: "Nginx" },
    { name: "Azure Functions" },
  ];

  return (
    <div className="px-4 py-5 lg:py-6 lg:px-6 rounded-2xl md:px-8 bg-flashWhite dark:bg-metalBlack">
      <div className="mb-5 text-sm font-medium text-black dark:text-white">
        Main Skills{" "}
        <span className="text-xs dark:text-white/70">
          (years of experience)
        </span>
      </div>
      <div className="inline-flex flex-wrap items-center gap-2 mb-5 text-sm md:gap-4">
        {MainSkills.map((skill) => (
          <span
            key={skill.name}
            className="inline-block px-3.5 py-2 transition duration-300 border border-dashed text-black dark:text-white/70 border-platinum dark:border-greyBlack rounded-3xl md:px-5 md: md:py-2 hover:text-theme dark:hover:text-white"
          >
            {skill.name} ({skill.experience})
          </span>
        ))}
      </div>
      <div className="mb-5 text-sm font-medium text-black dark:text-white">
        Other Skills
      </div>
      <div className="inline-flex flex-wrap items-center gap-2 text-sm md:gap-4">
        {otherSkills.map((skill) => (
          <span
            key={skill.name}
            className="inline-block px-3.5 py-2 transition duration-300 border border-dashed text-black dark:text-white/70 border-platinum dark:border-greyBlack rounded-3xl md:px-5 md: md:py-2 hover:text-theme dark:hover:text-white"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MySkills;
