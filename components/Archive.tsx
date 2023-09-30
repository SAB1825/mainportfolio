import { useState } from "react";
import ArchiveCard from "./ArchiveCard";
import { motion } from "framer-motion";

const Archive = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other Noteworthy Projects
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          view the archive
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchiveCard
          title="Dynamic Blog website"
          des=" A stunning dynamic blog website using nextjs and sanity.io. With nextauth credentials."
          listItem={["Reactjs", "Tailwind CSS", "sanity.io"]}
          link="https://blog-sab1825.vercel.app/"
        />
        <ArchiveCard
          title="My personal blog"
          des="A nextjs website with SEO optimised. With contentlayer and SupaBase. Also with sitemap. "
          listItem={["Nextjs", "ContentLayer", "Supabase"]}
          link="https://relaxingcolors.pro"
        />
        
        {/* Add more ArchiveCard components as needed */}
        
      </div>
      <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <>
            <button
              onClick={() => setShowMore(false)}
              className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
            >
              Show Less
            </button>
            <p className="ml-4 text-textGreen font-titleFont text-[13px]">
              Working on projects!!
            </p>
          </>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Archive;
