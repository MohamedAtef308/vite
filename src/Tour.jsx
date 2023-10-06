import { useState } from "react";

import React from "react";

export default function Tour({
  id,
  tourImg,
  tourTitle,
  tourDescription,
  tourPrice,
  removeTour,
}) {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={tourImg} alt={tourTitle} className="img" />
      <span className="tour-price">${tourPrice}</span>

      <div className="tour-info">
        <h5>{tourTitle}</h5>

        <p>
          {readMore
            ? tourDescription
            : `${tourDescription.substring(0, 200)}...`}

          <button
            className="info-btn"
            onClick={() => {
              setReadMore(!readMore);
            }}
          >
            {readMore ? "show less" : " read more"}
          </button>
        </p>

        <button
          className="delete-btn btn-block btn"
          onClick={() => {
            removeTour(id);
          }}
        >
          Not Interested
        </button>
      </div>
    </article>
  );
}
