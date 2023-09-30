import { profileImg } from "@/public/assets";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
          Hello!! I'm Sabari, a Mechanical Engineering student with a knack for coding and a strong passion for design. Currently, I'm pursuing my degree in Mechanical Engineering, where I delve into the world of gears, equations, and innovation.
          </p>
          <p>
          Coding has become one of my favorite pastimes. I've honed my skills in HTML and CSS, allowing me to transform lines of code into visually appealing and functional websites. There's something deeply satisfying about bringing digital ideas to life through coding, and I'm always eager to learn and explore more. But I'm not just a coder; I'm also a creative at heart. Designing, whether it's crafting captivating web layouts or sketching innovative mechanical concepts, is where I find my artistic expression. My ability to seamlessly blend aesthetics with functionality sets me apart in the fields of both engineering and design.
          </p>
          <p>
          In summary, I'm not just a Mechanical Engineering student; I'm a well-rounded individual who combines technical knowledge with a love for coding and design. With my dedication to innovation and a commitment to my studies, I'm ready to make a significant impact in the fields of engineering and technology. Whether it's designing websites, crafting mechanical solutions, or pushing the boundaries of my skills, you can expect great things from me in the world of engineering and creativity. <a href="https://relaxingcolors.pro" className="text-textGreen">Checkout my blogs here!!</a>
          </p>
          <p>Here are a few technologies I have been working with recently:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              JavaScript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              HTML
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              CSS
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Figma
            </li>
  
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg ">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src={profileImg}
                alt="profileImg"
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
