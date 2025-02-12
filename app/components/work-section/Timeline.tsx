"use client";
import { Syne } from "next/font/google";
import Title from "../ui/Title";
import TimelineItem from "./TimelineItem";

const syne = Syne({ subsets: ["latin"] });

const TimelineData = [
  {
    companyImg: "/agmo.png",
    jobTitle: "Advanced Software Developer",
    company: "Agmo Tech Sdn Bhd",
    jobType: "Full Time",
    duration: "Apr 2024 - Sept 2024",
    stuffIDid: [
      "Backend Development using NestJS and PostgreSQL, with integrated Swagger for automated API documentation, enhancing backend efficiency and clarity.",
      "Set up Azure CI/CD Pipelines to streamline continuous integration and deployment processes, ensuring rapid and reliable delivery of updates.",
      "Implemented Unit Testing using Karma and Jasmine to ensure the reliability, maintainability, and quality of the project codebase.",
    ],
  },
  {
    companyImg: "/agmo.png",
    jobTitle: "Software Developer",
    company: "Agmo Tech Sdn Bhd",
    jobType: "Full Time",
    duration: "Nov 2022 - Mar 2024",
    stuffIDid: [
      "Developed SEO-optimized, User-Friendly, and Responsive Websites based on client requirements using Angular/AngularJS within an Agile framework, ensuring a seamless experience across devices and improved search engine visibility.",
      "Explored and Conducted Proof of Concept (POC) with OutSystems, evaluating its capabilities for rapid application development, and subsequently developed a fully-functional website utilizing OutSystems to streamline the development process and accelerate time-to-market.",
    ],
  },
  {
    companyImg: "/hitachi-logo.jpg",
    jobTitle: "Application Engineer",
    company: "Hitachi Digital Host Sdn Bhd",
    jobType: "Full Time",
    duration: "Mar 2022 - Sept 2022",
    stuffIDid: [
      "Developed Performance Test Scripts for over 20 modules using Apache JMeter, ensuring optimal scalability and performance under various load conditions.",
      "Collaborated with UI/UX Team to create a robust React-based design system using TypeScript, Sass, Tailwind CSS, and Storybook, streamlining the development process and ensuring consistent UI across applications.",
      "Contributed to the Development of a Loan Lifecycle Management System using ReactJS, translating design prototypes into a dynamic web application, and collaborating closely with the backend team on seamless API integration. Utilized Mirage JS for API mocking to simulate real-world data interactions during development.",
      "Wrote Comprehensive Unit Tests with Jest and React Testing Library, maintaining a high standard of code quality and ensuring at least 95% test coverage, fostering a reliable and maintainable codebase.",
    ],
  },
];

export default function Timeline() {
  return (
    <div className="mt-10 md:mt-[110px]">
      <Title> Work experience</Title>

      {/* THE THING, AFTER WHICH I WOULD DETERMINE THE HEIGHT */}
      <div className="flex mt-6 gap-4 pl-3">
        <div className="w-3 h-auto bg-gradient-to-b from-white to-transparent" />

        <div className="flex flex-col gap-10">
          {TimelineData.map((item, index) => (
            <TimelineItem
              key={index}
              companyImg={item.companyImg}
              jobTitle={item.jobTitle}
              company={item.company}
              jobType={item.jobType}
              duration={item.duration}
              stuffIDid={item.stuffIDid}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
