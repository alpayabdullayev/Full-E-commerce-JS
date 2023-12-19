import React from "react";

const SectionTitleContent = ({ title, func, btn }) => {
  return (
    <div className="flashSales py-2 block sm:justify-between items-center sm:flex-wrap">
      <div className="flex justify-between sm:justify-between items-center gap-4 sm:gap-20 flex-wrap">
        <div className="flex gap-4 sm:gap-20 items-center text-center sm:text-left">
          <h1 className="font30xl font-bold">{title}</h1>
          <div>{func}</div>
        </div>
        <div className="text-center sm:flex justify-center items-center block">
          {btn}
        </div>
      </div>
    </div>
  );
};

export default SectionTitleContent;
