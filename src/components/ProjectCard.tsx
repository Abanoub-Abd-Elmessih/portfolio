import Image from "next/image";
import { IconType } from "react-icons";
import { Button } from "./Button";
import { LuMoveUpRight } from "react-icons/lu";
import * as ScrollArea from "@radix-ui/react-scroll-area";

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
    <div className="border shadow-md max-w-md text-light_gray p-3 rounded-lg">
      <a href={image} target="_blank">
        <Image
          src={image}
          alt={title}
          width={1000}
          height={1000}
          className="w-full object-cover rounded-lg"
        />
      </a>
      <h3 className="font-semibold mt-4 text-xl mb-3">{title}</h3>
      <ScrollArea.Root className="h-24 overflow-hidden rounded-md border">
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
        <Button>
          <a
            href={liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            Live Demo <LuMoveUpRight />
          </a>
        </Button>
      )}
    </div>
  );
};

// const [showText, setShowText] = useState(false);
// const textRef = useRef<HTMLDivElement>(null);

{
  /* <div
ref={textRef}
className="overflow-hidden transition-all duration-300 ease-in-out"
style={{
  maxHeight: showText ? `${textRef.current?.scrollHeight}px` : "48px",
}}
>
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, quos
  assumenda dicta ducimus dolore eum nostrum et placeat iste
  perspiciatis repellendus? Quos laboriosam architecto delectus eveniet
  blanditiis tenetur placeat ea!
</p>
</div>
<button
onClick={() => setShowText(!showText)}
className="text-blue-500 focus:outline-none mt-2"
aria-expanded={showText}
>
{showText ? "Show Less" : "Show More"}
</button> */
}
