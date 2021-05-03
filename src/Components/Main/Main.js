import React from "react";
import FourthBlock from "./MainBlocks/FourthBlock/FourthBlock";

import MainFirstBlock from "./MainBlocks/MainFirstBlock/MainFirstBlock";
import ShortArticles from "./MainBlocks/ShortArticles/ShortArticles";
import ThirdBlock from "./MainBlocks/ThirdBlock/ThirdBlock";

const Main = () => {
  return (
    <div>
      <MainFirstBlock />
      <ShortArticles />
      <ThirdBlock />
      <FourthBlock />
    </div>
  );
};

export default Main;
