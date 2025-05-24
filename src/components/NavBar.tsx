import { useState } from "react";
import Logo from "../assets/33-cropped.png";
import { motion } from "motion/react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-2 sm:p-3 md:p-2 bg-primary-background h-20">
      <a href="/">
        <img className="h-10" src={Logo} alt="Prowess Academy Of Badminton" />
      </a>
      <nav>
        <button onClick={() => setIsOpen(prev => !prev)}className="px-8 md:hidden self-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        {
          isMobile ? isOpen && (
            <motion.ul
              key="mobile-menu"
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '-100%', opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className={`$ fixed flex-col space-y-8 mt-4 p-8 left-0 right-0 min-h-screen bg-primary-background md:min-h-2 md:space-x-8 md:mt-6 md:mr-4 md:relative md:flex md:flex-row md:justify-center md:p-0 md:opacity-100`}
            >
              <li>
                <a href="#gallery" className="font-extrabold">Gallery</a>
              </li>
              <li>
                <a href="#timeline" className="font-extrabold">Timeline</a>
              </li>
              <li>
                <a href="#programs" className="font-extrabold">Programs</a>
              </li>
              <li>
                <a href="#About" className="font-extrabold">About</a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="font-extrabold hover:bg-primary-button-hover self-center bg-primary-button p-3 rounded-xl"
                >
                  Contact Us
                </a>
              </li>
            </motion.ul>
          )
        :(<ul className={`${
    isOpen ? 'flex' : 'hidden'} fixed flex-col space-y-8 mt-4 p-8 left-0 right-0 min-h-screen bg-primary-background md:min-h-2 md:space-x-8 md:mt-6 md:mr-4 md:relative md:flex md:flex-row md:justify-center md:p-0`}>
          <li>
                <a href="#gallery" className="font-extrabold">Gallery</a>
              </li>
              <li>
                <a href="#timeline" className="font-extrabold">Timeline</a>
              </li>
              <li>
                <a href="#programs" className="font-extrabold">Programs</a>
              </li>
              <li>
                <a href="#About" className="font-extrabold">About</a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="font-extrabold hover:bg-primary-button-hover self-center bg-primary-button p-3 rounded-xl"
                >
                  Contact Us
                </a>
              </li>
        </ul>)}
      </nav>
    </nav>
  );
}
