import React from "react";

import MainFirstBlock from "./MainBlocks/MainFirstBlock/MainFirstBlock";
import ShortArticles from "./MainBlocks/ShortArticles/ShortArticles";
import ThirdBlock from "./MainBlocks/ThirdBlock/ThirdBlock";

const Main = () => {
  return (
    <div>
      <MainFirstBlock />
      <ShortArticles />
      <ThirdBlock />
    </div>
  );
};

export default Main;
