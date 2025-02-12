import { Icon } from "@iconify/react/dist/iconify.js";
// import Link from "next/link";
import { Link } from "react-scroll";

const curYear = new Date().getFullYear();

export default function Footer() {
  return (
    <section
      id="footer"
      className="my-6 sm:my-8 text-sm sm:text-base lg:text-lg flex md:justify-between justify-center"
    >
      <section>
        <p>
          <span className="text-xl sm:text-2xl">&copy;</span> {curYear} . SHARON
          . ALL RIGHTS RESERVED
        </p>
        <p className="texl-xs">
          This website is based on the{" "}
          <a
            className="underline text-blue-500"
            target="_blank"
            href="https://github.com/adex-hub/ade-folio.git"
          >
            Portfolio Website — v1
          </a>{" "}
          by Adeola Badero.
        </p>
      </section>

      <Link
        className="md:flex hidden items-center gap-1 leading-tight"
        to="home"
        smooth={true}
        spy={true}
        duration={500}
        href="#home"
        data-blobity-offset-x="2"
        data-blobity-offset-y="0"
        // onClick={() => setSectionInView("home")}
      >
        <Icon icon="mdi:arrow-top" className="text-2xl rounded-2xlt" />
        <p className="underline leading-tight">SCROLL TO TOP</p>
      </Link>
    </section>
  );
}
