import React from "react";
import Add_form from "./addSection/Add_form";
import View_Section from "./viewSection/View_Section";

const Add = () => {
  return (
    <div add_main>
      <div className="addingPart">
        <Add_form />
      </div>
      <div className="ViewingPart">
        <View_Section />
      </div>
    </div>
  );
};

export default Add;
