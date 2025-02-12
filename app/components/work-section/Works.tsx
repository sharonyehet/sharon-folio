import { useView } from "@/contexts/ViewContext";
import { useEffect } from "react";
import Title from "../ui/Title";
import FolioCard from "./FolioCard";

// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import Timeline from "./Timeline";

export default function Works() {
  const { setSectionInView } = useView();

  const works = [
    {
      title: "Valuing IP Admin Portal",
      liveLink: "https://admin.valuingip.com",
      about:
        "Valuing IP is a platform focused on assisting businesses in valuing their intellectual property (IP) which provides users with a straightforward process to submit IP valuation requests. This website is an admin portal for Valuing IP which includes features such as User Management, Discount Management, Analytics & Reporting, and System Configuration.",
      stack: ["angular", "typescript", "bootstrap"],
    },
    {
      title: "GSC E-Payment",
      liveLink: "https://epaymentwebapp.gsc.com.my/",
      about:
        "The website is part of Golden Screen Cinemas (GSC), primarily for managing online ticket purchases. It offers users the ability to view showtimes for various movies, book tickets for different cinema locations, and select specific experiences (like IMAX or 4DX). It also provides payment options for completing ticket transactions. The platform integrates features for movie selection, seat booking, merchandise purchasing and payment, serving as a convenient online tool for cinema-goers.",
      stack: ["angular", "typescript", "tailwindcss", "SEO"],
    },
    {
      title: "Credit Bureau Malaysia",
      liveLink: "https://cbmplus.creditbureau.com.my/",
      about:
        "The website is operated by Credit Bureau Malaysia (CBM). It offers a platform for individuals and businesses to access their credit reports, manage their credit data, and monitor credit-related information. The service is designed to help users understand their credit history and improve their financial decisions by offering reports, alerts, and tools related to credit scoring.",
      stack: ["angular", "typescript", "tailwindcss"],
    },
    {
      title: "Money Tracker",
      liveLink: "https://money-tracker-app-rust.vercel.app",
      gitLink: "https://github.com/sharonyehet/money-tracker-app.git",
      about:
        "This website is a customizable personal finance tool with a built-in calculator for quick financial calculations. It allows users to categorize their expenses and income, helping them track and analyze their spending and earnings more efficiently.",
      stack: ["reactjs", "javascript", "tailwindcss"],
    },
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("work");
  }, [inView, setSectionInView]);

  return (
    <section
      className="flex flex-col gap-6 md:gap-10 pt-[110px]"
      ref={ref}
      id="work"
    >
      <Title>Projects</Title>
      {works.map((work, index) => (
        <FolioCard
          key={index}
          title={work.title}
          gitLink={work.gitLink}
          liveLink={work.liveLink}
          about={work.about}
          stack={work.stack}
        />
      ))}

      <Timeline />
    </section>
  );
}
