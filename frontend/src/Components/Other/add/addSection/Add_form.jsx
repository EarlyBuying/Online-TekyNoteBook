import React from "react";
import "./add_form.scss";

const Add_form = () => {
  return (
    <div className="add">
      <div className="add_section">
        <button className="adding_btn">SUBMIT</button>

        <form className="adding_form">
          <div className="adding_input_col col1">
            <label className="input_lable">Date</label>
            <input
              className="input1"
              type="date"
              placeholder="Input note date"
            />
          </div>

          <div className="adding_input_col col2">
            <label className="input_lable">Header</label>
            <input
              className="input1"
              type="text"
              placeholder="Input note header"
            />
          </div>

          <div className="adding_input_col col3">
            <label className="input_lable">Image</label>
            <input className="file_input" type="file" />
          </div>

          <div className="adding_input_col col4">
            <label className="input_lable">Input your note</label>
            <textarea name="text" id="" cols="40" rows="15"></textarea>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add_form;
