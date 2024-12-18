import React from "react";
import "../Movielist.css";

function Movielist({ poster, title, year, type, setSelectedMovie, id }) {
  const capitalFirstLetter = (word) => {
    let firstLetter = word.charAt(0).toUpperCase();
    let str = firstLetter + word.slice(1);
    return str;
  };

  const handleOnClick = () => {
    setSelectedMovie(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="movielist__container" onClick={handleOnClick}>
      <img
        src={
          poster
            ? poster
            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqfNNOBV277GBhm6AafAXMDGRKE3-d6ic6g4VsIDk&s"
        }
        alt=""
      />
      <div className="movielist__title">
        <span>{title.length > 30 ? title.slice(0, 31) + "..." : title}</span>
      </div>
      <div className="movielist__details">
        <small>Year : {year}</small>
        <small>Type : {capitalFirstLetter(type)}</small>
      </div>
    </div>
  );
}

export default Movielist;
