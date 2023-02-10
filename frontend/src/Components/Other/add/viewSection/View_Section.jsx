import React, { useEffect, useState } from "react";
import "./view_section.scss";
import axios, { all } from "axios";

const View_Section = () => {
  const [allnotes, setAllNotes] = useState([]);

  useEffect(() => {
    function getDatas() {
      axios
        .get("http://localhost:5000/customer/view")
        .then((res) => {
          console.log(res.data);
          setAllNotes(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getDatas();
  }, []);
  return (
    <div className="view_Section">
      {allnotes?.map((datas) => (
        <>
          <div className="item_details">
            <button className="show_btn">SHOW</button>
            <div className="view_header">
              <div className="item_date">{datas.date}</div>
              <div className="item_Header">{datas.header}</div>
            </div>
            <p className="item_textarea">{datas.notes}</p>
          </div>
        </>
      ))}
    </div>
  );
};

export default View_Section;
