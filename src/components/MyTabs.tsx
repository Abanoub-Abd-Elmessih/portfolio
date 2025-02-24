import * as Tabs from "@radix-ui/react-tabs";
import { IconType } from "react-icons";
import { FaBootstrap, FaReact } from "react-icons/fa";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/data/ProjectData";
import { LuArrowDown } from "react-icons/lu";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

export type Tab = {
  label: string;
  icon: IconType;
  value: string;
  projectIds: number[];
};

const tabData: Tab[] = [
  {
    label: "All",
    icon: LuArrowDown,
    value: "all",
    projectIds: projects.map((p) => p.id),
  },
  {
    label: "React",
    icon: FaReact,
    value: "react",
    projectIds: [1, 2, 5, 6, 7],
  },
  {
    label: "Next.JS",
    icon: RiNextjsFill,
    value: "next",
    projectIds: [3, 4, 19],
  },
  {
    label: "Tailwind CSS",
    icon: RiTailwindCssFill,
    value: "tailwind",
    projectIds: [1, 2, 3, 4, 5, 6, 13],
  },
  {
    label: "Bootstrap",
    icon: FaBootstrap,
    value: "bootstrap",
    projectIds: [7, 9, 12, 14, 15, 16, 17, 18],
  },
];

export function MyTabs() {
  return (
    <Tabs.Root defaultValue="all" className="w-full mx-auto">
      {/* Tabs List */}
      <Tabs.List className="flex border-y flex-wrap text-sm justify-center xl:justify-start md:text-lg">
        {tabData.map((tab) => (
          <Tabs.Trigger
            key={tab.value}
            value={tab.value}
            className="flex items-center gap-2 px-4 py-2 transition-all border border-transparent text-light_gray/80 data-[state=active]:text-black data-[state=active]:border-b-black hover:text-gray-700"
          >
            <tab.icon className="text-xl" />
            {tab.label}
          </Tabs.Trigger>
        ))}
      </Tabs.List>

      {/* Tabs Content */}
      <div className="py-4">
        {tabData.map((tab) => (
          <Tabs.Content key={tab.value} value={tab.value} className="space-y-3">
            {tab.projectIds.length > 0 ? (
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {projects
                  .filter((project) => tab.projectIds.includes(project.id))
                  .map((project) => (
                    <li key={project.id}>
                      <ProjectCard
                        description={project.description}
                        image={project.image}
                        title={project.title}
                        tools={project.tools}
                        liveDemo={project.liveDemo}
                      />
                    </li>
                  ))}
              </ul>
            ) : (
              <p className="text-gray-600">No projects available.</p>
            )}
          </Tabs.Content>
        ))}
      </div>
    </Tabs.Root>
  );
}
