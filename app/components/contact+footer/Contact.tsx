"use client";
import { useView } from "@/contexts/ViewContext";
import { Syne } from "next/font/google";
import { useEffect, useState } from "react";

// @ts-ignore
import { Icon } from "@iconify/react/dist/iconify.js";
import "intersection-observer";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import "react-toastify/dist/ReactToastify.css";
import AnimatedTitle from "../ui/AnimatedTitle";

const syne = Syne({ subsets: ["latin"] });

export default function Contact() {
  const { setSectionInView } = useView();
  const [viewCount, setViewCount] = useState<number>(0);
  const [formDisplay, setFormDisplay] = useState<boolean>(false);

  const { ref, inView } = useInView({
    threshold: 0.25,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("contact");
  }, [inView, setSectionInView]);

  useEffect(() => {
    if (inView) {
      setViewCount((c) => c + 1);
    }
  }, [inView, setSectionInView]);

  return (
    <>
      <section
        ref={ref}
        id="contact"
        style={{
          transform: `${
            formDisplay
              ? "perspective(300px) rotateY(-180deg)"
              : "perspective(300px) rotateY(-360deg)"
          }`,
        }}
        className={`overflow-y-hidden card mt-12 sm:mt-16 md:mt-[100px] px-6 py-4 md:py-10 lg:py-12 flex flex-col lg:items-center lg:flex-row justify-between rounded-2xl bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f]`}
      >
        <div
          className={` ${
            syne.className
          } flex flex-col gap-10 w-full duration-1000 ${
            formDisplay && "opacity-0"
          }`}
        >
          <div className="inline w-full">
            <AnimatedTitle
              wordSpace={"mr-2 md:mr-[12px]"}
              charSpace={"mr-[0.001em]"}
              className="text-xl sm:text-2xl md:text-[32px] lg:text-[40px] font-bold"
            >
              LET&#39;S CONNECT!
            </AnimatedTitle>
            {/* <Link href="#footer" data-no-blobity>
                <span
                  data-blobity
                  onClick={() => {
                    setFormDisplay(!formDisplay);
                  }}
                  className="sm:mt-0 text-xl sm:text-2xl md:text-[32px] w-fit underline lg:text-[40px] font-bold leading-tight hidden sm:block lg:hidden"
                >
                  CONTACT ME
                </span>
              </Link> */}
          </div>
          {/* <Link href="#footer">
              <button
                className={`text-base ml-auto mt-6 lg:mt-0 lg:ml-0 block sm:hidden lg:block lg:text-2xl font-semibold px-4 py-2 md:px-3 lg:py-4 rounded-xl border-2 border-white leading-none ${
                  viewCount <= 1 && "duration-500 delay-[1500ms]"
                } ${
                  inView
                    ? " opacity-100 translate-y-0"
                    : "opacity-0 translate-y-16"
                }`}
                data-blobity-radius="12"
                onClick={() => {
                  setFormDisplay(!formDisplay);
                }}
              >
                CONTACT&nbsp;ME
              </button>
            </Link> */}
          <div className="gap-5 text-xl grid grid-cols-1 md:grid-cols-2">
            <div className="flex gap-x-2 items-center">
              <Icon icon="hugeicons:telephone" />
              <span>019-8798288</span>
            </div>
            <div className="flex gap-x-2 items-center h-[1.2em]">
              <Icon icon="hugeicons:mail-01" width={"1.2em"} height={"1.2em"} />
              <Link href="mailto:chingwee114@gmail.com">
                chingwee114@gmail.com
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
