import React from "react";

const RightSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-6 text-textLight">
      <a href="mailto:sabarisekar777@gmail.com">
        <p className="text-sm rotate-90 w-78  tracking-widest text-textGreen">
          sabarisekar777@gmail.com
        </p>
      </a>
      <span className="w-[2px] h-40 bg-textDark inline-flex"></span>
    </div>
  );
};

export default RightSide;
