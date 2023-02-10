import React, { useState } from "react";
import axios from "axios";
import "./add_form.scss";

const Add_form = () => {
  const [date, setDate] = useState("");
  const [header, setHeader] = useState("");
  const [notes, setNotes] = useState("");

  function submitNote(e) {
    e.preventDefault();
    const datas = {
      date,
      header,
      notes,
    };

    axios
      .post("http://localhost:5000/customer/", datas)
      .then(() => {
        setDate("");
        setHeader("");
        setNotes("");
      })
      .catch((err) => {
        console.log(err);
        alert("Server Error");
      });
  }

  return (
    <div className="add">
      <div className="add_section">
        <form className="adding_form">
          <div className="adding_input_col col1">
            <label className="input_lable">Date</label>
            <input
              onChange={(e) => setDate(e.target.value)}
              className="input1"
              type="date"
              placeholder="Input note date"
            />
          </div>

          <div className="adding_input_col col2">
            <label className="input_lable">Header</label>
            <input
              onChange={(e) => setHeader(e.target.value)}
              className="input1"
              type="text"
              placeholder="Input note header"
            />
          </div>

          <div className="adding_input_col col4">
            <label className="input_lable">Input your note</label>
            <textarea
              onChange={(e) => setNotes(e.target.value)}
              name="text"
              id=""
              cols="40"
              rows="15"
            ></textarea>
          </div>
          <button className="adding_btn" onClick={submitNote}>
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default Add_form;
