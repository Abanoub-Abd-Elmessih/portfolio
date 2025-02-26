import Image from "next/image";
import { IconType } from "react-icons";
import { LuMoveUpRight } from "react-icons/lu";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { MotionDiv } from "./MotionDiv";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tools: IconType[];
  liveDemo: string;
}

export const ProjectCard = ({
  image,
  title,
  tools,
  description,
  liveDemo,
}: ProjectCardProps) => {
  return (
    <MotionDiv
      className="border-2 border-black/70 shadow-lg max-w-lg text-light_gray p-3 rounded-lg motion-div"
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        type: "spring",
        stiffness: 100,
      }}
      viewport={{ once: true }}
    >
      <a href={image} target="_blank">
        <Image
          src={image}
          alt={title}
          width={1000}
          height={1000}
          className="w-full object-cover rounded-lg border-2 p-1 border-gray-300"
        />
      </a>
      <h3 className="font-semibold mt-4 text-xl mb-3">{title}</h3>
      <ScrollArea.Root className="h-24 overflow-hidden rounded-md  border-gray-300 border-2">
        <ScrollArea.Viewport className="h-full p-2">
          <p className="text-sm">{description}</p>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          orientation="vertical"
          className="w-2 bg-gray-200 rounded"
        >
          <ScrollArea.Thumb className="bg-gray-500 rounded" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>

      <div className="my-4">
        <h4 className="font-semibold text-lg">Tools I Used :</h4>
        <ul className="flex gap-3 text-2xl mt-1 p-2">
          {tools.map((Tool, index) => (
            <li
              key={index}
              className="border-2 p-2 rounded-full -m-[11px] bg-black text-white/85"
            >
              <Tool />
            </li>
          ))}
        </ul>
      </div>

      {liveDemo && (
        <a
          href={liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center w-fit gap-2 bg-black text-white text-sm px-7 py-2 rounded-md hover:bg-black/90 duration-300"
        >
          Live Demo <LuMoveUpRight />
        </a>
      )}
    </MotionDiv>
  );
};
