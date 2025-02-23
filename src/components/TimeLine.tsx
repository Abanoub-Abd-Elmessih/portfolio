import { LuBriefcaseBusiness } from "react-icons/lu";

export const TimeLine = () => {
  return (
    <div className="mt-5 ps-3">
      <ol className="relative border-s border-gray-200">
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-8 h-8 bg-black rounded-full -start-4 text-white">
            <LuBriefcaseBusiness />
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-light_gray">
            COPALEX
            <span className="bg-light_gray text-white text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm ms-3">
              Latest
            </span>
          </h3>
          <p className="font-semibold mb-3 text-light_gray">Internship</p>
          <time className="block mb-2 text-sm font-normal leading-3 text-light_gray">
            1 January 2025
          </time>
          <p className="mb-4 text-base font-normal text-light_gray/70">
            Gaining hands-on experience in front-end development by working on
            real-world projects, implementing UI/UX designs, and collaborating
            with a team to enhance web application performance using modern
            frameworks and best practices.
          </p>
        </li>
      </ol>
    </div>
  );
};
